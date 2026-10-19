import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { GalleryZoom, type GalleryZoomImage } from "./GalleryZoom";

const images: GalleryZoomImage[] = [
  {
    title: "Primera imagen",
    category: "Marca",
    tag: "Logotipo",
    alt: "Primera imagen ampliada",
    image: {
      width: 800,
      height: 600,
      avif: [{ width: 800, src: "/primera.avif" }],
      webp: [{ width: 800, src: "/primera.webp" }],
    },
  },
  {
    title: "Segunda imagen",
    category: "Marca",
    tag: "Aplicación",
    alt: "Segunda imagen ampliada",
    image: {
      width: 800,
      height: 600,
      avif: [{ width: 800, src: "/segunda.avif" }],
      webp: [{ width: 800, src: "/segunda.webp" }],
    },
  },
];

beforeEach(() => {
  HTMLDialogElement.prototype.showModal = function showModal() {
    this.setAttribute("open", "");
  };
  HTMLDialogElement.prototype.close = function close() {
    this.removeAttribute("open");
    this.dispatchEvent(new Event("close"));
  };
});

function renderGalleryZoom() {
  render(
    <GalleryZoom images={images} index={0}>
      <span>{images[0].alt}</span>
    </GalleryZoom>,
  );
}

describe("GalleryZoom navigation", () => {
  it("changes images with the side buttons without closing the dialog", () => {
    renderGalleryZoom();

    fireEvent.click(
      screen.getByRole("button", { name: /ampliar primera imagen/i }),
    );
    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("open");

    fireEvent.click(screen.getByRole("button", { name: "Imagen siguiente" }));
    expect(dialog.querySelector("img")).toHaveAttribute(
      "alt",
      "Segunda imagen ampliada",
    );
    expect(dialog).toHaveAttribute("open");

    fireEvent.click(screen.getByRole("button", { name: "Imagen anterior" }));
    expect(dialog.querySelector("img")).toHaveAttribute(
      "alt",
      "Primera imagen ampliada",
    );
  });

  it("navigates with arrow keys and wraps at both ends", () => {
    renderGalleryZoom();

    fireEvent.click(
      screen.getByRole("button", { name: /ampliar primera imagen/i }),
    );
    const dialog = screen.getByRole("dialog");

    fireEvent.keyDown(dialog, { key: "ArrowLeft" });
    expect(dialog.querySelector("img")).toHaveAttribute(
      "alt",
      "Segunda imagen ampliada",
    );

    fireEvent.keyDown(dialog, { key: "ArrowRight" });
    expect(dialog.querySelector("img")).toHaveAttribute(
      "alt",
      "Primera imagen ampliada",
    );
  });

  it("closes the dialog with Escape", () => {
    renderGalleryZoom();

    fireEvent.click(
      screen.getByRole("button", { name: /ampliar primera imagen/i }),
    );
    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("open");

    fireEvent.keyDown(dialog, { key: "Escape" });
    expect(dialog).not.toHaveAttribute("open");
  });
});
