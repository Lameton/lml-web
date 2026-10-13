import Link from "next/link";
import { BrowserFrame } from "@/components/BrowserFrame";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import type { FeaturedProject as FeaturedProjectData } from "@/content/home";

type FeaturedProjectProps = {
  project: FeaturedProjectData;
};

/**
 * Proyecto destacado de la portada. Usa la identidad del Artabrian Weekend
 * (negro, oro y el grabado de sus carteles) en lugar de la paleta de la web,
 * así que no cambia con el modo claro u oscuro.
 */
export function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <section
      id="proyecto"
      aria-labelledby="proyecto-titulo"
      // Los márgenes negativos compensan el padding del contenedor de la
      // página para que el fondo llegue de borde a borde. --focus-ring pone
      // en oro el contorno de foco, que en el color de acento no se vería
      // sobre negro.
      className="relative -mx-4 overflow-hidden bg-aw-black py-16 text-aw-cream [--focus-ring:var(--color-aw-gold)] sm:-mx-6 lg:-mx-8 lg:py-24"
    >
      {/* Fondo: el grabado de los carteles, oscurecido hacia la izquierda
          para que el texto se lea bien encima. */}
      <ResponsiveImage
        src="artabrian/fondo-grabado"
        alt=""
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div
        className="absolute inset-0 bg-linear-to-r from-aw-black via-aw-black/85 to-aw-black/40"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="type-meta text-aw-gold">Proyecto destacado</p>
            <h2 id="proyecto-titulo" className="type-display mt-3">
              {project.name}
            </h2>
            <p className="type-meta mt-4 text-aw-cream/70">{project.meta}</p>

            <p className="type-lead mt-8 max-w-xl">{project.summary}</p>
            <p className="type-body mt-4 max-w-xl text-aw-cream/80">
              {project.highlight}
            </p>

            {/* Bloques con contorno, como la información de los carteles. */}
            {/* Una columna en móvil: "Participaciones" no cabe en un tercio
                de 360 px. */}
            <dl className="mt-10 grid max-w-xl gap-3 sm:grid-cols-3">
              {project.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border-2 border-aw-gold/70 p-3 sm:p-4"
                >
                  <dt className="type-meta text-aw-cream/70">{stat.label}</dt>
                  <dd className="type-stat mt-2 text-aw-gold">{stat.value}</dd>
                </div>
              ))}
            </dl>

            {/* Pastillas macizas, como los horarios de los carteles. */}
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tecnologías">
              {project.stack.map((item) => (
                <li
                  key={item}
                  className="type-meta rounded-md bg-aw-gold px-2.5 py-1 text-aw-black"
                >
                  {item}
                </li>
              ))}
            </ul>

            <p className="type-meta mt-6 text-aw-cream/70">
              {project.roles.join(" • ")}
            </p>
          </div>

          <BrowserFrame
            url={project.url}
            src={project.screenshot.src}
            alt={project.screenshot.alt}
            sizes="(min-width: 1500px) 740px, (min-width: 1024px) 50vw, 100vw"
          />
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          {project.posters.map((poster) => (
            <li key={poster.src}>
              <ResponsiveImage
                src={poster.src}
                alt={`Cartel del Artabrian Weekend 2026 de ${poster.game}`}
                sizes="(min-width: 1500px) 340px, (min-width: 640px) 25vw, 50vw"
                className="h-auto w-full rounded-lg shadow-[0_18px_40px_rgba(0,0,0,0.5)] transition-transform duration-300 motion-safe:hover:-translate-y-1"
              />
            </li>
          ))}
        </ul>

        <Link
          href={project.caseStudyHref}
          className="type-action mt-12 inline-flex text-aw-gold underline-offset-4 transition hover:text-aw-cream hover:underline"
        >
          Ver el caso completo →
        </Link>
      </div>
    </section>
  );
}
