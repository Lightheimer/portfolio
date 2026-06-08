"use client";

/**
 * Compteur animé : tween 0 → value on viewport enter.
 * Format en padStart pour matcher l'esthétique "02", "05" du portfolio.
 */

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type Props = {
  value: number;
  /** Nombre de chiffres avec leading zero (ex. "05") */
  pad?: number;
  className?: string;
  duration?: number;
};

export function AnimatedCounter({
  value,
  pad = 2,
  className = "",
  duration = 1.6,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const reduce =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduce) {
        el.textContent = String(value).padStart(pad, "0");
        return;
      }

      const obj = { n: 0 };
      gsap.to(obj, {
        n: value,
        duration,
        ease: "expo.out",
        snap: { n: 1 },
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
        onUpdate() {
          el.textContent = String(Math.round(obj.n)).padStart(pad, "0");
        },
        onComplete() {
          el.textContent = String(value).padStart(pad, "0");
        },
      });
    },
    { scope: ref as React.RefObject<HTMLElement> }
  );

  return (
    <span ref={ref} className={className}>
      {String(value).padStart(pad, "0")}
    </span>
  );
}
