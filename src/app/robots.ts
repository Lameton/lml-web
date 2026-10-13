import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Con output: "export" hay que declararlo estático para que se genere
// como archivo al compilar.
export const dynamic = "force-static";

// Next.js genera /robots.txt al compilar: todo se puede indexar.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
