import manifest from "../../public/images/manifest.json";

/** Una versión de la imagen con un ancho concreto. */
export type ImageVariant = { width: number; src: string };

/** Lo que genera scripts/optimize-images.ts para cada imagen. */
export type ImageEntry = {
  width: number;
  height: number;
  blurDataURL: string;
  avif: ImageVariant[];
  webp: ImageVariant[];
};

// TypeScript deduce el tipo del JSON a partir de su contenido; aquí se
// declara la forma que garantiza el script.
const images: Record<string, ImageEntry> = manifest;

/**
 * Devuelve los datos de una imagen por su clave (su ruta en recursos/ sin
 * extensión). Si no existe, falla: como la web se exporta estática, el
 * error aparece en `npm run build` y no en producción.
 */
export function getImage(key: string): ImageEntry {
  const image = images[key];
  if (!image) {
    throw new Error(
      `No existe la imagen "${key}" en public/images/manifest.json. ¿Has ejecutado npm run images?`,
    );
  }
  return image;
}

/** Convierte las variantes al formato de srcset: "/a-640.webp 640w, /a-1024.webp 1024w". */
export function toSrcSet(variants: ImageVariant[]): string {
  return variants.map((variant) => `${variant.src} ${variant.width}w`).join(", ");
}
