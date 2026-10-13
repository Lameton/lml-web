"use client";

import { useEffect, useState } from "react";
import {
  cvFiles,
  education,
  experience,
  featuredProject,
  galleryItems,
  outsideWork,
  profile,
  services,
  socialLinks,
} from "@/content/home";
import { FeaturedProject } from "@/components/FeaturedProject";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import ThemeToggle from "@/components/ThemeToggle";

// Solo las secciones principales: el resto se descubre al bajar.
const navLinks = [
  { href: "#proyecto", label: "Proyecto" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#contacto", label: "Contacto" },
];

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
          <div className="flex items-center justify-between gap-4 py-3">
            <a
              href="#top"
              className="flex items-center gap-3 transition hover:text-accent"
              aria-label="Volver al inicio"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/20 bg-[var(--paper-strong)] text-[0.62rem] font-bold tracking-[0.14em] text-ink">
                RL
              </span>
              <span className="type-meta text-ink/70">{profile.name}</span>
            </a>

            <div className="flex items-center gap-6">
              {/* En móvil no hay menú: la página es una sola columna y se
                  recorre bajando. */}
              <nav
                aria-label="Navegación principal"
                className="type-nav hidden items-center gap-6 text-ink/80 sm:flex"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="nav-link py-1.5 transition hover:text-accent"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </header>

        <section className="mx-auto grid max-w-[1500px] gap-8 pb-20 pt-4 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16 lg:pb-28 lg:pt-12">
          <div>
            <h1 className="type-display text-ink">
              {/* Nombre y apellido en dos líneas, como en un cartel. */}
              {profile.name.split(" ").map((word) => (
                <span key={word} className="block">
                  {word}
                </span>
              ))}
            </h1>

            <p className="type-role mt-6 text-accent">
              {profile.roles.join(" • ")}
            </p>

            <p className="type-lead mt-6 max-w-xl text-ink/85">
              {profile.statement}
            </p>

            {/* Sin botón al proyecto: es la sección que viene justo debajo.
                `download` guarda el PDF en lugar de abrirlo en la pestaña. */}
            <a
              href={cvFiles.frontend.href}
              download
              className="type-action mt-8 inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-paper transition duration-200 hover:-translate-y-0.5 hover:bg-accent"
            >
              Descargar CV ↓
            </a>

            <p className="type-detail mt-6 text-ink/70">
              {profile.availability}
            </p>
          </div>

          {/* En móvil la foto va primero y pequeña; en escritorio, a la
              derecha y grande. */}
          <div className="order-first w-24 overflow-hidden rounded-2xl border border-ink/15 sm:w-32 lg:order-last lg:w-72">
            <ResponsiveImage
              src="perfil/rodrigo-lamela-foto"
              alt="Retrato de Rodrigo Lamela"
              sizes="(min-width: 1024px) 18rem, (min-width: 640px) 8rem, 6rem"
              priority
              className="block h-auto w-full"
            />
          </div>
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
                <p className="type-meta mt-4 text-ink/60">
                  {service.tools.join(" • ")}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="experiencia"
          className="scroll-mt-28 mx-auto max-w-[1500px] py-10"
        >
          <p className="type-meta text-ink/60">Experiencia</p>
          <h2 className="type-section mt-2 text-ink">
            Experiencia y formación
          </h2>

          {/* Lista ordenada: el orden (de más reciente a más antiguo)
              forma parte del contenido. */}
          <ol className="mt-10 max-w-4xl divide-y divide-ink/10 border-y border-ink/10">
            {experience.map((item) => (
              <li
                key={`${item.organization}-${item.period}`}
                className="grid gap-2 py-6 sm:grid-cols-[10rem_1fr] sm:gap-8"
              >
                <p className="type-meta text-ink/60">{item.period}</p>
                <div>
                  <h3 className="type-card-title text-ink">{item.role}</h3>
                  <p className="type-meta mt-2 text-ink/70">
                    {[item.organization, item.place]
                      .filter(Boolean)
                      .join(" • ")}
                  </p>
                  <p className="type-body mt-3 max-w-2xl text-ink/80">
                    {item.summary}
                  </p>
                  <p className="type-meta mt-3 inline-flex rounded-full border border-accent/40 px-2.5 py-0.5 text-accent">
                    {item.area}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <h3 className="type-meta mt-12 text-ink/60">Formación</h3>
          <ul className="mt-4 max-w-4xl divide-y divide-ink/10 border-y border-ink/10">
            {education.map((item) => (
              <li
                key={item.title}
                className="grid gap-2 py-5 sm:grid-cols-[10rem_1fr] sm:gap-8"
              >
                <p className="type-meta text-ink/60">{item.period}</p>
                <div>
                  <p className="type-card-title text-ink">{item.title}</p>
                  <p className="type-meta mt-2 text-ink/70">{item.school}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            {[cvFiles.frontend, cvFiles.design].map((cv) => (
              <a
                key={cv.href}
                href={cv.href}
                download
                className="type-action inline-flex items-center justify-center rounded-full border border-ink/25 px-5 py-3 text-ink transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                Descargar {cv.label} ↓
              </a>
            ))}
          </div>
        </section>

        {/* Oculta mientras no haya piezas reales (ver galleryItems). */}
        {galleryItems.length > 0 && (
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
        )}

        <section
          id="fuera-del-trabajo"
          className="scroll-mt-28 mx-auto max-w-[1500px] py-10"
        >
          <p className="type-meta text-ink/60">Fuera del trabajo</p>
          <h2 className="type-section mt-2 text-ink">
            Mis aficiones me han dado mis mejores proyectos.
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
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
            <ul className="type-action mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-ink/80">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-accent"
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
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
