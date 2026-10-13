import type { ProjectStat } from "@/content/home";

export type CaseStudyFact = {
  label: string;
  value: string;
};

export type CodeSample = {
  /** Ruta del archivo en el repositorio del Artabrian Weekend. */
  file: string;
  code: string;
};

// Caso de estudio del Artabrian Weekend. Datos de las respuestas de Rodrigo
// al cuestionario y del repositorio de la web de 2026.
export const caseStudy = {
  name: "Artabrian Weekend",
  summary:
    "Un fin de semana de torneos de juegos de cartas coleccionables en el Pazo do Monte, en Ferrol. Desde 2024 diseño y desarrollo su web y dirijo la identidad gráfica de cada edición.",
  url: "https://artabrianweekends.com",
  urlLabel: "artabrianweekends.com",

  facts: [
    { label: "Papel", value: "Desarrollo front-end y dirección de arte" },
    { label: "Periodo", value: "2024 – actualidad" },
    {
      label: "Organiza",
      value: "Artabrian Nights, asociación sin ánimo de lucro",
    },
    { label: "Web", value: "React 19 • Vite • Material UI • JavaScript" },
  ] satisfies CaseStudyFact[],

  context: [
    "El Artabrian Weekend reúne cada marzo en Ferrol los Main Events de varios juegos de cartas coleccionables —Magic: The Gathering, Star Wars: Unlimited, One Piece y Riftbound, entre otros— en un mismo espacio y un mismo fin de semana, con un máximo de 64 jugadores por Main Event.",
    "La web tiene que resolver algo muy concreto: que cada jugador encuentre en segundos los torneos de su juego, con horarios, premios e inscripción, y que todo cambie con facilidad de una edición a otra.",
  ],

  role: [
    "Diseño y desarrollo de la web, de la primera versión a la actual.",
    "Rediseño de la identidad de Artabrian Nights y sistema gráfico de cada edición.",
    "Carteles de cada juego, publicaciones para redes sociales y comunicación por WhatsApp, que planifico y produzco yo.",
    "Otro miembro del equipo se encarga de la conexión con Vercel y de que la web esté en línea.",
  ],

  web: {
    intro: [
      "La primera versión, de 2025, la hice con Angular y Tailwind CSS. Para la edición de 2026 la reescribí en React 19 con Vite, Material UI, React Router y CSS Modules, en JavaScript.",
      "La clave de la reescritura es que la web está guiada por datos. Cada juego tiene su archivo JSON con sus torneos, y un único componente, Tournament, genera todas las páginas de torneos a partir de ellos. Lo que cambia entre juegos (color, fondo, ruta, cartel y formulario de inscripción) vive en un objeto de configuración.",
      "Resultado: añadir un torneo es añadir una entrada a un JSON, sin tocar componentes. Añadir un juego entero es un JSON, una entrada de configuración y una página de pocas líneas como esta:",
    ],
    samples: [
      {
        file: "src/pages/magicTheGathering/magicTheGathering.jsx",
        code: `import Tournament from "../../components/tournament/tournament";
import magicEvents from "../../data/json/magicJson/mtg.json";

export default function MagicTheGathering() {
  return (
    <Tournament
      events={magicEvents}
      tcgId="mtg"
      description="Elige tu formato favorito de Magic…"
    />
  );
}`,
      },
      {
        file: "src/data/json/magicJson/mtg.json (una entrada, resumida)",
        code: `{
  "id": "mtg-team-trios",
  "game": "mtg",
  "name": "TEAM TRIOS",
  "day": "viernes",
  "hour": "16:30",
  "details": [ … ],
  "rewards": [ … ]
}`,
      },
    ] satisfies CodeSample[],
    // El repositorio de 2026 es privado; el de la primera versión, público.
    previousRepo: {
      label: "Ver el código de la versión de 2025 (Angular)",
      href: "https://github.com/Lameton/artabrian-weekend-2025",
    },
    outro: [
      "Las páginas de cada juego se cargan en diferido (React.lazy), así que quien entra a ver Magic no descarga el código de One Piece. La web se despliega en Vercel desde la rama main mediante GitHub Actions; el trabajo diario va en develop.",
    ],
  },

  identity: [
    "La identidad parte del logotipo, una luna sobre una estrella de cuatro puntas, y de un sistema de carteles con una estructura común: titular en palo seco muy pesado, fechas separadas por puntos, información en bloques con contorno y un grabado de fondo con la figura encapuchada entre lunas.",
    "Cada juego tiene su propia tinta —oro para Magic, rojo para Star Wars— sobre el mismo negro, de modo que los carteles funcionan solos y también como serie.",
  ],

  results: {
    stats: [
      { value: "720+", label: "Participaciones en 2026" },
      { value: "+30 %", label: "Respecto a 2025 (557)" },
      { value: "1.000+", label: "Asistentes en 2026" },
      {
        value: "140 kg",
        label: "De comida para el Banco de Alimentos Rías Altas",
      },
    ] satisfies ProjectStat[],
    text: "Una participación es un jugador en un torneo: quien juega varios días cuenta varias veces. En 2026 vinieron jugadores de Galicia, de otras comunidades y de Portugal, Alemania y Francia.",
  },

  // PENDIENTE: respuesta de Rodrigo a la pregunta 2.26 del cuestionario.
  // Mientras esté vacío, la sección no se muestra.
  lessons: [] as string[],
};
