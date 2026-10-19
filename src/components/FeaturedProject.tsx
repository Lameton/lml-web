import Link from "next/link";
import { BrowserFrame } from "@/components/BrowserFrame";
import { FeaturedEditionGallery } from "@/components/FeaturedEditionGallery";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { getImage } from "@/lib/images";
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
      // página para que el fondo llegue de borde a borde. Las variables
      // --color-* aplican la paleta del Artabrian a todo lo que hay dentro
      // (incluido el contorno de foco, que sale del acento), igual que en
      // la plantilla de los casos de estudio.
      className="relative -mx-4 overflow-hidden bg-aw-black py-16 text-aw-cream [--color-accent:var(--color-aw-gold)] [--color-ink:var(--color-aw-cream)] [--color-paper:var(--color-aw-black)] sm:-mx-6 lg:-mx-8 lg:py-24"
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

      <div className="relative mx-auto max-w-375 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <Link
              href={project.caseStudyHref}
              aria-label={`Abrir el caso de estudio de ${project.name}`}
              className="type-action mb-8 inline-flex min-h-11 items-center justify-center rounded-full border border-aw-gold bg-aw-gold px-5 py-3 text-aw-black transition hover:border-aw-cream hover:bg-aw-cream"
            >
              Abrir caso de estudio ↗
            </Link>
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

        <div className="mt-14">
          <p className="type-meta text-aw-gold">La evolución del evento</p>
          <FeaturedEditionGallery
            projectName={project.name}
            posters={project.editionPosters.map((poster) => ({
              ...poster,
              image: getImage(poster.src),
            }))}
          />
        </div>

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
