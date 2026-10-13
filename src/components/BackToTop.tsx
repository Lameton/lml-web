"use client";

import { useEffect, useState } from "react";

/**
 * Botón flotante para volver arriba. Es lo único de la portada que necesita
 * JavaScript (escucha el scroll), así que vive en su propio componente de
 * cliente y el resto de la página se queda como componente de servidor.
 */
export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="#top"
      aria-label="Volver arriba"
      // Oculto, no debe recibir el foco ni leerse: el teclado acabaría en
      // un botón invisible.
      tabIndex={isVisible ? 0 : -1}
      aria-hidden={!isVisible}
      className={`back-to-top fixed bottom-6 right-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink/20 bg-paper text-lg text-ink shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-200 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      ↑
    </a>
  );
}
