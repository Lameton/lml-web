import { Archivo, Inknut_Antiqua } from "next/font/google";

// next/font descarga las fuentes en el build y las sirve desde la propia web:
// no hay peticiones a Google al cargar la página. Dos familias: Inknut Antiqua
// para titulares y Archivo para texto.
// `variable` crea una variable CSS que usa el tema de Tailwind (globals.css).

// Archivo es variable: un solo archivo cubre todos los pesos.
export const archivo = Archivo({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-archivo",
});

// Inknut Antiqua no es variable: cada peso es un archivo aparte que se descarga.
// Solo los que usa la web (600 en los números de Qué hago y 700 en los títulos):
// cada peso de más retrasa el pintado del titular en móvil.
export const inknut = Inknut_Antiqua({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-inknut",
});
