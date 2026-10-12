import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ResponsiveImage } from "./ResponsiveImage";

vi.mock("../../public/images/manifest.json", () => ({
  default: {
    foto: {
      width: 2000,
      height: 1500,
      blurDataURL: "data:image/webp;base64,AAAA",
      avif: [
        { width: 640, src: "/images/foto-640.avif" },
        { width: 1024, src: "/images/foto-1024.avif" },
      ],
      webp: [
        { width: 640, src: "/images/foto-640.webp" },
        { width: 1024, src: "/images/foto-1024.webp" },
      ],
    },
  },
}));

const SIZES = "(min-width: 1024px) 50vw, 100vw";

describe("ResponsiveImage", () => {
  it("ofrece AVIF y WebP con srcset y sizes", () => {
    const { container } = render(<ResponsiveImage src="foto" alt="Retrato" sizes={SIZES} />);

    const avif = container.querySelector('source[type="image/avif"]');
    const webp = container.querySelector('source[type="image/webp"]');
    expect(avif).toHaveAttribute("srcset", "/images/foto-640.avif 640w, /images/foto-1024.avif 1024w");
    expect(avif).toHaveAttribute("sizes", SIZES);
    expect(webp).toHaveAttribute("srcset", "/images/foto-640.webp 640w, /images/foto-1024.webp 1024w");
  });

  it("define alt, width y height y usa el WebP más grande como respaldo", () => {
    render(<ResponsiveImage src="foto" alt="Retrato" sizes={SIZES} />);

    const img = screen.getByRole("img", { name: "Retrato" });
    expect(img).toHaveAttribute("width", "2000");
    expect(img).toHaveAttribute("height", "1500");
    expect(img).toHaveAttribute("src", "/images/foto-1024.webp");
  });

  it("carga en diferido por defecto", () => {
    render(<ResponsiveImage src="foto" alt="Retrato" sizes={SIZES} />);

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("loading", "lazy");
    expect(img).toHaveAttribute("fetchpriority", "auto");
  });

  it("con priority carga de inmediato y con prioridad alta", () => {
    render(<ResponsiveImage src="foto" alt="Retrato" sizes={SIZES} priority />);

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("loading", "eager");
    expect(img).toHaveAttribute("fetchpriority", "high");
  });
});
