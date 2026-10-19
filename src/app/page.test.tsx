import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home navigation", () => {
  it("incluye un punto de anclaje superior y enlaces que apuntan a secciones válidas", () => {
    render(<Home />);

    const topAnchor = document.getElementById("top");
    expect(topAnchor).not.toBeNull();

    expect(
      screen.getByRole("link", {
        name: "Inicio: Rodrigo Lamela Sanfacundo",
      }),
    ).toHaveAttribute("href", "#top");

    const navLinks = [
      { href: "#proyecto", label: "Proyecto" },
      { href: "#experiencia", label: "Experiencia" },
      { href: "#contacto", label: "Contacto" },
    ];

    navLinks.forEach(({ href, label }) => {
      const matchingLinks = screen.getAllByRole("link", {
        name: new RegExp(label, "i"),
      });
      expect(matchingLinks.length).toBeGreaterThan(0);
      expect(
        matchingLinks.some((link) => link.getAttribute("href") === href),
      ).toBe(true);
      expect(document.querySelector(href)).not.toBeNull();
    });

    const outsideWorkMatches = screen.getAllByText(/fuera del trabajo/i);
    expect(outsideWorkMatches.length).toBeGreaterThan(0);
  });

  it("muestra todas las marcas disponibles, sin filtros de categoría", () => {
    render(<Home />);

    const galleryItems = Array.from(
      document.querySelectorAll("#galeria .gallery-item"),
    );

    expect(galleryItems).toHaveLength(10);
    expect(
      galleryItems.map(
        (item) => item.querySelector("figcaption p")?.textContent,
      ),
    ).toEqual([
      "Diseño de interfaz",
      "Aplicación de identidad",
      "Variantes de logotipo",
      "Diseño web",
      "Variantes de logotipo",
      "Diseño de camiseta",
      "Sistema tipográfico",
      "Sistema gráfico",
      "Diseño de vinilos",
      "Identidad visual",
    ]);
    expect(document.querySelector("#galeria")?.textContent).not.toContain(
      "Marca ·",
    );
    expect(document.querySelector("#galeria input[type='radio']")).toBeNull();
  });
});
