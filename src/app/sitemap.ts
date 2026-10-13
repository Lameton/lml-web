import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Con output: "export" hay que declararlo estático para que se genere
// como archivo al compilar.
export const dynamic = "force-static";

// Next.js genera /sitemap.xml a partir de esta lista al compilar.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    {
      url: `${SITE_URL}/proyectos/artabrian-weekend`,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
