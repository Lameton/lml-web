import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";

describe("ThemeToggle", () => {
  it("activa el modo oscuro en el contenedor principal al pulsar", () => {
    render(<Home />);

    const button = screen.getByRole("switch", { name: /modo oscuro/i });
    fireEvent.click(button);

    const main = document.getElementById("site-main");
    expect(main).not.toBeNull();
    expect(main?.classList.contains("theme-dark")).toBe(true);
    expect(main?.classList.contains("theme-light")).toBe(false);
  });
});
