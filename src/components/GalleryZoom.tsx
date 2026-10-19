"use client";

import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { toSrcSet, type ImageEntry } from "@/lib/images";

export type GalleryZoomImage = {
  title: string;
  category: string;
  tag: string;
  year?: string;
  alt: string;
  image: Pick<ImageEntry, "width" | "height" | "avif" | "webp">;
};

type GalleryZoomProps = {
  images: GalleryZoomImage[];
  index: number;
  children: ReactNode;
};

export function GalleryZoom({ images, index, children }: GalleryZoomProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(index);
  const gallery = images;
  const thumbnail = gallery[index] ?? gallery[0];
  const activeImage = gallery[activeIndex] ?? thumbnail;

  if (!thumbnail || !activeImage) return children;

  function openDialog() {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;

    setActiveIndex(index);
    dialog.showModal();
    setIsOpen(true);
  }

  function closeDialog() {
    dialogRef.current?.close();
  }

  function navigate(direction: -1 | 1) {
    setActiveIndex(
      (currentIndex) =>
        (currentIndex + direction + gallery.length) % gallery.length,
    );
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeDialog();
      return;
    }

    if (gallery.length < 2) return;

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      navigate(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      navigate(1);
    }
  }

  const largestWebp = activeImage.image.webp[activeImage.image.webp.length - 1];

  return (
    <>
      <button
        type="button"
        className="gallery-zoom-button"
        aria-label={`Ampliar ${thumbnail.title}: ${thumbnail.tag}`}
        title="Ampliar imagen"
        onClick={openDialog}
      >
        {children}
        <span className="gallery-zoom-icon" aria-hidden="true">
          +
        </span>
      </button>

      <dialog
        ref={dialogRef}
        className="gallery-lightbox"
        aria-label={`Vista ampliada: ${activeImage.title}`}
        onKeyDown={handleKeyDown}
        onClose={() => setIsOpen(false)}
        onCancel={(event) => {
          event.preventDefault();
          closeDialog();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDialog();
        }}
      >
        <button
          type="button"
          className="gallery-lightbox-close"
          aria-label="Cerrar vista ampliada"
          title="Cerrar"
          onClick={closeDialog}
        >
          ×
        </button>

        {isOpen && (
          <>
            {gallery.length > 1 && (
              <>
                <button
                  type="button"
                  className="gallery-lightbox-nav gallery-lightbox-prev"
                  aria-label="Imagen anterior"
                  title="Imagen anterior"
                  onClick={() => navigate(-1)}
                >
                  <span aria-hidden="true">‹</span>
                </button>
                <button
                  type="button"
                  className="gallery-lightbox-nav gallery-lightbox-next"
                  aria-label="Imagen siguiente"
                  title="Imagen siguiente"
                  onClick={() => navigate(1)}
                >
                  <span aria-hidden="true">›</span>
                </button>
              </>
            )}

            <figure>
              <picture>
                <source
                  type="image/avif"
                  srcSet={toSrcSet(activeImage.image.avif)}
                  sizes="90vw"
                />
                <source
                  type="image/webp"
                  srcSet={toSrcSet(activeImage.image.webp)}
                  sizes="90vw"
                />
                <img
                  key={activeIndex}
                  src={largestWebp.src}
                  alt={activeImage.alt}
                  width={activeImage.image.width}
                  height={activeImage.image.height}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="gallery-lightbox-image"
                />
              </picture>
              <figcaption className="gallery-lightbox-caption">
                <span className="type-card-title">{activeImage.title}</span>
                <span className="type-meta text-ink/70" aria-live="polite">
                  {activeImage.category} · {activeImage.tag}
                  {activeImage.year ? ` · ${activeImage.year}` : ""}
                </span>
              </figcaption>
            </figure>
          </>
        )}
      </dialog>
    </>
  );
}
