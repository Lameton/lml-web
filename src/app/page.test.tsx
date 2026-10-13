import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home navigation", () => {
  it("incluye un punto de anclaje superior y enlaces que apuntan a secciones válidas", () => {
    render(<Home />);

    const topAnchor = document.getElementById("top");
    expect(topAnchor).not.toBeNull();

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
});
