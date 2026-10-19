import { education, profile, socialLinks } from "@/content/home";
import { SITE_URL } from "@/lib/site";

/**
 * Datos estructurados de persona (schema.org) para buscadores. No se ven
 * en la página; se leen del mismo contenido que el resto de la web.
 */
export function PersonJsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Desarrollador front-end",
    url: SITE_URL,
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "A Coruña",
      addressRegion: "Galicia",
      addressCountry: "ES",
    },
    alumniOf: education.map((item) => ({
      "@type": "EducationalOrganization",
      name: item.school,
    })),
    knowsAbout: [
      "React",
      "TypeScript",
      "Desarrollo front-end",
      "Diseño de marcas",
      "Carteles",
    ],
    sameAs: socialLinks.map((link) => link.href),
  };

  return (
    <script
      type="application/ld+json"
      // Recomendación de la documentación de Next.js: escapar "<" para que
      // ningún texto pueda cerrar la etiqueta <script>.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(person).replace(/</g, "\\u003c"),
      }}
    />
  );
}
