"use client";

import { useEffect } from "react";

export function HomeMotion() {
  useEffect(() => {
    const cover = document.querySelector<HTMLElement>(".home-cover");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!cover || reduceMotion.matches) return;

    function onPointerMove(event: PointerEvent) {
      if (!cover) return;
      const rect = cover.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      cover.style.setProperty("--mx", `${x * 18}px`);
      cover.style.setProperty("--my", `${y * 12}px`);
    }

    cover.addEventListener("pointermove", onPointerMove);
    return () => cover.removeEventListener("pointermove", onPointerMove);
  }, []);

  return (
    <div className="motion-field" aria-hidden="true">
      <div className="motion-stars" />
      <div className="motion-shooting" />
      <div className="motion-petals" />
      <div className="motion-clouds" />
      <div className="motion-ocean" />
      <div className="motion-reflection" />
      <div className="motion-lighthouse" />
      <div className="motion-flowers" />
    </div>
  );
}
