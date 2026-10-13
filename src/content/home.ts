export type Highlight = {
  label: string;
  value: string;
};

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
  location: "A Coruña",
  availability: "Disponible para trabajar",
  intro:
    "Desarrollador front-end en A Coruña. Creo interfaces con estructura clara, personalidad visual y atención al detalle de la experiencia.",
  statement: "Front-end con identidad clara.",
  email: "lameladev@gmail.com",
};

export const highlights: Highlight[] = [
  { label: "Frente", value: "React" },
  { label: "Diseño", value: "Marca" },
  { label: "Base", value: "A Coruña" },
];

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
