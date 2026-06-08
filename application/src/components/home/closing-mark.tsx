"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { MagneticLink } from "@/components/effects/magnetic-link";

/**
 * Closing — titre reveal word-by-word + CTA magnétique.
 */
export function ClosingMark() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const root_ = root.current;
      if (!root_) return;

      const words = root_.querySelectorAll<HTMLElement>(".cl-word");
      const cta = root_.querySelector(".cl-cta");

      if (reduce) {
        gsap.set([...Array.from(words), cta], { autoAlpha: 1, yPercent: 0, y: 0 });
        return;
      }

      gsap.set(words, { yPercent: 110, autoAlpha: 0 });
      gsap.set(cta, { autoAlpha: 0, y: 24 });

      const tl = gsap.timeline({
        defaults: { ease: "expo.out" },
        scrollTrigger: {
          trigger: root_,
          start: "top 75%",
          once: true,
        },
      });

      tl.to(words, { yPercent: 0, autoAlpha: 1, duration: 1.15, stagger: 0.09 }, 0)
        .to(cta, { autoAlpha: 1, y: 0, duration: 0.9 }, 0.5);
    },
    { scope: root as React.RefObject<HTMLElement> },
  );

  const parts: { text: string; em?: boolean; br?: boolean }[] = [
    { text: "Pour" },
    { text: "ceux" },
    { text: "qui", br: true },
    { text: "voient", em: true },
    { text: "le" },
    { text: "detail." },
  ];

  return (
    <section ref={root} className="border-t border-hairline">
      <div className="mx-auto max-w-350 px-6 sm:px-10 py-32 grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-7">
          <p className="display text-5xl md:text-7xl lg:text-8xl leading-[0.96]">
            {parts.map((p, i) => (
              <span key={i}>
                <span className="inline-block overflow-hidden pb-[0.05em] -mb-[0.05em] mr-[0.25em] align-bottom">
                  <span
                    className={`cl-word inline-block ${p.em ? "italic" : ""}`}
                    style={{ willChange: "transform, opacity", fontWeight: p.em ? 500 : 400 }}
                  >
                    {p.text}
                  </span>
                </span>
                {p.br ? <br /> : null}
              </span>
            ))}
          </p>
        </div>
        <div className="cl-cta md:col-span-4 md:col-start-9 flex md:justify-end">
          <MagneticLink
            href="/contact"
            strength={0.35}
            className="group items-center gap-3 bg-ink text-paper px-8 py-5 hover:bg-rouge transition-colors duration-300 whitespace-nowrap"
          >
            <span className="text-[12px] tracking-[0.18em] uppercase font-medium">
              Echangeons
            </span>
            <span aria-hidden className="transition-transform group-hover:translate-x-1.5">
              {"\u2192"}
            </span>
          </MagneticLink>
        </div>
      </div>
    </section>
  );
}
