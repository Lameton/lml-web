# lml-web

Web profesional de **Rodrigo Lamela**, desarrollador front-end (React) y diseñador de marcas en A Coruña.

Incluye una portada con mis trabajos de desarrollo, marcas y carteles, y un caso de estudio del Artabrian Weekend, un evento de juegos de cartas del que hice la web y la identidad visual.

> En construcción. Se publicará en Vercel cuando esté completa.

## Stack

- **Next.js 16** (App Router) con exportación estática: el build genera HTML en `out/` sin servidor.
- **TypeScript** en modo estricto.
- **Tailwind CSS 4**, con los colores y tipografías de la marca como variables de tema en `src/app/globals.css`.
- **sharp** para optimizar las imágenes con un script propio, y un componente `ResponsiveImage` que las sirve con `<picture>`.
- **Vitest** y **Testing Library** para las pruebas.

## Puesta en marcha

Requiere Node.js 22 o superior.

```bash
npm install
npm run dev       # servidor de desarrollo en http://localhost:3000
```

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Exportación estática en `out/` |
| `npm run lint` | ESLint |
| `npm run typecheck` | Comprobación de tipos con TypeScript |
| `npm run test` | Pruebas con Vitest |
| `npm run images` | Optimiza las imágenes de `recursos/` |

## Imágenes

Los originales a máxima calidad van en `recursos/`, que no se sube al repositorio. `npm run images` genera en `public/images/`:

- versiones AVIF y WebP a 640, 1024, 1600 y 2400 px de ancho, sin ampliar nunca el original;
- más calidad para las imágenes de cualquier carpeta `carteles/`, que tienen texto fino;
- `manifest.json` con el ancho, el alto, las rutas y una miniatura difuminada de cada imagen.

Los nombres de archivo van en minúsculas y con guiones (`cartel-honeytomb.jpg`). La clave de cada imagen es su ruta sin extensión:

```tsx
<ResponsiveImage
  src="carteles/cartel-honeytomb"
  alt="Cartel del concierto de Honeytomb y Low Gain"
  sizes="(min-width: 1024px) 33vw, 100vw"
/>
```

## Estructura

```
recursos/          originales de las imágenes (fuera de git)
public/images/     imágenes optimizadas (generadas, no editar a mano)
scripts/           script de optimización de imágenes
src/app/           rutas de la web
src/components/    componentes reutilizables
src/content/       textos y datos tipados
src/lib/           utilidades
docs/              briefing, dirección visual y CV
```
