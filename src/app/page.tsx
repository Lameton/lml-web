import {
  colophon,
  cvFiles,
  education,
  experience,
  featuredProject,
  galleryItems,
  now,
  outsideWork,
  profile,
  services,
  socialLinks,
} from "@/content/home";
import { BackToTop } from "@/components/BackToTop";
import { BrandLogo } from "@/components/BrandLogo";
import { FeaturedProject } from "@/components/FeaturedProject";
import { GalleryZoom, type GalleryZoomImage } from "@/components/GalleryZoom";
import { HeaderPaletteObserver } from "@/components/HeaderPaletteObserver";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import ThemeToggle from "@/components/ThemeToggle";
import { getImage } from "@/lib/images";

// Solo las secciones principales: el resto se descubre al bajar.
const navLinks = [
  { href: "#proyecto", label: "Proyecto" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#contacto", label: "Contacto" },
];

// Palabras del nombre, para componer el titular en líneas.
const nameWords = profile.name.split(" ");

export default function Home() {
  const galleryZoomImages: GalleryZoomImage[] = galleryItems.map((item) => {
    const image = getImage(item.src);

    return {
      title: item.title,
      category: "Marca",
      tag: item.tag,
      year: item.year,
      alt: item.alt,
      image: {
        width: image.width,
        height: image.height,
        avif: image.avif,
        webp: image.webp,
      },
    };
  });

  return (
    <main
      id="site-main"
      className="theme-light noise-surface min-h-screen text-ink transition-colors duration-300 ease-out"
    >
      <div id="top" className="w-full px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <header
          id="site-header"
          className="site-header-surface sticky top-0 z-50 mx-auto mb-12 w-full max-w-375 border-b border-ink/10 backdrop-blur-md transition-colors duration-200"
        >
          <div className="flex items-center justify-between gap-4 py-3">
            <a
              href="#top"
              aria-label={`Inicio: ${profile.name}`}
              className="flex items-center gap-3 transition hover:text-accent"
            >
              <BrandLogo src="marcas/lml/lml-logo-2025" className="h-9 w-22" />
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
        <HeaderPaletteObserver />

        <section className="mx-auto grid max-w-375 grid-cols-1 gap-y-8 pb-20 pt-4 lg:grid-cols-[minmax(0,1fr)_minmax(24rem,36rem)] lg:gap-x-10 lg:gap-y-6 lg:pb-28 lg:pt-10">
          {/* El nombre sigue siendo el titular principal. Desde sm, la última
              palabra baja sola («Rodrigo Lamela» / «Sanfacundo»). */}
          <h1 className="type-poster text-ink lg:col-start-1 lg:row-start-1">
            {nameWords.map((word, index) => (
              <span
                key={word}
                className={
                  index === nameWords.length - 1 ? "block" : "block sm:inline"
                }
              >
                {word}
                {index < nameWords.length - 2 ? " " : ""}
              </span>
            ))}
          </h1>

          <div className="grid gap-10 lg:col-start-1 lg:row-start-2 lg:gap-8">
            <div>
              <p className="type-role text-accent">
                {profile.roles.join(" • ")}
              </p>

              <p className="type-lead mt-4 max-w-xl text-ink/85">
                {profile.statement}
              </p>

              {/* Sin botón al proyecto: es la sección que viene justo debajo.
                  `download` guarda el PDF en lugar de abrirlo en la pestaña. */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={cvFiles.frontend.href}
                  download
                  className="type-action inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-5 py-3 text-paper transition duration-200 hover:-translate-y-0.5 hover:bg-accent"
                >
                  Descargar CV ↓
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="type-action inline-flex min-h-11 items-center justify-center rounded-full border border-ink/25 px-5 py-3 text-ink transition hover:border-accent hover:text-accent"
                >
                  Contactar ↗
                </a>
              </div>

              <section aria-labelledby="ahora" className="mt-10 max-w-xl">
                <h2 id="ahora" className="type-meta text-ink/60">
                  Ahora · {now.updated}
                </h2>
                <ul className="type-body mt-3 space-y-1.5 text-ink/85">
                  {now.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-accent" aria-hidden="true">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
          <div className="hero-support-visual hidden overflow-hidden items-center justify-center lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:flex">
            <ResponsiveImage
              src="perfil/forma-cera"
              alt="Escultura cerámica multicolor con forma de criatura fantástica."
              sizes="(min-width: 1024px) 32rem, 0px"
              showBlurPlaceholder={false}
              className="block h-auto w-full object-contain lg:h-full"
            />
          </div>
        </section>

        <FeaturedProject project={featuredProject} />

        <section id="que-hago" className="scroll-mt-28 mx-auto max-w-375 py-10">
          <p className="type-meta text-ink/60">Qué hago</p>
          <h2 className="type-section mt-2 text-ink">
            Desarrollo y diseño con una sola intención: comunicar bien
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="rounded-[1.6rem] border border-ink/10 bg-(--paper-strong) p-5 transition duration-200 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_10px_20px_rgba(0,0,0,0.03)]"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 font-display text-lg font-semibold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="type-card-title text-ink">{service.title}</h3>
                <p className="type-body mt-3 text-ink/75">{service.text}</p>
                <ul
                  aria-label={`Programas y herramientas de ${service.title}`}
                  className="mt-5 flex flex-wrap gap-2"
                >
                  {service.tools.map((tool) => (
                    <li
                      key={tool}
                      className="type-meta rounded-md border border-accent/45 bg-accent/10 px-2.5 py-1.5 text-accent"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          id="experiencia"
          className="scroll-mt-28 mx-auto max-w-375 py-10"
        >
          <p className="type-meta text-ink/60">Experiencia</p>
          <h2 className="type-section mt-2 text-ink">
            Experiencia y formación
          </h2>

          {/* Dos columnas en escritorio: la experiencia a la izquierda y, a la
              derecha, la formación y los CV, que se quedan fijos al bajar. */}
          <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-16">
            {/* Lista ordenada: el orden (de más reciente a más antiguo)
              forma parte del contenido. */}
            <ol className="divide-y divide-ink/10 border-y border-ink/10">
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

            <div className="lg:sticky lg:top-28 lg:self-start">
              <h3 className="type-meta text-ink/60">Formación</h3>
              <ul className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
                {education.map((item) => (
                  <li key={item.title} className="py-5">
                    <p className="type-meta text-ink/60">{item.period}</p>
                    <p className="type-card-title mt-2 text-ink">
                      {item.title}
                    </p>
                    <p className="type-meta mt-2 text-ink/70">{item.school}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col items-start gap-3">
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
            </div>
          </div>
        </section>

        {galleryItems.length > 0 && (
          <section
            id="galeria"
            className="scroll-mt-28 mx-auto max-w-375 py-10"
          >
            <p className="type-meta text-ink/60">Galería</p>
            <h2 className="type-section mt-2 text-ink">Marcas en uso</h2>
            <p className="type-body mt-3 max-w-2xl text-ink/80">
              Una selección de identidades visuales y sus aplicaciones.
            </p>

            <ul className="gallery-grid mt-8">
              {galleryItems.map((item, index) => (
                <li key={item.src} className="gallery-item">
                  <figure>
                    <div className="gallery-frame">
                      <GalleryZoom images={galleryZoomImages} index={index}>
                        <ResponsiveImage
                          src={item.src}
                          alt={item.alt}
                          sizes="(min-width: 1024px) min(278px, calc(20vw - 28.8px)), (min-width: 768px) calc(50vw - 1.75rem), calc(50vw - 1.625rem)"
                          className="gallery-image"
                        />
                      </GalleryZoom>
                    </div>
                    <figcaption className="mt-3 min-w-0">
                      <p className="type-meta text-ink/70">{item.tag}</p>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section
          id="fuera-del-trabajo"
          className="scroll-mt-28 mx-auto max-w-375 py-10"
        >
          <p className="type-meta text-ink/60">Fuera del trabajo</p>
          <h2 className="type-section mt-2 text-ink">
            Mis aficiones me han dado mis mejores proyectos
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {outsideWork.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.6rem] border border-ink/10 bg-(--paper-strong) p-5 transition duration-200 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_10px_20px_rgba(0,0,0,0.03)]"
              >
                <h3 className="type-card-title text-ink">{item.title}</h3>
                <p className="type-body mt-3 text-ink/75">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="esta-web"
          className="mx-auto max-w-375 border-t border-ink/15 py-10"
        >
          <h2 id="esta-web" className="type-meta text-ink/60">
            Esta web
          </h2>
          <p className="type-body mt-3 max-w-3xl text-ink/85">
            {colophon.text}
          </p>
          <a
            href={colophon.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="type-action mt-4 inline-flex text-ink underline-offset-4 transition hover:text-accent hover:underline"
          >
            Ver el código en GitHub ↗
          </a>
        </section>

        <footer id="contacto" className="scroll-mt-28 mx-auto max-w-375 pt-12">
          <div className="rounded-4xl border border-ink/20 bg-(--paper-strong) p-8 text-center">
            <p className="type-meta text-ink/60">Contacto</p>
            <h2 className="type-section mt-3 text-ink">
              ¿Hablamos de una oportunidad laboral?
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
            <BrandLogo
              src="marcas/lml/lamela-logo-2025"
              alt="Logotipo Lamela"
              className="mx-auto mt-8 w-36"
            />
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

      <BackToTop />
    </main>
  );
}
