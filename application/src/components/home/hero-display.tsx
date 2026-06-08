"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";

/**
 * Hero éditorial — GSAP timeline d'entrée.
 * - Eyebrow strip fade-up
 * - Titre display reveal mot-à-mot avec mask vertical (overflow-hidden + yPercent)
 * - Aside meta colonne droite
 * - Lead + CTA en cascade finale
 * Tout respecte prefers-reduced-motion.
 */
export function HeroDisplay() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const root_ = root.current;
      if (!root_) return;

      const eyebrowStrip = root_.querySelector(".hero-eyebrow");
      const words = root_.querySelectorAll<HTMLElement>(".hero-word");
      const aside = root_.querySelectorAll(".hero-aside > *");
      const lead = root_.querySelector(".hero-lead");
      const cta = root_.querySelector(".hero-cta");

      if (reduce) {
        gsap.set([eyebrowStrip, ...Array.from(words), ...Array.from(aside), lead, cta], {
          autoAlpha: 1,
          yPercent: 0,
          y: 0,
        });
        return;
      }

      gsap.set(eyebrowStrip, { autoAlpha: 0, y: 16 });
      gsap.set(words, { yPercent: 110, autoAlpha: 0 });
      gsap.set(aside, { autoAlpha: 0, y: 24 });
      gsap.set(lead, { autoAlpha: 0, y: 20 });
      gsap.set(cta, { autoAlpha: 0, y: 20 });

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.to(eyebrowStrip, { autoAlpha: 1, y: 0, duration: 0.9 }, 0.1)
        .to(
          words,
          { yPercent: 0, autoAlpha: 1, duration: 1.2, stagger: 0.07 },
          0.2,
        )
        .to(aside, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.08 }, 0.6)
        .to(lead, { autoAlpha: 1, y: 0, duration: 0.9 }, 0.85)
        .to(cta, { autoAlpha: 1, y: 0, duration: 0.9 }, 1.0);
    },
    { scope: root as React.RefObject<HTMLElement> },
  );

  // Lignes du titre — chaque mot dans un mask (overflow-hidden + yPercent 110→0)
  const titleLines: { text: string; em?: boolean; rouge?: boolean }[] = [
    { text: "Junior" },
    { text: "Samuel" },
    { text: "Koudji,", em: true },
    { text: "software", rouge: true },
    { text: "engineer.", rouge: true },
  ];

  return (
    <section
      ref={root}
      aria-label="Presentation"
      className="relative mx-auto w-full max-w-350 px-6 sm:px-10 pt-12 sm:pt-20"
    >
      <div className="hero-eyebrow grid grid-cols-12 gap-6 pb-8 border-b border-hairline">
        <p className="eyebrow col-span-6 sm:col-span-3">Portfolio. 2026.</p>
        <p className="eyebrow col-span-6 sm:col-span-3 sm:text-center">N. 01</p>
        <p className="hidden sm:block eyebrow col-span-3 text-center">
          Software engineer
        </p>
        <p className="hidden sm:block eyebrow col-span-3 text-right tnum">
          Lome. Paris.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-x-6 gap-y-12 pt-14 sm:pt-24 pb-20 md:pb-32">
        <div className="col-span-12 md:col-span-9">
          <h1 className="display text-[clamp(3.25rem,11vw,9.5rem)]">
            {titleLines.map((line, i) => (
              <span
                key={i}
                className="block overflow-hidden pb-[0.05em] -mb-[0.05em]"
              >
                <span
                  className={`hero-word inline-block ${line.em ? "italic" : ""} ${line.rouge ? "text-rouge" : ""}`}
                  style={{
                    willChange: "transform, opacity",
                    fontWeight: line.em ? 500 : 400,
                  }}
                >
                  {line.text}
                </span>
              </span>
            ))}
          </h1>
        </div>

        <aside className="hero-aside col-span-12 md:col-span-3 md:pt-6 flex flex-col gap-8">
          <div>
            <p className="eyebrow mb-3">Specialites</p>
            <p className="text-[15px] leading-relaxed">
              Laravel.
              <br />
              Next.js.
              <br />
              Java Spring.
              <br />
              ICT4D.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">Mission</p>
            <p className="text-[15px] leading-relaxed">
              Ingenieur logiciel,
              <br />
              ONG internationale,
              <br />
              Lome, Togo.
            </p>
          </div>
        </aside>

        <div className="hero-lead col-span-12 md:col-span-7 md:col-start-1 mt-4 md:mt-12">
          <p className="lead">
            Trois produits qui tiennent debout. Un seul fil rouge:{" "}
            <em className="font-display italic text-rouge">la rigueur du detail</em>.
          </p>
        </div>

        <div className="hero-cta col-span-12 md:col-span-4 md:col-start-9 flex md:justify-end items-end">
          <Link
            href="/work"
            className="group relative inline-flex items-center gap-3 border-b border-foreground pb-2 text-[12px] uppercase tracking-[0.18em] font-medium hover:border-rouge hover:text-rouge transition-colors whitespace-nowrap"
          >
            Voir le travail
            <span aria-hidden className="transition-transform group-hover:translate-x-1.5">
              {"\u2192"}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
