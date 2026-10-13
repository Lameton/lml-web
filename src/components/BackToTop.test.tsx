import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { BackToTop } from "./BackToTop";

// jsdom no hace scroll de verdad: simulamos la posición y lanzamos el evento.
function scrollTo(y: number) {
  Object.defineProperty(window, "scrollY", { value: y, configurable: true });
  act(() => {
    fireEvent.scroll(window);
  });
}

describe("BackToTop", () => {
  afterEach(() => {
    scrollTo(0);
  });

  it("está oculto y fuera del orden de tabulación al principio de la página", () => {
    const { container } = render(<BackToTop />);

    // Oculto no tiene nombre accesible (aria-hidden), así que no se puede
    // buscar por su nombre: se busca por el destino del enlace.
    const link = container.querySelector('a[href="#top"]');
    expect(link).toHaveAttribute("aria-hidden", "true");
    expect(link).toHaveAttribute("tabindex", "-1");
  });

  it("aparece y se puede enfocar al bajar más de 500 px", () => {
    render(<BackToTop />);

    scrollTo(600);

    const link = screen.getByRole("link", { name: "Volver arriba" });
    expect(link).toHaveAttribute("aria-hidden", "false");
    expect(link).toHaveAttribute("tabindex", "0");
  });
});
