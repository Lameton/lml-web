import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CaseStudyBlock } from "./CaseStudyBlock";

describe("CaseStudyBlock", () => {
  it("pinta los párrafos uno a uno", () => {
    render(
      <CaseStudyBlock
        block={{ type: "paragraphs", items: ["Primero.", "Segundo."] }}
      />,
    );

    expect(screen.getByText("Primero.").tagName).toBe("P");
    expect(screen.getByText("Segundo.").tagName).toBe("P");
  });

  it("pinta la lista como lista, con los puntos ocultos a los lectores de pantalla", () => {
    render(<CaseStudyBlock block={{ type: "list", items: ["Uno", "Dos"] }} />);

    expect(screen.getAllByRole("listitem")).toHaveLength(2);
    expect(screen.getAllByText("•")[0]).toHaveAttribute("aria-hidden", "true");
  });

  it("muestra el código con su archivo y se puede enfocar para desplazarlo", () => {
    const { container } = render(
      <CaseStudyBlock
        block={{ type: "code", file: "src/app.jsx", code: "const a = 1;" }}
      />,
    );

    expect(screen.getByText("src/app.jsx")).toBeInTheDocument();
    const pre = container.querySelector("pre");
    expect(pre).toHaveTextContent("const a = 1;");
    expect(pre).toHaveAttribute("tabindex", "0");
  });

  it("pinta las cifras como lista de definiciones", () => {
    render(
      <CaseStudyBlock
        block={{
          type: "stats",
          items: [{ value: "720+", label: "Participaciones" }],
        }}
      />,
    );

    expect(screen.getByText("Participaciones").tagName).toBe("DT");
    expect(screen.getByText("720+").tagName).toBe("DD");
  });

  it("abre los enlaces externos en otra pestaña de forma segura", () => {
    render(
      <CaseStudyBlock
        block={{
          type: "link",
          label: "Ver el código",
          href: "https://github.com/x",
        }}
      />,
    );

    const link = screen.getByRole("link", { name: /ver el código/i });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
