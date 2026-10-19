import type { CaseStudy } from "@/content/case-study";
import { featuredProject } from "@/content/home";

// Caso de estudio del Artabrian Weekend. Datos de las respuestas de Rodrigo
// al cuestionario y del repositorio de la web de 2026.
export const artabrianCaseStudy: CaseStudy = {
  name: "Artabrian Weekend",
  summary:
    "Un fin de semana de torneos de juegos de cartas coleccionables en el Pazo do Monte, en Ferrol. Desde 2024 diseño y desarrollo su web y dirijo la identidad gráfica de cada edición.",
  url: "https://artabrianweekends.com",
  urlLabel: "artabrianweekends.com",
  footer: {
    eyebrow: "Diseño y desarrollo · Artabrian Weekend",
    description:
      "Una web que reúne torneos de varios juegos y facilita preparar cada nueva edición con una estructura basada en datos.",
  },

  // La identidad del evento: negro, crema y oro (definidos en globals.css).
  theme: {
    paper: "var(--color-aw-black)",
    ink: "var(--color-aw-cream)",
    accent: "var(--color-aw-gold)",
    dark: true,
  },
  heroBackground: "artabrian/fondo-grabado",
  screenshot: featuredProject.screenshot,

  facts: [
    { label: "Papel", value: "Desarrollo front-end y dirección de arte" },
    { label: "Periodo", value: "2024 – actualidad" },
    {
      label: "Organiza",
      value: "Artabrian Nights, asociación sin ánimo de lucro",
    },
    { label: "Web", value: "React 19 • Vite • Material UI • JavaScript" },
  ],

  sections: [
    {
      id: "contexto",
      title: "Contexto",
      blocks: [
        {
          type: "paragraphs",
          items: [
            "El Artabrian Weekend reúne cada marzo en Ferrol los Main Events de varios juegos de cartas coleccionables —Magic: The Gathering, Star Wars: Unlimited, One Piece y Riftbound, entre otros— en un mismo espacio y un mismo fin de semana, con un máximo de 64 jugadores por evento principal.",
            "El reto no era solo comunicar una cita del calendario, sino guiar a cada participante hasta la información que necesitaba en segundos: el juego correcto, el torneo adecuado, el horario, los premios y el paso para inscribirse. Además, la web tenía que adaptarse con facilidad a cada edición, sin fricción para el equipo organizador.",
          ],
        },
      ],
    },
    {
      id: "papel",
      title: "Mi papel",
      blocks: [
        {
          type: "list",
          items: [
            "Diseño y desarrollo de la web desde la primera versión hasta la actual, con foco en la claridad de la información y la velocidad de uso.",
            "Rediseño de la identidad de Artabrian Nights y construcción de un sistema gráfico reusable para cada edición.",
            "Diseño de carteles por juego, creación de contenido para redes y gestión de la comunicación por WhatsApp, con la coordinación del resto del equipo.",
            "Otro miembro del equipo se encarga del despliegue en Vercel y del mantenimiento técnico de la web en producción.",
          ],
        },
      ],
    },
    {
      id: "web",
      title: "La web: de Angular a React",
      blocks: [
        {
          type: "paragraphs",
          items: [
            "La primera versión, de 2025, la desarrollé con Angular y Tailwind CSS. Para la edición de 2026 la reescribí en React 19 con Vite, Material UI, React Router y CSS Modules, en JavaScript, para ganar más flexibilidad y un mejor control visual.",
            "La clave de la reescritura fue transformar la web en un sistema basado en datos. Cada juego tiene su propio archivo JSON con los torneos, y un único componente, Tournament, genera todas las páginas a partir de esos datos. Lo que cambia entre juegos —color, fondo, ruta, cartel y formulario de inscripción— vive en una configuración centralizada.",
            "El resultado es muy claro: añadir un torneo consiste en sumar una entrada a un JSON; añadir un juego entero implica un JSON, una configuración y una página mínima como esta:",
          ],
        },
        {
          type: "code",
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
          type: "code",
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
        // El repositorio de 2026 es privado; el de la primera versión, público.
        {
          type: "link",
          label: "Ver el código de la versión de 2025 (Angular)",
          href: "https://github.com/Lameton/artabrian-weekend-2025",
        },
        {
          type: "paragraphs",
          items: [
            "Las páginas de cada juego se cargan en diferido (React.lazy), así que quien entra a Magic no descarga el código de One Piece. La web se despliega en Vercel desde la rama main mediante GitHub Actions, mientras el trabajo diario sigue desarrollándose en develop.",
          ],
        },
      ],
    },
    {
      id: "identidad",
      title: "La identidad",
      blocks: [
        {
          type: "paragraphs",
          items: [
            "La identidad parte del logotipo, una luna sobre una estrella de cuatro puntas, y de un sistema visual común para los carteles: titular en palo seco muy pesado, fechas separadas por puntos, información en bloques con contorno y un grabado de fondo con la figura encapuchada entre lunas.",
            "Cada juego tiene su propia tinta —oro para Magic, rojo para Star Wars— sobre el mismo negro, de modo que cada cartel funciona por sí solo y también como parte de una serie coherente.",
          ],
        },
        {
          type: "images",
          items: featuredProject.posters.map((poster) => ({
            src: poster.src,
            alt: `Cartel del Artabrian Weekend 2026 de ${poster.game}`,
            title: poster.game,
            category: "Cartel",
            tag: "Artabrian Weekend 2026",
          })),
        },
      ],
    },
    {
      id: "resultados",
      title: "Resultados",
      blocks: [
        {
          type: "stats",
          items: [
            { value: "720+", label: "Participaciones en 2026" },
            { value: "+30 %", label: "Respecto a 2025 (557)" },
            { value: "1.000+", label: "Asistentes en 2026" },
            {
              value: "140 kg",
              label: "De comida para el Banco de Alimentos Rías Altas",
            },
          ],
        },
        {
          type: "paragraphs",
          items: [
            "Una participación equivale a un jugador en un torneo: quien juega varios días cuenta varias veces. En 2026 llegaron jugadores de Galicia, de otras comunidades y también de Portugal, Alemania y Francia.",
          ],
        },
      ],
    },
    {
      id: "que-haria-distinto",
      title: "Qué haría distinto",
      blocks: [
        {
          type: "paragraphs",
          items: [
            "En una próxima edición, haría más directo el recorrido hasta la inscripción: ayudaría a comparar torneos y horarios y dejaría más claro el siguiente paso. También llevaría más información variable del evento a la configuración, para actualizarla sin tocar los componentes.",
          ],
        },
      ],
    },
  ],
};
