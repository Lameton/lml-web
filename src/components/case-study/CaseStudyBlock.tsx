import { ResponsiveImage } from "@/components/ResponsiveImage";
import type { CaseStudyBlock as Block } from "@/content/case-study";

type CaseStudyBlockProps = {
  block: Block;
};

/**
 * Pinta una pieza de una sección del caso de estudio según su tipo. Solo usa
 * clases con los colores del tema (paper, ink, accent), así que se adapta a
 * la paleta de cada caso.
 */
export function CaseStudyBlock({ block }: CaseStudyBlockProps) {
  switch (block.type) {
    case "paragraphs":
      return (
        <div className="type-body space-y-4 text-ink/85">
          {block.items.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      );

    case "list":
      return (
        <ul className="type-body space-y-2 text-ink/85">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-accent" aria-hidden="true">
                •
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case "code":
      return (
        <figure>
          {/* break-all: las rutas largas no tienen espacios y, sin él,
              desbordan en móvil. */}
          <figcaption className="type-meta break-all text-ink/60">
            {block.file}
          </figcaption>
          {/* tabIndex: si el código no cabe, se puede desplazar con el
              teclado. */}
          <pre
            tabIndex={0}
            className="mt-2 overflow-x-auto rounded-xl border border-ink/15 bg-ink/5 p-5 text-sm leading-relaxed text-ink"
          >
            <code>{block.code}</code>
          </pre>
        </figure>
      );

    case "images":
      return (
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {block.items.map((image) => (
            <li key={image.src}>
              <ResponsiveImage
                src={image.src}
                alt={image.alt}
                sizes="(min-width: 768px) 11rem, 50vw"
                className="h-auto w-full rounded-lg shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
              />
            </li>
          ))}
        </ul>
      );

    case "stats":
      return (
        <dl className="grid gap-3 sm:grid-cols-2">
          {block.items.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border-2 border-accent/60 p-4"
            >
              <dt className="type-meta text-ink/70">{stat.label}</dt>
              <dd className="type-stat mt-2 text-accent">{stat.value}</dd>
            </div>
          ))}
        </dl>
      );

    case "link":
      return (
        <a
          href={block.href}
          target="_blank"
          rel="noopener noreferrer"
          className="type-action inline-flex text-accent underline-offset-4 transition hover:underline"
        >
          {block.label} ↗
        </a>
      );
  }
}
