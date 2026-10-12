# Web profesional de Rodrigo Lamela — Briefing

12 de octubre de 2026 · Rodrigo Lamela

Una web en React que presenta a Rodrigo como desarrollador front-end con ojo de director de arte, con el Artabrian Weekend como caso de estudio principal. Se publica completa, en español y preparada para el inglés.

## Decisiones tomadas

| Tema | Decisión |
| --- | --- |
| Enfoque | Prioridad 1: desarrollador front-end (React). Prioridad 2: diseño de marcas. Prioridad 3: carteles |
| Estilo visual | Dirección D · Serigrafía, basada en sus carteles: tipografía muy pesada, moteado de serigrafía y paleta azul (crema, azul marino y azul acero); en revisión |
| Casos de estudio | Artabrian Weekend como caso completo (web primero, identidad después), una sección de Marcas y una galería de Carteles al final, enlazadas a Behance |
| Extras | Sección personal sobre juegos de cartas, eventos, esports y videojuegos |
| Foto | Sí, una foto profesional |
| Contacto | Correo, LinkedIn, GitHub y Behance, sin formulario |
| Analítica | Sin cookies (Vercel Analytics), sin banner de consentimiento |
| Dominio | Subdominio gratuito de Vercel; uno propio más adelante |
| Idiomas | Español, con la estructura preparada para añadir inglés |
| Ritmo | Se publica cuando esté completa |
| Reparto | Claude prepara la base y cada sección; Rodrigo revisa, entiende y ajusta el código |

## Mapa de la web

Dos páginas propias más la del caso de estudio. Un reclutador llega a tu mejor trabajo en un solo clic desde la portada.

1. **Inicio** (`/`), una sola página con desplazamiento:
   1. **Presentación:** nombre, una frase sobre lo que haces (diseño + desarrollo React), foto y botones a "Ver proyecto" y "Contacto".
   2. **Proyecto destacado:** tarjeta grande del Artabrian Weekend con una cifra (más de 1.000 asistentes) y enlace al caso de estudio.
   3. **Otros trabajos:** galería de 4 a 6 piezas con imagen, título y una línea, cada una enlazada a Behance.
   4. **Qué hago:** las dos facetas lado a lado, diseño y desarrollo, con sus herramientas.
   5. **Experiencia:** línea temporal breve con los puestos de los CV y botones para descargar los dos PDF.
   6. **Fuera del trabajo:** juegos de cartas, organización de eventos, esports y videojuegos.
   7. **Contacto:** correo, LinkedIn, GitHub y Behance.
2. **Caso de estudio: Artabrian Weekend** (`/proyectos/artabrian-weekend`):
   1. **Contexto:** qué es el evento y la asociación.
   2. **Mi papel:** dirección de arte, comunicación y web.
   3. **Identidad:** sistema gráfico, carteles de los 6 juegos y piezas para redes.
   4. **La web:** de Angular a React, la arquitectura basada en JSON y las decisiones técnicas.
   5. **Resultados:** más de 1.000 asistentes y +30% de participaciones en torneos.
   6. **Qué haría distinto:** SEO y renderizado, lo que aplicas en esta web.
3. **Página 404** con enlace al inicio.

El apartado "Qué haría distinto" es intencionado: los equipos técnicos valoran que un junior sepa ver los límites de su propio trabajo.

## Stack técnico y criterios de calidad

| Pieza | Elección |
| --- | --- |
| Framework | Next.js 16 con App Router y exportación estática (`output: 'export'`) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS |
| Contenido | Archivos de datos tipados, uno por sección e idioma |
| Imágenes | Originales en recursos/ (fuera de git); un script propio con sharp genera en public/images/ versiones AVIF y WebP en varios anchos, miniatura difuminada y dimensiones; el componente ResponsiveImage las sirve con picture y srcset. Carteles con texto fino a más calidad o WebP sin pérdida; logotipos e iconos en SVG optimizado |
| Analítica | Vercel Analytics, sin cookies |
| Pruebas | Vitest y Testing Library en los componentes con lógica |
| Despliegue | Repositorio público en GitHub + Vercel, con lint, comprobación de tipos y build automáticos en cada push |

**Criterios para darla por terminada**

- [ ] Cada página tiene su título, descripción e imagen para redes.
- [ ] Hay `sitemap.xml`, `robots.txt` y datos estructurados de persona.
- [ ] El contenido se lee sin JavaScript.
- [ ] Todo funciona con teclado y respeta `prefers-reduced-motion`.
- [ ] El contraste de color cumple el nivel AA.
- [ ] Lighthouse da 95 o más en rendimiento, accesibilidad, buenas prácticas y SEO.
- [ ] Se ve bien desde 360 px de ancho hasta escritorio.
- [ ] El README explica el proyecto, el stack y cómo arrancarlo.

## Material que necesito de ti

No hace falta todo para empezar: con la foto y las imágenes del Artabrian puedo avanzar con el diseño.

- [ ] **Foto profesional**, en buena resolución.
- [ ] **Imágenes del Artabrian Weekend:** carteles, identidad, piezas para redes y capturas de la web, desde Behance o desde los originales.
- [ ] **Entre 4 y 6 piezas para "Otros trabajos"**, con el enlace a Behance de cada una.
- [ ] **Tu logotipo o firma personal**, si quieres usarlo; si no, lo diseñamos.
- [ ] **Una o dos frases** sobre tu relación con los juegos de cartas y los esports, para la sección personal.
- [ ] **Los dos CV en PDF** con su versión final.

## Fases de trabajo

1. **Dirección visual:** Claude propone tres direcciones y Rodrigo elige y ajusta una.
2. **Proyecto base:** carpeta, repositorio en GitHub, Next.js, TypeScript, Tailwind, script de optimización de imágenes con el componente ResponsiveImage, y despliegue de prueba en Vercel.
3. **Sistema de diseño:** colores, tipografías y componentes básicos en código.
4. **Inicio:** cada sección por separado, con su contenido real.
5. **Caso de estudio del Artabrian Weekend.**
6. **Calidad:** SEO, accesibilidad, rendimiento y pruebas, hasta cumplir la lista de criterios.
7. **Publicación:** README final, repositorio fijado en GitHub y enlace en los CV y en LinkedIn.
8. **Después:** versión en inglés y dominio propio.
