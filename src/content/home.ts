export type Service = {
  title: string;
  text: string;
  /** Herramientas y tecnologías que uso para este servicio. */
  tools: string[];
};

export type SocialLink = {
  label: string;
  href: string;
};

export type GalleryItem = {
  title: string;
  category: "marcas" | "carteles";
  accent: "emerald" | "sea-glass";
  tag: string;
};

export type ProjectStat = {
  value: string;
  label: string;
};

export type ProjectPoster = {
  /** Clave de la imagen en public/images/manifest.json. */
  src: string;
  game: string;
};

export type FeaturedProject = {
  name: string;
  meta: string;
  summary: string;
  highlight: string;
  url: string;
  screenshot: { src: string; alt: string };
  roles: string[];
  stats: ProjectStat[];
  stack: string[];
  posters: ProjectPoster[];
  caseStudyHref: string;
};

export type ExperienceItem = {
  period: string;
  role: string;
  organization: string;
  place?: string;
  /** Para escanear de un vistazo qué parte del perfil se trabajó. */
  area: "Desarrollo" | "Diseño" | "Desarrollo y diseño";
  summary: string;
};

export type EducationItem = {
  period: string;
  title: string;
  school: string;
};

export type OutsideWorkItem = {
  title: string;
  description: string;
};

export const profile = {
  name: "Rodrigo Lamela Sanfacundo",
  roles: ["Desarrollador front-end", "Diseñador de marcas", "A Coruña"],
  statement: "Construyo interfaces en React con ojo de director de arte.",
  availability: "Disponible para trabajo presencial o híbrido en Galicia.",
  email: "lameladev@gmail.com",
};

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rodrigolamela/" },
  { label: "GitHub", href: "https://github.com/Lameton" },
  { label: "Behance", href: "https://www.behance.net/lameton/" },
];

// PDFs en public/cv/. Llevan el teléfono: en el HTML de la web no aparece
// para no exponerlo a los bots que recopilan números.
export const cvFiles = {
  frontend: {
    label: "CV de desarrollo front-end",
    href: "/cv/cv-rodrigo-lamela-frontend.pdf",
  },
  design: {
    label: "CV de diseño y dirección de arte",
    href: "/cv/cv-rodrigo-lamela-diseno.pdf",
  },
};

export const featuredProject: FeaturedProject = {
  name: "Artabrian Weekend",
  meta: "Ferrol • 2024 – actualidad",
  summary:
    "Fin de semana de torneos de juegos de cartas coleccionables en el Pazo do Monte, en Ferrol. Diseño y desarrollo la web y dirijo la identidad gráfica de cada edición.",
  highlight:
    "Reescribí la web de Angular a React con una arquitectura basada en JSON: añadir un torneo nuevo no requiere tocar el código.",
  url: "artabrianweekends.com",
  screenshot: {
    src: "artabrian/web-escritorio",
    alt: "Portada de la web del Artabrian Weekend 2026, con el selector de juegos",
  },
  roles: ["Desarrollo front-end", "Dirección de arte"],
  stats: [
    { value: "720+", label: "Participaciones en 2026" },
    { value: "1.000+", label: "Asistentes" },
    { value: "3", label: "Ediciones" },
  ],
  stack: ["React 19", "Vite", "Material UI", "Datos en JSON"],
  posters: [
    { src: "artabrian/carteles/cartel-2026-mtg", game: "Magic: The Gathering" },
    { src: "artabrian/carteles/cartel-2026-swu", game: "Star Wars: Unlimited" },
    { src: "artabrian/carteles/cartel-2026-onepiece", game: "One Piece" },
    { src: "artabrian/carteles/cartel-2026-riftbound", game: "Riftbound" },
  ],
  caseStudyHref: "/proyectos/artabrian-weekend",
};

