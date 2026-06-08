"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { AnimatedCounter } from "@/components/effects/animated-counter";

/**
 * Manifesto — GSAP ScrollTrigger.
 * - Lignes du manifeste : reveal-mask line-by-line en stagger
 * - Stats : compteurs animés (0 → valeur cible) sur entrée
 * - Eyebrow : fade-in léger
 */
export function Manifesto() {
  const root = useRef<HTMLElement>(null);

  const lines = [
    "Construire des produits qui tiennent",
    "des annees, pas un trimestre.",
    "Le code, le design, la performance,",
    "la maintenance: un seul artisan.",
  ];

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const root_ = root.current;
      if (!root_) return;

      const eyebrow = root_.querySelector(".manifesto-eyebrow");
      const masks = root_.querySelectorAll<HTMLElement>(".manifesto-line");

      if (reduce) {
        gsap.set([eyebrow, ...Array.from(masks)], { autoAlpha: 1, yPercent: 0, y: 0 });
        return;
      }

      gsap.set(eyebrow, { autoAlpha: 0, y: 16 });
      gsap.set(masks, { yPercent: 105, autoAlpha: 0 });

      const tl = gsap.timeline({
        defaults: { ease: "expo.out" },
        scrollTrigger: {
          trigger: root_,
          start: "top 70%",
          once: true,
        },
      });

      tl.to(eyebrow, { autoAlpha: 1, y: 0, duration: 0.8 }, 0)
        .to(
          masks,
          { yPercent: 0, autoAlpha: 1, duration: 1.1, stagger: 0.1 },
          0.15,
        );
    },
    { scope: root as React.RefObject<HTMLElement> },
  );

  return (
    <section
      ref={root}
      aria-label="Manifeste"
      className="relative border-y border-hairline bg-paper-soft"
    >
      <div className="mx-auto max-w-350 px-6 sm:px-10 py-28 md:py-40 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-2">
          <p className="manifesto-eyebrow eyebrow">02 / Manifeste</p>
        </div>

        <div className="col-span-12 md:col-span-10">
          <h2 className="display text-3xl md:text-5xl lg:text-6xl">
            {lines.map((line, i) => (
              <span
                key={i}
                className="block overflow-hidden pb-[0.05em] -mb-[0.05em]"
              >
                <span
                  className="manifesto-line inline-block"
                  style={{ willChange: "transform, opacity" }}
                >
                  {line}
                </span>
              </span>
            ))}
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-3xl">
            <Stat label="Annees" value={5} />
            <Stat label="Projets" value={3} />
            <Stat label="Stack" value={4} suffix="domaines" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  suffix,
}: {
  label: string;
  value: number;
  suffix?: string;
}) {
  return (
    <div>
      <p className="display text-5xl md:text-6xl tnum">
        <AnimatedCounter value={value} pad={2} />
      </p>
      <p className="eyebrow mt-2">
        {label}
        {suffix ? ` / ${suffix}` : ""}
      </p>
    </div>
  );
}
