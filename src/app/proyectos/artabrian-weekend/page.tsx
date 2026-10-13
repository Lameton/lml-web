import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Artabrian Weekend · Caso de estudio",
  description:
    "Caso de estudio de Artabrian Weekend: identidad visual, arquitectura de contenido y experiencia web.",
};

const pillars = [
  {
    title: "Contexto",
    text: "Artabrian Weekend necesitaba una presencia digital que transmitiera la energía del festival sin perder claridad, legibilidad ni estructura.",
  },
  {
    title: "Rol",
    text: "Trabajé en la redefinición de la identidad visual y en la arquitectura de la información para que cada contenido tuviera una lectura natural.",
  },
  {
    title: "Resultado",
    text: "La web pasó a comunicar con más fuerza, ordenar mejor la información y reforzar la cultura del evento de una forma más memorable.",
  },
];

const deliverables = [
  "Identidad visual orientada a la actuación del evento y al cartelismo.",
  "Sistema de contenido con jerarquía clara y navegación más directa.",
  "Experiencia visual construida para acompañar, no para saturar.",
];

export default function ArtabrianWeekendPage() {
  return (
    <main className="theme-light noise-surface min-h-screen text-ink">
      <div className="mx-auto max-w-5xl px-5 pb-20 pt-8 sm:px-6 lg:px-8">
        <header className="mb-10 flex items-center justify-between gap-4 border-b border-ink/15 pb-4">
          <Link
            href="/"
            className="type-meta text-ink/70 transition hover:text-accent"
          >
            ← Inicio
          </Link>
          <p className="type-meta text-ink/60">Caso de estudio</p>
        </header>

        <section className="mb-14">
          <p className="type-meta text-ink/60">Artabrian Weekend</p>
          <h1 className="type-display mt-3 max-w-3xl text-ink">
            Una experiencia visual que convierte la energía del festival en
            claridad.
          </h1>
          <p className="type-lead mt-6 max-w-2xl text-ink/80">
            Reimaginé la presencia digital de un evento con fuerte personalidad
            para lograr una web más legible, más intensa y más fácil de navegar.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          {pillars.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-ink/15 bg-[var(--paper-strong)] p-6"
            >
              <p className="type-meta text-ink/60">{item.title}</p>
              <p className="type-body mt-4 text-ink/80">{item.text}</p>
            </article>
          ))}
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-ink/15 bg-[var(--paper-strong)] p-6">
            <p className="type-meta text-ink/60">Identidad</p>
            <h2 className="type-section mt-3 text-ink">
              Un sistema visual que recogía la energía del evento y la traducía
              en estructura.
            </h2>
            <p className="type-body mt-5 text-ink/80">
              El proyecto partía de una intención muy clara: ofrecer una
              presencia digital con carácter, pero sin perder la legibilidad ni
              la claridad en la navegación. La identidad visual buscaba reflejar
              movimiento, fuerza y una sensación de celebración con un rigor
              compositivo. La idea era que la web pareciera una pieza de la
              cultura del festival, no una simple información estática.
            </p>
          </div>

          <div className="rounded-[2rem] border border-ink/15 bg-[var(--panel)] p-6">
            <p className="type-meta text-ink/60">Arquitectura</p>
            <ul className="type-body mt-4 space-y-3 text-ink/80">
              <li>• Estructura basada en contenido y jerarquía clara.</li>
              <li>• Información con ritmo, pausas y priorización visual.</li>
              <li>• Navegación orientada a la exploración del evento.</li>
            </ul>
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-ink/15 bg-[var(--paper-strong)] p-6">
          <p className="type-meta text-ink/60">Papel de Rodrigo</p>
          <div className="mt-4 grid gap-5 md:grid-cols-3">
            {deliverables.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-ink/15 bg-[var(--panel)] p-5"
              >
                <p className="type-body text-ink/80">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-ink/15 bg-[var(--paper-strong)] p-6">
          <p className="type-meta text-ink/60">Resultados</p>
          <h2 className="type-section mt-3 text-ink">
            Claridad, presencia y mejor recorrido de lectura.
          </h2>
          <p className="type-body mt-5 max-w-3xl text-ink/80">
            La mayor mejora no fue solo estética: fue que el visitante
            comprendía antes qué era el evento, cómo se movía por la información
            y qué esperaba encontrar. Eso convierte la web en un activo de marca
            y no solo en un soporte informativo.
          </p>
        </section>

        <section className="mt-16 rounded-[2rem] border border-ink/15 bg-[var(--panel)] p-6">
          <p className="type-meta text-ink/60">Qué haría distinto</p>
          <h2 className="type-section mt-3 text-ink">
            La mejor comunicación no es la más ruidosa, sino la más clara.
          </h2>
          <p className="type-body mt-5 max-w-3xl text-ink/80">
            Una web de evento necesita activar la emoción sin empapar la
            experiencia. El gran trabajo aquí fue traducir la energía del
            festival a una arquitectura de contenido que dejara respirar cada
            bloque y guiara con naturalidad a la persona que visitaba la página.
            Si tuviera que iterar, reforzaría todavía más la narración del
            programa y la relación entre la identidad visual y la experiencia de
            compra o reserva.
          </p>
        </section>
      </div>
    </main>
  );
}
