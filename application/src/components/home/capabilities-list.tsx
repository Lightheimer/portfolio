"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";

const CAPABILITIES = [
  {
    title: "Produit",
    body: "Du brief commercial a la mise en production. Architecture, decisions de stack, dette assumee.",
    items: ["Discovery", "Architecture", "Roadmap"],
  },
  {
    title: "Ingenierie",
    body: "Backends Laravel et Spring Boot. Frontends React et Next.js. Bases relationnelles. Tests.",
    items: ["Backend", "Frontend", "DevOps"],
  },
  {
    title: "ICT4D",
    body: "Outils numeriques pour le terrain ouest-africain. Reseau intermittent, mobile money, offline-first.",
    items: ["Mobile money", "Offline-first", "Multilingue"],
  },
  {
    title: "Direction",
    body: "Identite, design system, copy editorial. Le produit doit aussi etre beau pour etre adopte.",
    items: ["Identite", "Design system", "Editorial"],
  },
];

export function CapabilitiesList() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const root_ = root.current;
      if (!root_) return;

      const titleWords = root_.querySelectorAll<HTMLElement>(".cap-title-word");

      if (reduce) {
        gsap.set(titleWords, { autoAlpha: 1, yPercent: 0 });
        gsap.set(root_.querySelectorAll(".cap-card"), { autoAlpha: 1, y: 0 });
        return;
      }

      // Titre : reveal mots-à-mots
      gsap.set(titleWords, { yPercent: 110, autoAlpha: 0 });
      gsap.to(titleWords, {
        yPercent: 0,
        autoAlpha: 1,
        duration: 1.1,
        stagger: 0.08,
        ease: "expo.out",
        scrollTrigger: {
          trigger: root_,
          start: "top 70%",
          once: true,
        },
      });

      // Cartes : batch en entrée
      ScrollTrigger.batch(root_.querySelectorAll<HTMLElement>(".cap-card"), {
        start: "top 88%",
        once: true,
        interval: 0.1,
        onEnter: (els) => {
          gsap.from(els, {
            autoAlpha: 0,
            y: 50,
            duration: 1,
            stagger: 0.1,
            ease: "expo.out",
          });
        },
      });
    },
    { scope: root as React.RefObject<HTMLElement> },
  );

  // Découpe pour le mask reveal du titre
  const titleParts: { text: string; em?: boolean; rouge?: boolean }[] = [
    { text: "Quatre" },
    { text: "territoires,", em: true },
    { text: "une" },
    { text: "seule" },
    { text: "signature." },
  ];

  return (
    <section
      ref={root}
      aria-label="Capacites"
      className="border-y border-hairline bg-paper-soft"
    >
      <div className="mx-auto max-w-350 px-6 sm:px-10 py-28 md:py-40">
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-9">
            <h2 className="display text-5xl md:text-7xl leading-[0.96]">
              {titleParts.map((p, i) => (
                <span
                  key={i}
                  className="inline-block overflow-hidden pb-[0.05em] -mb-[0.05em] mr-[0.3em] align-bottom"
                >
                  <span
                    className={`cap-title-word inline-block ${p.em ? "italic" : ""}`}
                    style={{ willChange: "transform, opacity", fontWeight: p.em ? 500 : 400 }}
                  >
                    {p.text}
                  </span>
                </span>
              ))}
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline">
          {CAPABILITIES.map((cap, i) => (
            <article
              key={cap.title}
              className="cap-card bg-paper-soft p-8 md:p-10 flex flex-col gap-5 group hover:bg-paper transition-colors duration-500"
            >
              <p className="eyebrow tnum">N. 0{i + 1}</p>
              <h3 className="display text-3xl md:text-4xl">
                {cap.title}
                <span className="text-rouge">.</span>
              </h3>
              <p className="text-[14px] leading-relaxed text-muted">{cap.body}</p>
              <ul className="mt-auto pt-6 border-t border-hairline space-y-1.5">
                {cap.items.map((item) => (
                  <li
                    key={item}
                    className="text-[13px] text-muted group-hover:text-foreground transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
