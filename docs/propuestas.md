# Propuestas y decisiones pendientes

12 de octubre de 2026 · al cerrar la fase 2 (proyecto base)

Nada de lo que hay aquí está aplicado. Las propuestas visuales son solo propuestas: tú decides.

## 1. Decisiones que necesito de ti

### 1.1 El repositorio `Lameton/lml-web` ya existe

> **Resuelto:** se sobrescribe `main` con este proyecto y el código de Angular queda guardado en la rama `angular-2025`.

Es tu portfolio anterior en Angular: público, tres commits (3 al 26 de marzo de 2025). No he subido nada para no sobrescribirlo. Opciones:

| Opción | Qué pasa | Mi opinión |
| --- | --- | --- |
| **A. Renombrar el antiguo** a `lml-web-angular` y archivarlo; crear `lml-web` nuevo | Conservas el antiguo intacto, en solo lectura | **Recomendada.** Un reclutador ve un repositorio limpio y el antiguo no estorba |
| B. Sobrescribirlo (force push) | El historial de Angular desaparece de `main` (podría guardarse en una rama) | Mezcla dos proyectos en un mismo repositorio |
| C. Borrar el antiguo | Se pierde para siempre | Innecesario |

Con la A, al crear el repositorio nuevo con el mismo nombre, GitHub deja de redirigir la URL antigua al renombrado; no importa si no enlazaste el antiguo en ningún sitio.

Cuando elijas, son tres comandos (`gh repo rename`, `gh repo archive`, `gh repo create … --source . --push`).

### 1.2 Las 5 vulnerabilidades altas de `npm audit`

> **Resuelto:** no se tocan las dependencias; Dependabot avisará cuando haya arreglo.

Son **una sola**, encadenada: `braces` ≤ 3.0.3 (denegación de servicio con patrones glob muy anidados) ← `micromatch` ← `fast-glob` ← `@next/eslint-plugin-next` ← `eslint-config-next`.

- Solo afecta a ESLint en tu equipo y en la CI. No llega a la web publicada.
- Para explotarla, alguien tendría que meter patrones glob maliciosos en tu configuración de ESLint.
- `npm audit fix --force` bajaría `eslint-config-next` a la 14.2.35, que no es compatible con Next 16. **No conviene.**
- No existe ninguna versión de `braces` que lo corrija, así que tampoco sirve forzarla con `overrides`.

**Propuesta:** no hacer nada y volver a revisarlo cuando salga una versión nueva de `eslint-config-next`. Dependabot (punto 2.1) avisaría solo.

### 1.3 El CV front-end dice que la web del Artabrian usa Node.js

> **Pendiente de Rodrigo:** corregir la frase en el original del CV (*«y después con React, Vite y Material UI»*).

En el perfil profesional: *«primero con Angular y Tailwind CSS, y después con React y Node.js»*. CLAUDE.md dice que **no** se mencione Node.js, y la experiencia del mismo CV dice *«React 19, Vite y Material UI»*. Como el PDF va a ser público, conviene corregirlo antes de publicarlo.

### 1.4 El mapa de la portada no coincide entre el briefing y CLAUDE.md

> **Resuelto:** orden A (Presentación, Proyecto destacado, Qué hago, Experiencia, Galería de diseño, Fuera del trabajo, Contacto). Marcas y carteles van en una galería mezclada con filtro por categoría. Actualizado en CLAUDE.md.

| Briefing | CLAUDE.md y maqueta |
| --- | --- |
| Otros trabajos (4-6 piezas) | Marcas + Carteles |
| **Experiencia** (línea temporal y descarga de los CV) | No aparece |

¿Va la sección Experiencia? Mi opinión: sí. Para un reclutador es lo más rápido de leer, y es el sitio natural para descargar los CV.

### 1.5 Datos de la maqueta que no salen de los CV

- **«Stack: React • TypeScript • Next.js»** y **«Qué hago: … Next.js …»**: los CV no mencionan Next.js. Con esta web pasa a ser verdad. Conviene añadirlo también a los CV para que todo coincida.
- **«Identidades registradas en la OEPM y la EUIPO»**: los CV dicen *«la mayoría se han registrado»*. Propongo *«La mayoría, registradas en la OEPM y la EUIPO»*.

### 1.6 Los CV que se descargan desde la web

Para ofrecerlos en la web, propongo copiarlos a `public/cv/` con nombres sin tildes, porque la «ñ» de `Diseño` acaba en la URL como `Dise%C3%B1o`: `cv-rodrigo-lamela-frontend.pdf` y `cv-rodrigo-lamela-diseno.pdf`. Ten en cuenta que llevan tu teléfono.

## 2. Mejoras técnicas

