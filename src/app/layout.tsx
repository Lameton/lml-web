import type { Metadata } from "next";
import { archivo, inknut } from "./fonts";
import "./globals.css";

// Metadatos provisionales; los definitivos (redes, datos estructurados)
// llegan en la fase de calidad.
export const metadata: Metadata = {
  title: "Rodrigo Lamela · Desarrollador front-end",
  description:
    "Desarrollador front-end (React) y diseñador de marcas en A Coruña.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${archivo.variable} ${inknut.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
