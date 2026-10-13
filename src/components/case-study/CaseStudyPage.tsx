import type { CSSProperties } from "react";
import Link from "next/link";
import { BrowserFrame } from "@/components/BrowserFrame";
import { CaseStudyBlock } from "@/components/case-study/CaseStudyBlock";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import type { CaseStudy } from "@/content/case-study";

type CaseStudyPageProps = {
  study: CaseStudy;
};

/**
 * Plantilla de los casos de estudio. La paleta del caso (study.theme) se
 * aplica como variables CSS sobre la página: las clases bg-paper, text-ink,
 * text-accent… toman esos colores sin estilos nuevos. El footer queda fuera,
 * con el estilo general de la web.
 */
export function CaseStudyPage({ study }: CaseStudyPageProps) {
  const { theme } = study;
  const themeStyle = {
    "--color-paper": theme.paper,
    "--color-ink": theme.ink,
    "--color-accent": theme.accent,
    // La textura de grano se aclara sobre fondos oscuros y se oscurece
    // sobre fondos claros.
    "--noise-blend": theme.dark ? "screen" : "multiply",
    "--noise-opacity": theme.dark ? "0.14" : "0.08",
    colorScheme: theme.dark ? "dark" : "light",
  } as CSSProperties;

  return (
    <>
      <main
        style={themeStyle}
        className="noise-surface min-h-screen bg-paper text-ink"
      >
        {/* Contenedor intermedio: .noise-surface > * fuerza position:
            relative en sus hijos directos y anularía el sticky del menú. */}
        <div>
          <header className="sticky top-0 z-50 border-b border-ink/15 bg-paper/85 px-4 backdrop-blur-sm sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 py-4">
              <Link
                href="/"
                className="type-meta text-ink/75 transition hover:text-accent"
              >
                ← Inicio
              </Link>
              <p className="type-meta text-accent">
                Caso de estudio · {study.name}
              </p>
            </div>
          </header>

          <section className="relative overflow-hidden">
            {study.heroBackground && (
              <>
                <ResponsiveImage
                  src={study.heroBackground}
                  alt=""
                  sizes="100vw"
                  // Está arriba del todo y es lo más grande de la pantalla:
                  // si carga en diferido, retrasa el LCP.
                  priority
                  className="absolute inset-0 h-full w-full object-cover opacity-60"
                />
                <div
                  className="absolute inset-0 bg-linear-to-b from-paper/70 via-paper/85 to-paper"
                  aria-hidden="true"
                />
              </>
            )}

            <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:py-24">
              <p className="type-meta text-accent">Caso de estudio</p>
              <h1 className="type-display mt-3">{study.name}</h1>
              <p className="type-lead mt-6 max-w-2xl">{study.summary}</p>

              <dl className="mt-10 grid gap-x-8 gap-y-5 border-t border-accent/40 pt-6 sm:grid-cols-2">
                {study.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="type-meta text-accent">{fact.label}</dt>
                    <dd className="type-body mt-1 text-ink/85">{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <a
                href={study.url}
                target="_blank"
                rel="noopener noreferrer"
                className="type-action mt-8 inline-flex text-accent underline-offset-4 transition hover:underline"
              >
                Visitar {study.urlLabel} ↗
              </a>

              {study.screenshot && (
                <div className="mt-12">
                  <BrowserFrame
                    url={study.urlLabel}
                    src={study.screenshot.src}
                    alt={study.screenshot.alt}
                    sizes="(min-width: 1024px) 64rem, 100vw"
                  />
                </div>
              )}
            </div>
          </section>

          {/* Cuerpo en una sola columna estrecha: se lee como un artículo. */}
          <div className="mx-auto max-w-3xl space-y-16 px-4 py-16 sm:px-6 lg:py-24">
            {study.sections.map((section) => (
              <section key={section.id} aria-labelledby={section.id}>
                <h2 id={section.id} className="type-section">
                  {section.title}
                </h2>
                <div className="mt-6 space-y-6">
                  {section.blocks.map((block, index) => (
                    <CaseStudyBlock key={index} block={block} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      {/* Footer con el estilo general de la web, igual en todos los casos. */}
      <footer className="theme-light noise-surface bg-paper text-ink">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-4 border-t border-ink/15 px-4 py-8 sm:px-6">
          <Link
            href="/"
            className="type-action text-ink transition hover:text-accent"
          >
            ← Volver al inicio
          </Link>
          <a
            href={study.url}
            target="_blank"
            rel="noopener noreferrer"
            className="type-action text-ink transition hover:text-accent"
          >
            Ver la web ↗
          </a>
        </div>
      </footer>
    </>
  );
}