1. **Dependabot.** Hecho: `.github/dependabot.yml`, revisión semanal de npm y de GitHub Actions.
2. **Claves de imagen tipadas.** Ahora `<ResponsiveImage src="…">` acepta cualquier texto y una errata falla al hacer el build. Con `type ImageKey = keyof typeof manifest`, fallaría ya en el editor, con autocompletado. Lo dejé fuera porque, con el manifiesto vacío, ese tipo no admite ningún valor.
3. **Precarga de la imagen principal.** `fetchPriority="high"` ya ayuda. Si Lighthouse marca el LCP, se puede añadir `preload()` de `react-dom` con `imageSrcSet` y `imageSizes`.
4. **Lighthouse CI en GitHub Actions**, para que el criterio «95 o más» se compruebe en cada push y no a mano. Mismo enfoque para la accesibilidad con `@axe-core/playwright`.
5. **Prettier**, para que el formato del código no dependa de quién lo escriba. Una dependencia y un `npm run format`.
6. **Favicon propio.** Hecho de forma provisional con `lml_favicon_web.ico`. Más adelante: `src/app/icon.svg` (nítido a cualquier tamaño) y `apple-icon.png` para iOS.
7. **SVG optimizado** para logotipos e iconos con `svgo`, sea como paso del script de imágenes o por separado. Aún no está hecho.
8. **Cabeceras de seguridad** en `vercel.json` (CSP, `Referrer-Policy`, `X-Content-Type-Options`). Con la exportación estática, `headers()` de `next.config.ts` no funciona, así que tiene que ser en Vercel. Suben la nota de «Buenas prácticas».
9. **Inglés.** Sin servidor no hay middleware para detectar el idioma. Propongo dejar `/` en español y crear `/en/…` como rutas propias que lean `src/content/en/`. No hace falta un segmento `[lang]` hasta que exista el inglés.
10. **Script de imágenes incremental.** Ahora regenera todo cada vez. Con decenas de carteles puede tardar; se podría saltar los originales sin cambios comparando fechas de modificación.

## 3. Contenido

1. **«Qué haría distinto»** en el caso de estudio. Este proyecto ya da material concreto: exportación estática frente a la SPA de Vite (SEO y contenido sin JavaScript), y TypeScript frente a JavaScript.
2. **Enlazar el código.** Si el repositorio del Artabrian Weekend puede ser público, enlázalo en el caso de estudio. Un técnico querrá ver el JSON y la plantilla.
3. **Cifras con fuente.** «+1.000 asistentes» y «+720 participaciones (+30 % sobre 2025)» vienen del CV de diseño. Si tienes una captura de inscripciones o una noticia de prensa, enlazarla les da credibilidad.
4. **Este repositorio también es portfolio.** Commits pequeños en español, CI en verde y un README claro. Merece la pena mencionarlo en el caso de estudio o en la sección de desarrollo.

## 4. Propuestas visuales (sin aplicar)

1. **Contraste de la paleta azul** (WCAG; AA pide 4,5:1 para texto normal y 3:1 para texto grande y elementos de interfaz):

   | Combinación | Contraste | Uso |
   | --- | --- | --- |
   | Tinta `#1C2647` sobre papel | 11,37 | Cualquier texto |
   | Secundario `#454B60` sobre papel | 6,64 | Cualquier texto |
   | Acento `#3F5894` sobre papel | 5,31 | Cualquier texto y enlaces |
   | Tinta sobre relleno `#7C93C3` | 4,81 | Texto sobre bloques de relleno |
   | **Relleno `#7C93C3` sobre papel** | **2,36** | **No sirve para texto, iconos ni bordes de botones** |

   Propuesta: usar el relleno solo como superficie, nunca como color de texto o de un elemento que haya que distinguir. La paleta del Artabrian cumple de sobra: oro sobre negro da 8,66.
2. **Moteado de serigrafía.** La maqueta lo genera con un filtro SVG (`feTurbulence`) en vivo. En móvil puede costar rendimiento al hacer scroll. Propongo generar una textura pequeña en AVIF que se repita como fondo, con `mix-blend-mode: multiply`. El efecto es el mismo y no cuesta nada en pantalla.
3. **Foto a dos tintas.** En lugar de conseguirlo con CSS, el script de imágenes podría generar la versión bitono (tinta + papel) con `sharp`. Saldría una imagen real, ligera y idéntica en todos los navegadores.
4. **Foco visible.** Propongo un contorno de 3 px en acento con separación (`outline-offset`), coherente con los bloques de los carteles. Es obligatorio para el criterio de teclado.
5. **Modo oscuro.** La dirección D no lo contempla y no lo he añadido. Si lo quieres, la paleta «oro» de la maqueta podría ser la base.
