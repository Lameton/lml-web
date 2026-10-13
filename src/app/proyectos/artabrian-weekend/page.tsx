import type { Metadata } from "next";
import Link from "next/link";
import { BrowserFrame } from "@/components/BrowserFrame";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { caseStudy } from "@/content/artabrian";
import { featuredProject } from "@/content/home";
import { baseOpenGraph } from "@/lib/site";

const title = "Artabrian Weekend · Caso de estudio de Rodrigo Lamela";
const description =
  "Web en React guiada por datos e identidad gráfica para el Artabrian Weekend, un fin de semana de torneos de cartas en Ferrol.";
const path = "/proyectos/artabrian-weekend";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  // Sustituye entero el openGraph del layout: hay que repetir lo común.
  openGraph: {
    ...baseOpenGraph,
    type: "article",
    title,
    description,
    url: path,
  },
};

export default function ArtabrianWeekendPage() {
  const { screenshot, posters } = featuredProject;

  return (
    <main className="theme-light noise-surface min-h-screen text-ink">
      <div className="px-4 sm:px-6 lg:px-8">
        <header className="mx-auto flex max-w-5xl items-center justify-between gap-4 border-b border-ink/15 py-4">
          <Link
            href="/"
            className="type-meta text-ink/70 transition hover:text-accent"
          >
            ← Inicio
          </Link>
          <p className="type-meta text-ink/60">Caso de estudio</p>
        </header>
      </div>

      {/* Cabecera con la identidad del evento, como en la portada. */}
      <section className="relative mt-8 overflow-hidden bg-aw-black text-aw-cream">
        <ResponsiveImage
          src="artabrian/fondo-grabado"
          alt=""
          sizes="100vw"
          // Está arriba del todo y es lo más grande de la pantalla: si carga
          // en diferido, retrasa el LCP.
          priority
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div
          className="absolute inset-0 bg-linear-to-b from-aw-black/70 via-aw-black/85 to-aw-black"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:py-24">
          <p className="type-meta text-aw-gold">Caso de estudio</p>
          <h1 className="type-display mt-3 text-aw-cream">{caseStudy.name}</h1>
          <p className="type-lead mt-6 max-w-2xl">{caseStudy.summary}</p>

          <dl className="mt-10 grid gap-x-8 gap-y-5 border-t border-aw-gold/40 pt-6 sm:grid-cols-2">
            {caseStudy.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="type-meta text-aw-gold">{fact.label}</dt>
                <dd className="type-body mt-1 text-aw-cream/85">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href={caseStudy.url}
            target="_blank"
            rel="noopener noreferrer"
            className="type-action mt-8 inline-flex text-aw-gold underline-offset-4 transition hover:text-aw-cream hover:underline"
          >
            Visitar {caseStudy.urlLabel} ↗
          </a>

          <div className="mt-12">
            <BrowserFrame
              url={caseStudy.urlLabel}
              src={screenshot.src}
              alt={screenshot.alt}
              sizes="(min-width: 1024px) 64rem, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Cuerpo en una sola columna estrecha: se lee como un artículo. */}
      <div className="mx-auto max-w-3xl space-y-16 px-4 py-16 sm:px-6 lg:py-24">
        <section aria-labelledby="contexto">
          <h2 id="contexto" className="type-section text-ink">
            Contexto
          </h2>
          {caseStudy.context.map((paragraph) => (
            <p key={paragraph} className="type-body mt-4 text-ink/85">
              {paragraph}
            </p>
          ))}
        </section>

        <section aria-labelledby="papel">
          <h2 id="papel" className="type-section text-ink">
            Mi papel
          </h2>
          <ul className="type-body mt-4 space-y-2 text-ink/85">
            {caseStudy.role.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-accent" aria-hidden="true">
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="web">
          <h2 id="web" className="type-section text-ink">
            La web: de Angular a React
          </h2>
          {caseStudy.web.intro.map((paragraph) => (
            <p key={paragraph} className="type-body mt-4 text-ink/85">
              {paragraph}
            </p>
          ))}

          {caseStudy.web.samples.map((sample) => (
            <figure key={sample.file} className="mt-6">
              {/* break-all: las rutas largas no tienen espacios y, sin él,
                  desbordan en móvil. */}
              <figcaption className="type-meta break-all text-ink/60">
                {sample.file}
              </figcaption>
              {/* tabIndex: si el código no cabe, se puede desplazar con el
                  teclado. */}
              <pre
                tabIndex={0}
                className="mt-2 overflow-x-auto rounded-xl bg-aw-black p-5 text-sm leading-relaxed text-aw-cream"
              >
                <code>{sample.code}</code>
              </pre>
            </figure>
          ))}

          {caseStudy.web.outro.map((paragraph) => (
            <p key={paragraph} className="type-body mt-6 text-ink/85">
              {paragraph}
            </p>
          ))}
        </section>

        <section aria-labelledby="identidad">
          <h2 id="identidad" className="type-section text-ink">
            La identidad
          </h2>
          {caseStudy.identity.map((paragraph) => (
            <p key={paragraph} className="type-body mt-4 text-ink/85">
              {paragraph}
            </p>
          ))}

          <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {posters.map((poster) => (
              <li key={poster.src}>
                <ResponsiveImage
                  src={poster.src}
                  alt={`Cartel del Artabrian Weekend 2026 de ${poster.game}`}
                  sizes="(min-width: 768px) 11rem, 50vw"
                  className="h-auto w-full rounded-lg shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
                />
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="resultados">
          <h2 id="resultados" className="type-section text-ink">
            Resultados
          </h2>
          <dl className="mt-6 grid gap-3 sm:grid-cols-2">
            {caseStudy.results.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-ink/15 p-4"
              >
                <dt className="type-meta text-ink/60">{stat.label}</dt>
                <dd className="type-stat mt-2 text-accent">{stat.value}</dd>
              </div>
            ))}
          </dl>
          <p className="type-body mt-6 text-ink/85">{caseStudy.results.text}</p>
        </section>

        {/* Se muestra cuando haya respuesta de Rodrigo (ver lessons). */}
        {caseStudy.lessons.length > 0 && (
          <section aria-labelledby="distinto">
            <h2 id="distinto" className="type-section text-ink">
              Qué haría distinto
            </h2>
            {caseStudy.lessons.map((paragraph) => (
              <p key={paragraph} className="type-body mt-4 text-ink/85">
                {paragraph}
              </p>
            ))}
          </section>
        )}

        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-ink/15 pt-6">
          <Link
            href="/"
            className="type-action text-ink transition hover:text-accent"
          >
            ← Volver al inicio
          </Link>
          <a
            href={caseStudy.url}
            target="_blank"
            rel="noopener noreferrer"
            className="type-action text-ink transition hover:text-accent"
          >
            Ver la web ↗
          </a>
        </footer>
      </div>
    </main>
  );
}
