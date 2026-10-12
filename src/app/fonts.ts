import { Archivo, Rubik } from "next/font/google";

// next/font descarga las fuentes en el build y las sirve desde la propia web:
// no hay peticiones a Google al cargar la página. Ambas son fuentes variables,
// así que un solo archivo por estilo cubre todos los pesos.
// `variable` crea una variable CSS que usa el tema de Tailwind (globals.css).

export const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const archivo = Archivo({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-archivo",
});
