"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { toSrcSet, type ImageEntry } from "@/lib/images";
import type { ProjectEditionPoster } from "@/content/home";

type EditionPoster = ProjectEditionPoster & {
  image: Pick<ImageEntry, "width" | "height" | "avif" | "webp">;
};

type FeaturedEditionGalleryProps = {
  projectName: string;
  posters: EditionPoster[];
};

function PosterPicture({
  poster,
  alt,
  className,
  sizes,
  loading = "lazy",
}: {
  poster: EditionPoster;
  alt: string;
  className: string;
  sizes: string;
  loading?: "eager" | "lazy";
}) {
  const fallback = poster.image.webp[poster.image.webp.length - 1];
  const fitClass = poster.fit === "cover" ? "object-cover" : "object-contain";

  return (
    <picture className="featured-edition-picture">
      <source
        type="image/avif"
        srcSet={toSrcSet(poster.image.avif)}
        sizes={sizes}
      />
      <source
        type="image/webp"
        srcSet={toSrcSet(poster.image.webp)}
        sizes={sizes}
      />
      <img
        src={fallback.src}
        alt={alt}
        width={poster.image.width}
        height={poster.image.height}
        loading={loading}
        fetchPriority={loading === "eager" ? "high" : "auto"}
        decoding="async"
        className={`${className} ${fitClass}`}
      />
    </picture>
  );
}

export function FeaturedEditionGallery({
  projectName,
  posters,
}: FeaturedEditionGalleryProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const posterButtonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const returnIndexRef = useRef(0);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    if (activeIndex === null) {
      posterButtonRefs.current[returnIndexRef.current]?.focus();
    } else {
      detailRef.current?.focus();
    }
  }, [activeIndex, isOpen]);

  function openGallery() {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;

    returnIndexRef.current = 0;
    setActiveIndex(null);
    dialog.showModal();
    setIsOpen(true);
  }

  function closeGallery() {
    dialogRef.current?.close();
  }

  function showPoster(index: number) {
    returnIndexRef.current = index;
    setActiveIndex(index);
  }

  function movePoster(direction: -1 | 1) {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null || posters.length === 0) return currentIndex;
      return (currentIndex + direction + posters.length) % posters.length;
    });
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
    if (activeIndex === null) return;

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      movePoster(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      movePoster(1);
    }
  }

  const activePoster =
    activeIndex === null ? null : (posters[activeIndex] ?? null);

  return (
    <>
      <button
        type="button"
        className="featured-edition-trigger"
        aria-haspopup="dialog"
        aria-label={`Abrir galería de carteles de ${projectName}, ${posters.length} carteles`}
        onClick={openGallery}
      >
        <span className="featured-edition-preview" aria-hidden="true">
          {posters.map((poster) => (
            <span key={poster.src} className="featured-edition-preview-card">
              <PosterPicture
                poster={poster}
                alt=""
                sizes="(min-width: 640px) 4rem, 2.5rem"
                className="featured-edition-preview-image"
              />
            </span>
          ))}
        </span>
        <span className="featured-edition-trigger-copy">
          <span className="type-meta text-aw-gold">Archivo visual</span>
          <span className="type-card-title text-aw-cream">
            Carteles de las ediciones
          </span>
          <span className="type-meta text-aw-cream/70">
            Ver galería · {posters.length} carteles
          </span>
        </span>
        <span className="featured-edition-trigger-icon" aria-hidden="true">
          ↗
        </span>
      </button>

      <dialog
        ref={dialogRef}
        className="gallery-lightbox featured-edition-dialog"
        aria-label={`Carteles de ${projectName}`}
        onClose={() => {
          setIsOpen(false);
          setActiveIndex(null);
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeGallery();
        }}
        onKeyDown={handleKeyDown}
      >
        <button
          type="button"
          className="gallery-lightbox-close"
          aria-label="Cerrar galería"
          title="Cerrar"
          onClick={closeGallery}
        >
          ×
        </button>

        <div className="featured-edition-dialog-heading">
          <p className="type-meta text-aw-gold">{projectName}</p>
          <h3 className="type-card-title mt-1 text-aw-cream">
            {activePoster ? activePoster.label : "Carteles de las ediciones"}
          </h3>
        </div>

        {activePoster && activeIndex !== null ? (
          <>
            <div
              ref={detailRef}
              className="featured-edition-detail"
              tabIndex={-1}
            >
              <button
                type="button"
                className="featured-edition-arrow featured-edition-arrow-previous"
                aria-label="Cartel anterior"
                title="Cartel anterior"
                onClick={() => movePoster(-1)}
              >
                ←
              </button>
              <figure className="featured-edition-detail-figure">
                <PosterPicture
                  poster={activePoster}
                  alt={activePoster.alt}
                  sizes="90vw"
                  loading="eager"
                  className="featured-edition-full-image"
                />
                <figcaption className="gallery-lightbox-caption">
                  <span className="type-meta text-aw-cream/70">
                    {activeIndex + 1} de {posters.length} carteles
                  </span>
                </figcaption>
              </figure>
              <button
                type="button"
                className="featured-edition-arrow featured-edition-arrow-next"
                aria-label="Cartel siguiente"
                title="Cartel siguiente"
                onClick={() => movePoster(1)}
              >
                →
              </button>
            </div>
            <div className="featured-edition-back-row">
              <button
                type="button"
                className="featured-edition-back type-action"
                onClick={() => setActiveIndex(null)}
              >
                ← Ver todos los carteles
              </button>
            </div>
          </>
        ) : (
          <ul className="featured-edition-grid">
            {posters.map((poster, index) => (
              <li key={poster.src}>
                <button
                  ref={(button) => {
                    posterButtonRefs.current[index] = button;
                  }}
                  type="button"
                  className="featured-edition-card"
                  aria-label={`Ver ${poster.label}`}
                  onClick={() => showPoster(index)}
                >
                  <span className="featured-edition-card-image">
                    <PosterPicture
                      poster={poster}
                      alt=""
                      sizes="(min-width: 768px) 20vw, 42vw"
                      className="featured-edition-card-image-content"
                    />
                    <span
                      className="featured-edition-card-zoom"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </span>
                  <span className="type-meta featured-edition-card-label">
                    {poster.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </dialog>
    </>
  );
}
