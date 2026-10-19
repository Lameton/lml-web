/**
 * Optimiza las imágenes de recursos/ y las deja en public/images/.
 *
 * Uso: npm run images
 *
 * Por cada original genera:
 * - AVIF y WebP en los anchos de WIDTHS, sin ampliar nunca el original.
 * - Una miniatura difuminada en base64 para mostrar mientras carga.
 * - Una entrada en public/images/manifest.json con ancho, alto y rutas,
 *   que es lo que lee el componente ResponsiveImage.
 *
 * La clave de cada imagen es su ruta dentro de recursos/ sin extensión:
 * recursos/artabrian/web-escritorio.png → "artabrian/web-escritorio".
 * Las imágenes dentro de cualquier carpeta "carteles" (recursos/carteles/,
 * recursos/artabrian/carteles/…) se comprimen con más calidad
 * porque tienen texto fino.
 */
import { existsSync } from "node:fs";
import { mkdir, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
// Solo el tipo: ResponsiveImage lee este mismo formato del manifiesto.
import type { ImageEntry } from "../src/lib/images";

const INPUT_DIR = "recursos";
const OUTPUT_DIR = path.join("public", "images");
const MANIFEST_PATH = path.join(OUTPUT_DIR, "manifest.json");

// 320: carteles y fotos pequeñas en móvil, para no descargar la versión de 640.
const WIDTHS = [320, 640, 1024, 1600, 2400];
const INPUT_EXTENSIONS = [
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
  ".tif",
  ".tiff",
];
const POSTERS_DIR = "carteles";
const BLUR_WIDTH = 20;

// Calidad de 1 a 100. Rodrigo valida el resultado visual de los carteles.
const QUALITY = {
  default: { avif: 60, webp: 78 },
  poster: { avif: 80, webp: 92 },
};

// Solo minúsculas, números, guiones y barras: las claves acaban en URLs.
const VALID_KEY = /^[a-z0-9-]+(\/[a-z0-9-]+)*$/;

/** Devuelve todos los archivos de una carpeta y sus subcarpetas. */
async function listFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true, recursive: true });
  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => path.join(entry.parentPath, entry.name));
}

/**
 * Anchos a generar: los de WIDTHS menores que el original, más el propio
 * ancho del original (limitado a 2400). Así nunca se amplía la imagen y
 * siempre existe la versión de mayor calidad posible.
 */
function getTargetWidths(originalWidth: number): number[] {
  const largest = Math.min(originalWidth, WIDTHS[WIDTHS.length - 1]);
  const smaller = WIDTHS.filter((width) => width < largest);
  return [...smaller, largest];
}

async function processImage(file: string): Promise<[string, ImageEntry]> {
  const relative = path.relative(INPUT_DIR, file);
  const parsed = path.parse(relative);
  // Normaliza nombres habituales y conserva las claves de URL en ASCII.
  const key = path
    .join(parsed.dir, parsed.name)
    .split(path.sep)
    .map((segment) =>
      segment
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/_/g, "-"),
    )
    .join("/");

  if (!VALID_KEY.test(key)) {
    throw new Error(
      `Nombre no válido: "${relative}". Usa minúsculas, números y guiones (ej.: cartel-honeytomb.jpg).`,
    );
  }

  // Carpetas de la ruta, sin el nombre del archivo: "artabrian/carteles/pokemon" → ["artabrian", "carteles"].
  const folders = key.split("/").slice(0, -1);
  const isPoster = folders.includes(POSTERS_DIR);
  const quality = isPoster ? QUALITY.poster : QUALITY.default;

  // autoOrient() gira la imagen según su EXIF (fotos de móvil) y
  // metadata().autoOrient da las medidas ya giradas.
  const image = sharp(file).autoOrient();
  const { width, height } = (await image.metadata()).autoOrient;

  await mkdir(path.join(OUTPUT_DIR, parsed.dir), { recursive: true });

  const entry: ImageEntry = {
    width,
    height,
    blurDataURL: "",
    avif: [],
    webp: [],
  };

  for (const targetWidth of getTargetWidths(width)) {
    // clone() reutiliza el original leído sin volver a abrir el archivo.
    const resized = image.clone().resize({ width: targetWidth });
    const baseName = `${key}-${targetWidth}`;

    await resized
      .clone()
      .avif({ quality: quality.avif })
      .toFile(path.join(OUTPUT_DIR, `${baseName}.avif`));
    await resized
      .clone()
      .webp({ quality: quality.webp })
      .toFile(path.join(OUTPUT_DIR, `${baseName}.webp`));

    entry.avif.push({ width: targetWidth, src: `/images/${baseName}.avif` });
    entry.webp.push({ width: targetWidth, src: `/images/${baseName}.webp` });
  }

  const blur = await image
    .clone()
    .resize({ width: BLUR_WIDTH })
    .webp({ quality: 50 })
    .toBuffer();
  entry.blurDataURL = `data:image/webp;base64,${blur.toString("base64")}`;

  return [key, entry];
}

async function main() {
  if (!existsSync(INPUT_DIR)) {
    throw new Error(`No existe la carpeta ${INPUT_DIR}/ con los originales.`);
  }

  const files = await listFiles(INPUT_DIR);
  const images = files.filter((file) =>
    INPUT_EXTENSIONS.includes(path.extname(file).toLowerCase()),
  );

  for (const file of files) {
    if (!images.includes(file))
      console.warn(`Se ignora (formato no admitido): ${file}`);
  }

  // Se regenera todo desde cero para no dejar archivos de imágenes borradas.
  await rm(OUTPUT_DIR, { recursive: true, force: true });
  await mkdir(OUTPUT_DIR, { recursive: true });

  const manifest: Record<string, ImageEntry> = {};
  for (const file of images) {
    const [key, entry] = await processImage(file);
    if (manifest[key])
      throw new Error(`Hay dos originales con la clave "${key}".`);
    manifest[key] = entry;
    console.log(
      `✓ ${key} (${entry.webp.map((variant) => variant.width).join(", ")} px)`,
    );
  }

  await writeFile(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(`\n${images.length} imágenes optimizadas en public/images/`);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