export const services: Service[] = [
  {
    title: "Desarrollo front-end",
    text: "Interfaces en React, responsive y accesibles, con el contenido separado del código para que se pueda actualizar sin tocar componentes.",
    tools: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Angular",
      "Tailwind CSS",
      "Vite",
      "Git",
    ],
  },
  {
    title: "Diseño de marcas",
    text: "Identidades completas: logotipo, sistema gráfico y aplicaciones, de la papelería a las redes y la web. La mayoría de las marcas que he diseñado desde 2023 se registraron después en la OEPM y la EUIPO.",
    tools: ["Illustrator", "Photoshop", "InDesign", "Figma"],
  },
  {
    title: "Carteles",
    text: "Carteles para conciertos, torneos y eventos: tipografía pesada, información en bloques y paletas de dos o tres tintas. En 2026, la serie de los juegos del Artabrian Weekend.",
    tools: ["Photoshop", "Illustrator", "After Effects"],
  },
];

// Vacía hasta tener piezas reales: mientras lo esté, la galería no se muestra.
export const galleryItems: GalleryItem[] = [];

// De más reciente a más antiguo, con los datos de los CV.
export const experience: ExperienceItem[] = [
  {
    period: "2024 – actualidad",
    role: "Desarrollador front-end y director de arte",
    organization: "Artabrian Nights",
    place: "Ferrol",
    area: "Desarrollo y diseño",
    summary:
      "Diseño y desarrollo la web del Artabrian Weekend en React y dirijo la identidad gráfica, los carteles y la comunicación de cada edición.",
  },
  {
    period: "2023 – actualidad",
    role: "Diseñador de marcas",
    organization: "Encargos independientes",
    area: "Diseño",
    summary:
      "Marcas, logotipos, newsletters y cartelería. La mayoría de las marcas se registraron después en la OEPM y la EUIPO.",
  },
  {
    period: "2023 – 2024",
    role: "Desarrollador web en prácticas",
    organization: "Motivo 36",
    place: "A Coruña",
    area: "Desarrollo",
    summary:
      "Webs con WordPress y Elementor Pro y newsletters maquetadas en HTML, dentro de las prácticas del ciclo de DAW.",
  },
  {
    period: "2021 – 2022",
    role: "Director de arte",
    organization: "Kings Dragon",
    place: "Santiago de Compostela",
    area: "Desarrollo y diseño",
    summary:
      "Identidad del club y de sus jugadores, paquete gráfico para Twitch, redes, cartelería, merchandising y la web con WordPress.",
  },
  {
    period: "2020 – 2021",
    role: "Cofundador y director de arte",
    organization: "Galicia Esports",
    area: "Desarrollo y diseño",
    summary:
      "Identidad, gráficos para Twitch y redes sociales, y la web con WordPress.",
  },
  {
    period: "2019 – 2021",
    role: "Diseñador gráfico autónomo",
    organization: "Lameton Branding & Posters",
    area: "Diseño",
    summary:
      "Diseño en Figma de una aplicación forestal que estuvo tres años en uso y material para licitaciones forestales, varias de ellas adjudicadas.",
  },
  {
    period: "2017 – 2018",
    role: "Diseñador gráfico",
    organization: "AQA Deporte y Salud",
    area: "Diseño",
    summary:
      "Único diseñador del departamento de marketing: identidad, rotulación, campañas, newsletters y anuncios en Google Ads.",
  },
];

export const education: EducationItem[] = [
  {
    period: "2021 – 2023",
    title: "Técnico Superior en Desarrollo de Aplicaciones Web",
    school: "Chios Formación",
  },
  {
    period: "2011 – 2016",
    title: "Título Superior de Diseño, especialidad en Diseño Gráfico",
    school: "EASD Pablo Picasso, A Coruña",
  },
];

export const outsideWork: OutsideWorkItem[] = [
  {
    title: "Juegos de cartas y eventos",
    description:
      "Con Artabrian Nights organizo torneos de juegos de cartas coleccionables en Ferrol. El Artabrian Weekend es el más grande, pero no el único.",
  },
  {
    title: "Esports",
    description:
      "Cofundé Galicia Esports y fui director de arte de Kings Dragon: identidades, gráficos para directos en Twitch y webs para la escena gallega.",
  },
];
