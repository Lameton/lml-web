"use client";

import { useEffect, useState } from "react";
import {
  experience,
  featuredProject,
  galleryItems,
  highlights,
  outsideWork,
  profile,
  services,
} from "@/content/home";
import { FeaturedProject } from "@/components/FeaturedProject";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      id="site-main"
      className="theme-light noise-surface min-h-screen text-ink transition-colors duration-300 ease-out"
    >
      <div id="top" className="w-full px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <header className="sticky top-0 z-50 mx-auto mb-12 w-full max-w-[1500px] border-b border-ink/10 bg-paper/80 backdrop-blur-sm">
          <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
            <a
              href="#top"
              className="flex items-center gap-3 transition hover:text-accent"
              aria-label="Volver al inicio"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/20 bg-[var(--paper-strong)] text-[0.62rem] font-bold tracking-[0.14em] text-ink">
                RL
              </div>
              <div>
                <p className="type-meta text-ink/70">Rodrigo Lamela</p>
              </div>
            </a>

            <div className="ml-auto flex items-center gap-3">
              <div className="flex items-center rounded-full border border-ink/10 bg-[var(--paper-strong)]/90 px-2 py-1.5 shadow-[0_6px_16px_rgba(0,0,0,0.03)]">
                <ThemeToggle />
              </div>

              <nav
                aria-label="Navegación principal"
                className="type-nav hidden items-center gap-2 rounded-full border border-ink/10 bg-[var(--paper-strong)]/90 px-2 py-2 text-ink/80 md:flex"
              >
                <a
                  href="#proyecto"
                  className="nav-link rounded-full px-3 py-1.5 transition hover:bg-ink/5 hover:text-accent"
                >
                  Proyecto
                </a>
                <a
                  href="#que-hago"
                  className="nav-link rounded-full px-3 py-1.5 transition hover:bg-ink/5 hover:text-accent"
                >
                  Qué hago
                </a>
                <a
                  href="#experiencia"
                  className="nav-link rounded-full px-3 py-1.5 transition hover:bg-ink/5 hover:text-accent"
                >
                  Experiencia
                </a>
                <a
                  href="#fuera-del-trabajo"
                  className="nav-link rounded-full px-3 py-1.5 transition hover:bg-ink/5 hover:text-accent"
                >
                  Fuera del trabajo
                </a>
                <a
                  href="#contacto"
                  className="nav-link rounded-full px-3 py-1.5 transition hover:bg-ink/5 hover:text-accent"
                >
                  Contacto
                </a>
              </nav>
            </div>
          </div>
        </header>

        <section className="mx-auto grid max-w-[1500px] items-center gap-10 pb-16 pt-8 lg:grid-cols-[1.18fr_0.82fr] lg:items-center lg:pb-20">
          <div>
            <p className="type-meta mb-5 inline-flex rounded-full border border-ink/20 bg-ink/5 px-3 py-1 text-ink/75">
              {profile.location} · {profile.availability}
            </p>

            <h1 className="type-display max-w-[7.2ch] text-ink sm:max-w-[9ch] lg:max-w-[10ch]">
              <span className="block">Front-end con</span>
              <span className="block text-accent">identidad clara.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/80 sm:text-lg lg:text-[1.125rem]">
              {profile.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#proyecto"
                className="type-action inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-paper transition duration-200 hover:-translate-y-0.5 hover:bg-accent"
              >
                Ver proyecto
              </a>
              <a
                href="#contacto"
                className="type-action inline-flex items-center justify-center rounded-full border border-ink/25 bg-transparent px-5 py-3 text-ink transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                Contactar
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-2 text-ink/70">
              {["React", "Branding", "UI systems", "Cartelismo"].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-ink/15 bg-[var(--paper-strong)] px-3 py-1.5 type-meta text-ink/75"
                >
                  {item}
                </span>
              ))}
            </div>

            <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4 sm:gap-5">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-ink/15 bg-ink/[0.02] p-4"
                >
                  <dt className="type-meta text-ink/60">{item.label}</dt>
                  <dd className="type-stat mt-2 text-ink">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="relative">
            <div className="profile-frame rounded-[2rem] border border-ink/10 bg-[var(--paper-strong)]/70 p-4 shadow-[0_18px_36px_rgba(0,0,0,0.04)]">
              <div className="profile-gradient-surface relative overflow-hidden rounded-[1.5rem] border border-ink/10 p-5 text-ink">
                <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full border border-white/10 bg-white/5 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-10 left-8 h-24 w-24 rounded-full border border-white/10 bg-white/5 blur-2xl" />

                <div className="type-meta relative flex items-center justify-between text-ink/80">
                  <span>Perfil</span>
                  <span className="rounded-full border border-ink/15 bg-white/10 px-2 py-1 text-[0.62rem] uppercase tracking-[0.15em] text-ink/75">
                    Disponible
                  </span>
                </div>

                <div className="relative mt-7 rounded-[1.5rem] border border-ink/10 bg-[var(--inset-panel)] p-4 backdrop-blur-sm">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="h-20 w-20 overflow-hidden rounded-full border border-ink/30 bg-ink/10 shadow-[0_12px_28px_rgba(0,0,0,0.12)]">
                      <ResponsiveImage
                        src="perfil/rodrigo-lamela-foto"
                        alt="Retrato de Rodrigo Lamela"
                        sizes="(min-width: 1024px) 12rem, 8rem"
                        priority
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="type-meta rounded-full border border-ink/15 bg-white/10 px-2 py-1 text-ink/70">
                      A Coruña
                    </span>
                  </div>

                  <div className="border-t border-ink/15 pt-4">
                    <p className="type-meta text-ink/70">Especialidad</p>
                    <p className="type-card-title mt-2 text-ink">
                      Front-end + branding
                    </p>
                  </div>

                  <div className="type-detail mt-4 space-y-3 border-t border-ink/15 pt-4 text-ink/85">
                    <p>Diseño de interfaces con estructura clara.</p>
                    <p>Identidad visual con personalidad y consistencia.</p>
                    <p>Comunicación gráfica para cultura, eventos y marcas.</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <FeaturedProject project={featuredProject} />

        <section
          id="que-hago"
          className="scroll-mt-28 mx-auto max-w-[1500px] py-10"
        >
          <p className="type-meta text-ink/60">Qué hago</p>
          <h2 className="type-section mt-2 text-ink">
            Desarrollo y diseño con una sola intención: comunicar bien.
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="rounded-[1.6rem] border border-ink/10 bg-[var(--paper-strong)] p-5 transition duration-200 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_10px_20px_rgba(0,0,0,0.03)]"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 font-display text-lg font-semibold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="type-card-title text-ink">{service.title}</h3>
                <p className="type-body mt-3 text-ink/75">{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="experiencia"
          className="scroll-mt-28 mx-auto max-w-[1500px] py-10"
        >
          <p className="type-meta text-ink/60">Experiencia</p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {experience.map((item) => (
              <div
                key={item.title}
                className={`rounded-[1.4rem] border border-ink/10 p-5 ${
                  item.kind === "Front-end" ? "bg-accent/8" : "bg-ink/[0.02]"
                }`}
              >
                <p className="type-meta text-ink/60">{item.kind}</p>
                <h3 className="type-card-title mt-3 text-ink">{item.title}</h3>
                <p className="type-body mt-4 text-ink/75">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="galeria"
          className="scroll-mt-28 mx-auto max-w-[1500px] py-10"
        >
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="type-meta text-ink/60">Galería</p>
              <h2 className="type-section mt-2 text-ink">
                Marca y cartelismo en una misma mirada.
              </h2>
            </div>

            <div
              className="flex flex-wrap gap-2"
              aria-label="Filtro de galería"
            >
              <input
                type="radio"
                name="gallery-filter"
                id="gallery-all"
                defaultChecked
                className="gallery-filter-input"
              />
              <label
                htmlFor="gallery-all"
                className="type-meta gallery-filter-label"
              >
                Todo
              </label>

              <input
                type="radio"
                name="gallery-filter"
                id="gallery-marcas"
                className="gallery-filter-input"
              />
              <label
                htmlFor="gallery-marcas"
                className="type-meta gallery-filter-label"
              >
                Marcas
              </label>

              <input
                type="radio"
                name="gallery-filter"
                id="gallery-carteles"
                className="gallery-filter-input"
              />
              <label
                htmlFor="gallery-carteles"
                className="type-meta gallery-filter-label"
              >
                Carteles
              </label>
            </div>
          </div>

          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <article
                key={item.title}
                className="gallery-item"
                data-category={item.category}
              >
                <div
                  className={`gallery-gradient gallery-gradient--${item.accent} h-72 rounded-[1.5rem] p-4`}
                >
                  <div className="flex h-full flex-col justify-between rounded-[1rem] border border-ink/20 bg-[var(--card-overlay)] p-4 text-ink backdrop-blur-[2px]">
                    <span className="type-meta text-ink/80">{item.tag}</span>
                    <div>
                      <p className="type-card-title">{item.title}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="fuera-del-trabajo"
          className="scroll-mt-28 mx-auto max-w-[1500px] py-10"
        >
          <p className="type-meta text-ink/60">Fuera del trabajo</p>
          <h2 className="type-section mt-2 text-ink">
            Juegos, eventos y comunidad con la misma mirada.
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {outsideWork.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.6rem] border border-ink/10 bg-[var(--paper-strong)] p-5 transition duration-200 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_10px_20px_rgba(0,0,0,0.03)]"
              >
                <h3 className="type-card-title text-ink">{item.title}</h3>
                <p className="type-body mt-3 text-ink/75">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <footer
          id="contacto"
          className="scroll-mt-28 mx-auto max-w-[1500px] pt-12"
        >
          <div className="rounded-[2rem] border border-ink/20 bg-[var(--paper-strong)] p-8 text-center">
            <p className="type-meta text-ink/60">Contacto</p>
            <h2 className="type-section mt-3 text-ink">
              Hablemos de tu próximo proyecto.
            </h2>
            <a
              href={`mailto:${profile.email}`}
              className="type-action mt-6 inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-paper transition hover:bg-accent"
            >
              {profile.email}
            </a>
            <div className="mt-6">
              <a
                href="#top"
                className="type-action inline-flex items-center justify-center rounded-full border border-ink/25 px-4 py-2 text-ink transition hover:border-accent hover:text-accent"
                aria-label="Volver arriba"
              >
                Volver arriba ↑
              </a>
            </div>
          </div>
        </footer>
      </div>

      <a
        href="#top"
        aria-label="Volver arriba"
        className={`back-to-top fixed bottom-6 right-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink/20 bg-paper text-lg text-ink shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-200 ${
          showBackToTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        ↑
      </a>
    </main>
  );
}
