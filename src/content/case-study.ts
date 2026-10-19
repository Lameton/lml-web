// Plantilla de los casos de estudio. Cada caso es un objeto CaseStudy en su
// propio archivo de src/content/ y una ruta en src/app/proyectos/ que lo pasa
// a <CaseStudyPage>. El aspecto de cada caso sale de su `theme`.

/**
 * Paleta propia del caso. Se aplica como variables CSS sobre la página, así
 * que todas las clases de la web (bg-paper, text-ink, text-accent…) toman
 * estos colores sin estilos nuevos.
 */
export type CaseStudyTheme = {
  /** Fondo. */
  paper: string;
  /** Texto. */
  ink: string;
  /** Acentos: etiquetas, cifras, enlaces y contorno de foco. */
  accent: string;
  /** Fondo oscuro: ajusta la textura de grano y los controles del navegador. */
  dark: boolean;
};

export type CaseStudyImage = {
  /** Clave de la imagen en public/images/manifest.json. */
  src: string;
  alt: string;
  title?: string;
  category?: string;
  tag?: string;
};

export type CaseStudyFact = {
  label: string;
  value: string;
};

export type CaseStudyStat = {
  value: string;
  label: string;
};

/** Piezas con las que se compone cada sección. */
export type CaseStudyBlock =
  | { type: "paragraphs"; items: string[] }
  | { type: "list"; items: string[] }
  | { type: "code"; file: string; code: string }
  | { type: "images"; items: CaseStudyImage[] }
  | { type: "stats"; items: CaseStudyStat[] }
  | { type: "link"; label: string; href: string };

export type CaseStudySection = {
  /** Identificador para el ancla y para el título accesible. */
  id: string;
  title: string;
  blocks: CaseStudyBlock[];
};

export type CaseStudyFooter = {
  eyebrow: string;
  description: string;
};

export type CaseStudy = {
  name: string;
  summary: string;
  url: string;
  urlLabel: string;
  footer: CaseStudyFooter;
  theme: CaseStudyTheme;
  /** Imagen de fondo de la cabecera (opcional). */
  heroBackground?: string;
  /** Captura de la web, en un marco de navegador (opcional). */
  screenshot?: CaseStudyImage;
  facts: CaseStudyFact[];
  sections: CaseStudySection[];
};
