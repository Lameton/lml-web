import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página no encontrada · Rodrigo Lamela",
  // Sin esto heredaría del layout un canonical que apunta a la portada.
  alternates: { canonical: null },
};

// Con la exportación estática, Next.js genera esta página como 404.html.
export default function NotFound() {
  return (
    <main className="theme-light noise-surface grid min-h-screen place-items-center px-4 text-ink">
      <div className="max-w-xl text-center">
        <p className="type-meta text-ink/60">Error 404</p>
        <h1 className="type-display mt-3">Esta página no existe.</h1>
        <p className="type-lead mt-6 text-ink/80">
          Puede que el enlace esté mal escrito o que la página se haya movido.
        </p>
        <Link
          href="/"
          className="type-action mt-8 inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-paper transition duration-200 hover:-translate-y-0.5 hover:bg-accent"
        >
          ← Volver al inicio
        </Link>
      </div>
    </main>
  );
}
