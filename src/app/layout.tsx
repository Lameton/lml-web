import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { PersonJsonLd } from "@/components/PersonJsonLd";
import { baseOpenGraph, SITE_URL } from "@/lib/site";
import { archivo, inknut } from "./fonts";
import "./globals.css";

const title = "Rodrigo Lamela Sanfacundo · Desarrollador front-end";
const description =
  "Desarrollador front-end (React) y diseñador de marcas en A Coruña. Disponible para trabajo presencial o híbrido en Galicia.";

// Metadatos de la portada, que también sirven de valores por defecto. Las
// demás páginas definen los propios.
export const metadata: Metadata = {
  // Base para convertir en absolutas las URL relativas (imágenes para
  // redes, canonical…).
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { ...baseOpenGraph, title, description, url: "/" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${archivo.variable} ${inknut.variable}`}>
      <body>
        <PersonJsonLd />
        {children}
        {/* Analítica de Vercel: sin cookies. Su script solo existe cuando la
            web está desplegada en Vercel; en local no envía nada. */}
        <Analytics />
      </body>
    </html>
  );
}
