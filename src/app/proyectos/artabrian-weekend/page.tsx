import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/case-study/CaseStudyPage";
import { artabrianCaseStudy } from "@/content/artabrian";
import { baseOpenGraph } from "@/lib/site";

const title =
  "Artabrian Weekend · Caso de estudio de Rodrigo Lamela Sanfacundo";
const description =
  "Web en React guiada por datos e identidad gráfica para el Artabrian Weekend, un fin de semana de torneos de cartas en Ferrol.";
const path = "/proyectos/artabrian-weekend";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  // Sustituye entero el openGraph del layout: hay que repetir lo común.
  openGraph: {
    ...baseOpenGraph,
    type: "article",
    title,
    description,
    url: path,
  },
};

export default function ArtabrianWeekendPage() {
  return <CaseStudyPage study={artabrianCaseStudy} />;
}
