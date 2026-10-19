import { getImage, toSrcSet } from "@/lib/images";

type ResponsiveImageProps = {
  /** Clave de la imagen en el manifiesto, p. ej. "artabrian/web-escritorio". */
  src: string;
  alt: string;
  /**
   * Ancho que ocupa la imagen en pantalla, para que el navegador elija la
   * versión adecuada. P. ej.: "(min-width: 1024px) 50vw, 100vw".
   */
  sizes: string;
  /** Solo para la imagen principal de la portada: carga sin esperar. */
  priority?: boolean;
  showBlurPlaceholder?: boolean;
  className?: string;
};

/**
 * Imagen optimizada por scripts/optimize-images.ts. El navegador elige
 * formato (AVIF si lo admite, si no WebP) y ancho según `sizes`.
 * `width` y `height` reservan el hueco y evitan saltos al cargar.
 */
export function ResponsiveImage({
  src,
  alt,
  sizes,
  priority = false,
  showBlurPlaceholder = true,
  className,
}: ResponsiveImageProps) {
  const image = getImage(src);
  // Para navegadores que no entienden srcset: la versión más grande en WebP.
  const fallback = image.webp[image.webp.length - 1];

  return (
    <picture>
      <source type="image/avif" srcSet={toSrcSet(image.avif)} sizes={sizes} />
      <source type="image/webp" srcSet={toSrcSet(image.webp)} sizes={sizes} />
      <img
        src={fallback.src}
        alt={alt}
        width={image.width}
        height={image.height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className={className}
        // Miniatura difuminada de fondo mientras carga la imagen real.
        style={{
          backgroundImage: showBlurPlaceholder
            ? `url(${image.blurDataURL})`
            : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </picture>
  );
}
