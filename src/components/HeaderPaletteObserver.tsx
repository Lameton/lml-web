"use client";

import { useEffect } from "react";

export function HeaderPaletteObserver() {
  useEffect(() => {
    const header = document.getElementById("site-header");
    const project = document.getElementById("proyecto");

    if (!header || !project) return;

    const headerElement = header;
    const projectElement = project;

    let frame = 0;

    function updatePalette() {
      frame = 0;

      const headerBounds = headerElement.getBoundingClientRect();
      const projectBounds = projectElement.getBoundingClientRect();
      const overlapsProject =
        projectBounds.top < headerBounds.bottom &&
        projectBounds.bottom > headerBounds.top;

      headerElement.toggleAttribute("data-project-underlay", overlapsProject);
    }

    function scheduleUpdate() {
      if (frame) return;
      frame = window.requestAnimationFrame(updatePalette);
    }

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
