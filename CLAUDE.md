# Web profesional de Rodrigo Lamela

Web personal para buscar trabajo. Presenta a Rodrigo, en este orden de prioridad, como:

1. **Desarrollador front-end** (React). Es el perfil principal.
2. **Diseñador de marcas** (identidad visual).
3. **Cartelista** (carteles de conciertos y eventos). Aparece al final.

Rodrigo vive en A Coruña (Galicia) y busca trabajo presencial o híbrido allí. Es Técnico Superior en Desarrollo de Aplicaciones Web (DAW) y tiene el Título Superior de Diseño Gráfico.

## Cómo trabajamos

- Claude prepara la base y cada sección; Rodrigo revisa, entiende y ajusta el código. **Rodrigo tiene que poder explicar cada línea en una entrevista**, así que:
  - Explica brevemente cada decisión no obvia al proponer un cambio.
  - Prefiere código claro a código ingenioso. Nada de abstracciones que no hagan falta.
  - Cambios pequeños y revisables, un tema por commit.
- Rodrigo tiene la última palabra en todo lo visual. No cambies colores, tipografías ni composición sin preguntar.
- Idioma: la interfaz y el contenido en español; el código (nombres de variables, componentes, funciones) en inglés; los comentarios y los mensajes de commit en español.

## Stack

| Pieza      | Elección                                                                                                               |
| ---------- | ---------------------------------------------------------------------------------------------------------------------- |
| Framework  | Next.js 16, App Router, exportación estática (`output: 'export'` en `next.config.ts`)                                  |
| Lenguaje   | TypeScript en modo estricto                                                                                            |
| Estilos    | Tailwind CSS. Los colores y tipografías de la marca se definen como variables de tema, nunca a mano en cada componente |
| Contenido  | Archivos de datos tipados en `src/content/`, preparados para español e inglés                                          |
| Imágenes   | Script propio con `sharp` (ver más abajo) y componente `ResponsiveImage`                                               |
| Analítica  | Vercel Analytics, sin cookies                                                                                          |
| Pruebas    | Vitest + Testing Library en los componentes con lógica                                                                 |
| Despliegue | Repositorio público en GitHub + Vercel                                                                                 |

Con la exportación estática **no** se pueden usar: Server Actions, rutas dinámicas sin `generateStaticParams`, cookies, rewrites ni el optimizador de imágenes por defecto de `next/image`.

## Estructura de carpetas

```
lml-web/
├── recursos/                 # Originales a máxima calidad. FUERA DE GIT (.gitignore)
├── public/images/            # Imágenes optimizadas generadas por el script. No editar a mano
├── scripts/
│   └── optimize-images.ts    # recursos/ → public/images/
├── src/
│   ├── app/                  # Rutas: / , /proyectos/artabrian-weekend , not-found
│   ├── components/           # Componentes reutilizables (un componente por archivo)
│   ├── content/              # Textos y datos tipados (es/, más adelante en/)
│   └── lib/                  # Utilidades
├── CLAUDE.md
└── README.md
```

## Imágenes

- Los originales van en `recursos/`, que no se sube a GitHub, con una subcarpeta por categoría: `perfil/`, `artabrian/` (con `artabrian/carteles/`), `marcas/` y `carteles/`. Nombres en minúsculas y con guiones.
- `scripts/optimize-images.ts` usa `sharp` para generar en `public/images/`: AVIF y WebP en varios anchos (320, 640, 1024, 1600 y 2400 px, sin ampliar nunca el original), una miniatura difuminada y un JSON con ancho y alto.
- Los carteles (cualquier carpeta llamada `carteles/`) tienen texto fino y usan más calidad. Rodrigo valida el resultado visual.
- El componente `ResponsiveImage` sirve las imágenes con `<picture>`, `srcset` y `sizes`, con `width` y `height` siempre definidos. La imagen principal de la portada carga con prioridad; el resto, en diferido.
- Logotipos e iconos en SVG optimizado.

## Contenido de la web

1. **Inicio** (`/`), en este orden (primero lo que busca un reclutador front-end):
   1. Presentación: el nombre completo como titular de cartel a todo el ancho, rol, frase sobre lo que hace, descarga del CV, bloque «Ahora» (revisarlo cada pocos meses) y foto.
   2. Proyecto destacado: Artabrian Weekend.
   3. Qué hago: Desarrollo y Diseño.
   4. Experiencia: línea temporal breve con los puestos de los CV y descarga de los dos PDF.
