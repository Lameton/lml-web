# Investigación: portfolios de referencia

13 de octubre de 2026. Objetivo: cerrar la dirección del header y de la hero (¿más minimalista o más impactante?) mirando cómo resuelven lo mismo otros perfiles que mezclan diseño y desarrollo.

**Método.** Capturas en escritorio (1440 px, al cargar y tras bajar una pantalla) y en móvil (390 px) de cada web, y extracción automática de tipografías, tamaño del titular, navegación y estructura de títulos. Tu portada actual se analizó igual. Las capturas están fuera del repositorio, en `LAMETON/investigacion-portfolios/`, porque son de webs de terceros.

---

## Resumen

**Recomendación: estructura minimalista con un solo gesto tipográfico de cartel.** El impacto debe venir de la tipografía y de tu nombre, no de la cantidad de elementos. Header mínimo; hero con tu nombre en grande, tu rol en una línea con separadores `•` (el lenguaje de tus carteles), una frase, foto y dos acciones: ver el proyecto y descargar el CV.

El problema principal de la portada actual no es el estilo, sino **la densidad**: la hero tiene unos 15 elementos y repite información. Eso es lo que la hace sentir "app" en vez de "marca".

---

## Referencias analizadas

| Referencia | Perfil | Qué tomar | Qué evitar |
| --- | --- | --- | --- |
| [Brittany Chiang](https://brittanychiang.com) | Front-end engineer | Nombre + rol + una frase, y nada más. Columna fija a la izquierda con la navegación; experiencia como lista con pastillas de tecnología. El modelo "reclutador primero". | Su estética es ya un cliché: muchísimos portfolios la copian. |
| [Seán Halpin](https://seanhalpin.xyz) | Diseñador de producto | Titular enorme y con personalidad ("Hi. I'm Seán. A Designer.", 128 px). Proyectos como grandes piezas con la interfaz real, no tarjetas de texto. Navegación de 4 enlaces en una pastilla flotante. | El tono "simpático" no encaja con tu identidad. |
| [Alvaro Montoro](https://alvaromontoro.com) | Ingeniero front-end | Nombre como titular (80 px). Modo oscuro con un icono pequeño. | Bloques de colores para la navegación: decorativo y poco claro. |
| [Josh W Comeau](https://www.joshwcomeau.com) | Educador front-end | Microinteracciones cuidadas y respeto a `prefers-reduced-motion`. | Es un blog, no un portfolio: su estructura no aplica. |
| [La Playa](https://laplaya.studio) | Estudio de diseño y desarrollo | **Gesto tipográfico de cartel**: titular en mayúsculas a todo el ancho, combinado con una monoespaciada pequeña. Rejilla de capturas reales. Paleta de dos tintas (papel y rojo). | Muy agresivo para un perfil que busca empleo, no clientes. |
| [Lynn Fisher](https://lynnandtonic.com) | Diseñadora para la web | **La identidad sale de una sola decisión**: tipografía de cartel antiguo, papel con textura y un índice como de libro, que *es* la navegación. Sin nada más. | Rediseña cada año; es una web-obra, no un portfolio para reclutadores. |
| [Diana Lu](https://diana.lu) | Diseñadora de interacción | Nombre a 146 px. **"Download Resume" visible en la hero.** | La ilustración ocupa la hero entera y retrasa ver el trabajo. |
| [Rauno Freiberg](https://rauno.me) | Design engineer (Vercel) | Una sola frase que presenta y posiciona: "Rauno Freiberg is an Estonian interaction designer working with Vercel…". | Navegación experimental, difícil para un reclutador. |
| [Emil Kowalski](https://emilkowal.ski) | Design engineer (Linear) | Minimalismo extremo: nombre, rol, "Today", proyectos, textos. Se lee en 10 segundos. | Sin imágenes: no funcionaría para enseñar diseño. |
| [Paco Coursey](https://paco.me) | Design engineer (Linear) | Igual que Emil: frase de posicionamiento en cursiva + columnas cortas (Building, Projects, Writing). | Igual que Emil. |
| [Chudy](https://bychudy.com) | Diseñador de carteles y portadas | Las piezas *son* la portada: sus carteles flotan sobre su retrato. | Interfaz de escritorio de ordenador: llamativa pero poco accesible. |
| [Olaolu Olawuyi](https://olaolu.dev) | Ingeniero de software | Rol y propuesta de valor en una frase con dos tintas. Contacto como bloque de color a pantalla completa. | Demasiado sobrio para un perfil con diseño. |
| [Tobias Ahlin](https://tobiasahlin.com) | Diseñador e ingeniero | **Nombre convertido en composición gráfica** (su monograma con las tres palabras del nombre). "I design, tinker, & teach." | El resto de la web es un blog convencional. |

Descartadas porque no cargaban o ya no existen: Cassie Evans (cerró la web), Georgi Valk (dominio en venta), Lyn Muldrow y Annie Rudisill (páginas en blanco). Sin localizar: "Tim Smith", de la lista de Copilot; si tienes el enlace, la añado.

---

## Patrones que se repiten

1. **El nombre es el titular.** En 10 de las 13 webs el nombre es el elemento más grande o el `h1`. En la tuya el `h1` es "Front-end con identidad clara." (56 px) y tu nombre aparece a 12 px en el header. Un reclutador tiene que leer *quién* eres antes que *cómo* trabajas.
2. **El rol cabe en dos o tres palabras**, justo debajo del nombre: "Frontend Engineer", "Design Engineer", "Designer for the Web". Tu equivalente: "Desarrollador front-end • Diseñador de marcas".
3. **La hero tiene entre 3 y 6 elementos.** Brittany Chiang: nombre, rol, frase, iconos sociales. La tuya tiene unos 15: etiqueta, titular, párrafo, 2 botones, 4 etiquetas de tecnología, 3 tarjetas de datos y una tarjeta de perfil con 7 elementos dentro. Además repite información: "A Coruña" aparece 4 veces, "Disponible" 2 y las especialidades 2.
4. **La identidad viene de un gesto tipográfico, no de componentes.** Lynn Fisher (tipografía de cartel antiguo), La Playa (mayúsculas a todo el ancho) y Tobias Ahlin (nombre como monograma) son las más memorables, y las tres son estructuralmente simples. Tu gesto natural es el de tus carteles: palo seco pesado, bloques y separadores `•`. Ya funciona en la sección del Artabrian, que es ahora mismo la parte que más se parece a ti.
5. **Proyectos con imágenes reales o nada.** Halpin y La Playa enseñan la interfaz real; Emil y Paco no enseñan imágenes. Nadie enseña tarjetas vacías. Tu galería tiene cuatro tarjetas de relleno (NEXA Studio, etc.): es el mayor riesgo de credibilidad de la web ahora mismo.
6. **Navegación de 3 o 4 enlaces, o ninguna.** Halpin: 4 en una pastilla. Lynn: el índice es la hero. Emil y Paco: ninguna. La tuya tiene 5 enlaces más el nombre y el interruptor de tema, y no cabe a 768 px.
7. **El modo oscuro, si existe, es un icono pequeño** (Montoro, Comeau, Lynn). Tu interruptor con la etiqueta "CLARO" compite en tamaño con la navegación.
8. **El CV se descarga desde arriba.** Diana Lu lo pone en la hero; Brittany Chiang, al final de la experiencia con un enlace claro. Para una web que busca trabajo, el CV debería estar a un clic desde la hero.
9. **Movimiento sutil y opcional.** Al menos 6 de las 13 respetan `prefers-reduced-motion`. La tuya también: bien.

---

## Recomendación concreta

### Header: minimalista

- Izquierda: "Rodrigo Lamela" (o el monograma RL + nombre).
- Derecha: 3 enlaces (Proyecto, Experiencia, Contacto) y el modo oscuro como icono pequeño.
- "Qué hago" y "Fuera del trabajo" no necesitan estar en la navegación: se leen al bajar.
- En móvil, solo el nombre y el icono. Es una página de una sola columna y se recorre bajando; no hace falta menú.

### Hero: impactante, pero por tipografía

```
RODRIGO LAMELA                       Proyecto  Experiencia  Contacto  ☾
─────────────────────────────────────────────────────────────────────

Rodrigo                                             ┌───────────┐
Lamela                                              │   foto    │
                                                    │           │
DESARROLLADOR FRONT-END • DISEÑADOR DE MARCAS •     └───────────┘
A CORUÑA

Construyo interfaces en React con ojo de director de arte.

[ Ver el proyecto ]   [ Descargar CV ↓ ]
```

- **Nombre** en Inknut Antiqua al tamaño actual del titular (o mayor). Pasa a ser el `h1`.
- **Rol** en una línea con `•`, en Archivo cursiva y mayúsculas, como las etiquetas que ya usas.
- **Frase**: la del cuestionario (1.2), "Construyo interfaces en React con ojo de director de arte.", u otra tuya.
- **Dos acciones**: ver el proyecto y descargar el CV de front-end.
- **Se quitan**: la etiqueta "A Coruña · Disponible", las 4 etiquetas de tecnología, las 3 tarjetas de datos y la tarjeta de perfil (solo se queda la foto). La disponibilidad puede ir en una línea pequeña bajo las acciones.

Resultado: de unos 15 elementos a 6, y desaparecen los dos fallos de ancho de la hero de un plumazo.

### Galería

Hasta tener piezas reales, ocultarla. Una galería con tarjetas vacías resta más que una galería que no existe.

---

## Fallos encontrados durante la investigación

| Fallo | Estado |
| --- | --- |
| La capa de grano (`.noise-surface::before`) sobresalía un 6 % por cada lado y provocaba scroll horizontal en todas las páginas. | Corregido (`inset: 0`). |
| Las cifras del Artabrian no cabían en tres columnas a 360 px. | Corregido (una columna en móvil). |
| "A Coruña" se sale de su tarjeta en la hero a 360 y 390 px (desborda 22 px). | Pendiente: desaparece con la hero propuesta. |
| La navegación del header no cabe a 768 px (desborda 79 px). | Pendiente: desaparece con 3 enlaces o mostrándola desde `lg`. |
| El título del Artabrian se veía oscuro en `npm run dev`. | No es un fallo del código: el servidor de desarrollo no recargó el tema. Se arregla reiniciándolo. |

---

## Fuentes

- Lista de portfolios mixtos diseño y desarrollo: [Site Builder Report](https://www.sitebuilderreport.com/inspiration/web-developer-designer-portfolios)
- Búsquedas de apoyo: [Muzli: 100 Best Designer Portfolio Websites](https://muz.li/blog/top-100-most-creative-and-unique-portfolio-websites-of-2025/), [Design Shack: Portfolio Design Trends](https://designshack.net/articles/trends/portfolio-design/)
- Las 13 webs enlazadas en la tabla, visitadas el 13 de octubre de 2026.
