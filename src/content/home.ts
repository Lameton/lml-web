export type Service = {
  title: string;
  text: string;
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
  kind: string;
  title: string;
  description: string;
};

export type OutsideWorkItem = {
  title: string;
  description: string;
};

export const profile = {
  name: "Rodrigo Lamela",
  roles: ["Desarrollador front-end", "Diseñador de marcas", "A Coruña"],
  statement: "Construyo interfaces en React con ojo de director de arte.",
  availability: "Disponible para trabajo presencial o híbrido en Galicia.",
  email: "lameladev@gmail.com",
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
    text: "Interfaces limpias, accesibles y pensadas para comunicar con claridad y convertir visitas en acciones.",
  },
  {
    title: "Diseño de marca",
    text: "Identidades visuales con coherencia, personalidad y sistemas que escalan a lo largo del tiempo.",
  },
  {
    title: "Cartelismo y cultura",
    text: "Comunicaciones con fuerza visual, ritmo tipográfico y una mirada de serigrafía y evento.",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    title: "NEXA Studio",
    category: "marcas",
    accent: "emerald",
    tag: "Identidad",
  },
  {
    title: "Artabrian Weekend",
    category: "carteles",
    accent: "emerald",
    tag: "Cartel",
  },
  {
    title: "Marea Brillante",
    category: "marcas",
    accent: "sea-glass",
    tag: "Marca",
  },
  {
    title: "Festival Nocturno",
    category: "carteles",
    accent: "sea-glass",
    tag: "Cartel",
  },
];

export const experience: ExperienceItem[] = [
  {
    kind: "Diseño gráfico",
    title: "Identidad visual y comunicación",
    description:
      "Trabajo la imagen de marcas, carteles y piezas de contenido con una lógica clara y un enfoque editorial.",
  },
  {
    kind: "Front-end",
    title: "Interfaces útiles, envolventes y escalables",
    description:
      "Construyo experiencias rápidas, ligeras y consistentes con React, buenas prácticas y atención al detalle visual.",
  },
];

export const outsideWork: OutsideWorkItem[] = [
  {
    title: "Juegos de cartas",
    description:
      "Miro el diseño y la mecánica con la misma atención: equilibrio visual, reglas claras y una buena experiencia de lectura.",
  },
  {
    title: "Eventos y cultura",
    description:
      "Me interesa la energía de los espacios vivos, la comunicación que acompaña a la gente y la identidad que se vive en una cita.",
  },
  {
    title: "Esports y comunidad",
    description:
      "Desde la estructura de la información hasta la identidad visual, busco piezas que funcionen con rapidez y tengan carácter.",
  },
];
