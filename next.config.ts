import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exportación estática: `next build` genera HTML, CSS y JS en out/,
  // sin servidor. Así el contenido se lee sin JavaScript y se puede
  // publicar en cualquier hosting estático.
  output: "export",
  // El optimizador de imágenes por defecto necesita un servidor, así que
  // no existe en la exportación estática. Las imágenes se optimizan antes
  // con scripts/optimize-images.ts y se sirven con ResponsiveImage.
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
