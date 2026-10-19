import { rename } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SOCIAL_IMAGE = path.join("src", "app", "opengraph-image.jpg");
const ARTWORK = path.join("public", "images", "perfil", "forma-cera-1764.webp");
const TEMPORARY_IMAGE = path.join("src", "app", "opengraph-image.tmp.jpg");
const CARD = { left: 816, top: 98, width: 308, height: 434, padding: 8 };

async function main() {
  const artwork = await sharp(ARTWORK)
    .resize({
      width: CARD.width - CARD.padding * 2,
      height: CARD.height - CARD.padding * 2,
      fit: "contain",
      background: "#F1EDE3",
    })
    .flatten({ background: "#F1EDE3" })
    .png()
    .toBuffer();

  const card = await sharp({
    create: {
      width: CARD.width,
      height: CARD.height,
      channels: 4,
      background: "#F1EDE3",
    },
  })
    .composite([
      { input: artwork, left: CARD.padding, top: CARD.padding },
      {
        input: Buffer.from(
          `<svg width="${CARD.width}" height="${CARD.height}"><rect x="1" y="1" width="${CARD.width - 2}" height="${CARD.height - 2}" rx="24" fill="white"/></svg>`,
        ),
        blend: "dest-in",
      },
      {
        input: Buffer.from(
          `<svg width="${CARD.width}" height="${CARD.height}"><rect x="1" y="1" width="${CARD.width - 2}" height="${CARD.height - 2}" rx="24" fill="none" stroke="#C9CBC3" stroke-width="2"/></svg>`,
        ),
      },
    ])
    .png()
    .toBuffer();

  await sharp(SOCIAL_IMAGE)
    .composite([{ input: card, left: CARD.left, top: CARD.top }])
    .jpeg({ quality: 90 })
    .toFile(TEMPORARY_IMAGE);

  await rename(TEMPORARY_IMAGE, SOCIAL_IMAGE);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