2. Galería de marcas: una selección breve de identidades visuales y sus aplicaciones. Los carteles del Artabrian Weekend aparecen en su caso de estudio, no en la galería de portada.
3. Galería de marcas: todas las identidades visuales disponibles y sus aplicaciones. Los carteles del Artabrian Weekend aparecen en su caso de estudio, no en la galería de portada.
4. Contacto.
5. **Casos de estudio** con la plantilla `CaseStudyPage` (`src/components/case-study/`). Cada caso es un objeto `CaseStudy` en su archivo de `src/content/` (tipos en `src/content/case-study.ts`) con su propia paleta (`theme`), que se aplica como variables CSS a toda la página salvo el footer, que mantiene el estilo general. Para uno nuevo: archivo de contenido + ruta en `src/app/proyectos/<slug>/page.tsx` con sus metadatos.
   - Artabrian Weekend (`/proyectos/artabrian-weekend`), en negro, crema y oro: contexto, papel de Rodrigo, la web (de Angular a React, arquitectura basada en JSON), la identidad, resultados y qué haría distinto.
6. **404** con enlace al inicio.

Datos del perfil: usa siempre los de los CV de Rodrigo. La web del Artabrian Weekend está hecha con **React 19, Vite y Material UI, en JavaScript**; no digas que usa TypeScript ni Node.js.

## Diseño (dirección editorial)

- Identidad editorial, sobria y contundente: más marca que aplicación. Poca densidad visual, jerarquía tipográfica clara y composición pensada primero para escritorio (sin descuidar los 360 px).
- Tipografías: Inknut Antiqua para titulares y Archivo para texto y etiquetas. Se cargan con `next/font` en `src/app/fonts.ts` y se exponen como `font-display` y `font-sans`.
- Paleta editorial con dos modos, definida en `src/app/globals.css` (`.theme-light` y `.theme-dark`). Los componentes usan solo los nombres del tema (`bg-paper`, `text-ink`…):

  | Variable                        | Claro                 | Oscuro                                |
  | ------------------------------- | --------------------- | ------------------------------------- |
  | `paper` (fondo)                 | `#E1E8E3`             | `#071711`                             |
  | `ink` (texto)                   | `#071711`             | `color-mix(#E1E8E3 80%, #071711 20%)` |
  | `accent`                        | Ultramarino `#3047B6` | Lavanda `#A6B5FF`                     |
  | `fill` (superficie)             | Coral `#FF6B4A`       | Coral claro `#FF795C`                 |
  | `fill-ink` (texto sobre `fill`) | `#071711`             | `#071711`                             |
  | `muted` (texto secundario)      | `#555B69`             | `#AEB9CC`                             |

- `accent` se reserva para texto, enlaces y controles; `fill` es una superficie con texto `fill-ink`. Ambos acentos superan WCAG AA sobre sus fondos.

- El interruptor `ThemeToggle` cambia entre los dos modos. La página arranca en modo claro.
- El proyecto destacado y el caso de estudio del Artabrian Weekend usan su propia identidad: negro `#0E0D0B`, crema `#F1EDE3` y oro `#D4A72C` (variables `aw-*` del tema).

### Pendiente de decidir

- Si el header y la hero finales van más minimalistas o más impactantes.
- Ajustes visuales finos en algunas secciones.
- Revisar portfolios reales de diseñadores-desarrolladores para cerrar la dirección.

## Calidad: criterios para dar la web por terminada

- Cada página con título, descripción e imagen para redes; `sitemap.xml`, `robots.txt` y datos estructurados de persona.
- El contenido se lee sin JavaScript.
- Todo funciona con teclado; se respeta `prefers-reduced-motion`; contraste AA.
- Lighthouse 95 o más en las cuatro categorías.
- Funciona bien desde 360 px de ancho.
- `npm run lint`, la comprobación de tipos y `npm run build` pasan sin errores antes de cada commit.

## Comandos

```bash
npm run dev       # servidor de desarrollo
npm run build     # exportación estática en out/
npm run lint      # ESLint
npm run typecheck # comprobación de tipos (tsc)
npm run test      # Vitest
npm run images    # optimiza las imágenes de recursos/
```

@AGENTS.md
