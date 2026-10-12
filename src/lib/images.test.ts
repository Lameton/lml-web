import { describe, expect, it, vi } from "vitest";
import { getImage, toSrcSet } from "./images";

// Manifiesto de prueba: no depende de las imágenes reales del proyecto.
vi.mock("../../public/images/manifest.json", () => ({
  default: {
    "carteles/prueba": {
      width: 1800,
      height: 2546,
      blurDataURL: "data:image/webp;base64,AAAA",
      avif: [{ width: 640, src: "/images/carteles/prueba-640.avif" }],
      webp: [{ width: 640, src: "/images/carteles/prueba-640.webp" }],
    },
  },
}));

describe("getImage", () => {
  it("devuelve los datos de una imagen existente", () => {
    expect(getImage("carteles/prueba")).toMatchObject({ width: 1800, height: 2546 });
  });

  it("falla con un mensaje que nombra la clave si la imagen no existe", () => {
    expect(() => getImage("no-existe")).toThrow('"no-existe"');
  });
});

describe("toSrcSet", () => {
  it("une las variantes con su ancho en el formato de srcset", () => {
    const srcSet = toSrcSet([
      { width: 640, src: "/a-640.webp" },
      { width: 1024, src: "/a-1024.webp" },
    ]);
    expect(srcSet).toBe("/a-640.webp 640w, /a-1024.webp 1024w");
  });
});
