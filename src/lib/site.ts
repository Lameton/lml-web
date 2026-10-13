/**
 * Datos del sitio que comparten los metadatos, el sitemap y robots.txt.
 *
 * PENDIENTE: SITE_URL es el subdominio que Vercel asigna por defecto al
 * proyecto lml-web. Cuando se conecte Vercel (o haya dominio propio), se
 * cambia aquí y todo lo demás se actualiza solo.
 */
export const SITE_URL = "https://lml-web.vercel.app";

export const SITE_NAME = "Rodrigo Lamela";

// Los metadatos se fusionan solo en el primer nivel: si una página define
// `openGraph`, sustituye entero el del layout. Por eso lo común va aquí y
// cada página lo extiende.
export const baseOpenGraph = {
  siteName: SITE_NAME,
  locale: "es_ES",
  type: "website",
} as const;
