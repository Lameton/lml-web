import { ResponsiveImage } from "@/components/ResponsiveImage";

type BrowserFrameProps = {
  /** Dirección que se muestra en la barra, p. ej. "artabrianweekends.com". */
  url: string;
  src: string;
  alt: string;
  sizes: string;
};

/**
 * Captura de una web dentro de un marco de navegador simplificado. El marco
 * la separa del fondo y deja claro que lo que se ve es una web.
 */
export function BrowserFrame({ url, src, alt, sizes }: BrowserFrameProps) {
  return (
    <figure className="overflow-hidden rounded-xl border border-aw-gold/50 bg-aw-black shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
      <div
        className="flex items-center gap-3 border-b border-aw-gold/30 px-4 py-2.5"
        aria-hidden="true"
      >
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-aw-cream/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-aw-cream/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-aw-cream/25" />
        </span>
        <span className="type-detail text-aw-cream/60">{url}</span>
      </div>
      <ResponsiveImage
        src={src}
        alt={alt}
        sizes={sizes}
        className="block h-auto w-full"
      />
    </figure>
  );
}
