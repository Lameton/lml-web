"use client";

import { useState } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  const main = document.getElementById("site-main");

  if (!main) return;

  main.classList.toggle("theme-light", theme === "light");
  main.classList.toggle("theme-dark", theme === "dark");

  document.documentElement.style.colorScheme = theme;
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  function toggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";

    applyTheme(nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button
      type="button"
      role="switch"
      aria-label="Modo oscuro"
      aria-checked={theme === "dark"}
      className="theme-toggle type-action"
      onClick={toggleTheme}
    >
      <span className="theme-toggle-track" aria-hidden="true">
        <span className="theme-toggle-thumb" />
      </span>
      <span>{theme === "dark" ? "Oscuro" : "Claro"}</span>
    </button>
  );
}
