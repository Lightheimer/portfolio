"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

/**
 * Hero éditorial — entrée animée avec Motion.
 * - Eyebrow strip fade-up
 * - Titre display reveal mot-à-mot (mask vertical)
 * - Aside meta colonne droite
 * - Lead + CTA en cascade finale
 * Tout respecte prefers-reduced-motion.
 */
export function HeroDisplay() {
  const reduce = useReducedMotion();

  const titleLines: { text: string; em?: boolean; rouge?: boolean }[] = [
    { text: "Junior" },
    { text: "Samuel" },
    { text: "Koudji,", em: true },
    { text: "software", rouge: true },
    { text: "engineer." },
  ];

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      aria-label="Presentation"
      className="relative mx-auto w-full max-w-350 px-6 sm:px-10 pt-12 sm:pt-20"
    >
      <motion.div
        className="grid grid-cols-12 gap-6 pb-8 border-b border-hairline"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1, ease }}
      >
        <p className="eyebrow col-span-6 sm:col-span-3">Portfolio. 2026.</p>
        <p className="eyebrow col-span-6 sm:col-span-3 sm:text-center">N. 01</p>
        <p className="hidden sm:block eyebrow col-span-3 text-center">
          Software engineer
        </p>
        <p className="hidden sm:block eyebrow col-span-3 text-right tnum">
          Lome. Paris.
        </p>
      </motion.div>

      <div className="grid grid-cols-12 gap-x-6 gap-y-12 pt-14 sm:pt-24 pb-20 md:pb-32">
        <div className="col-span-12 md:col-span-9">
          <h1 className="display text-[clamp(2.5rem,11vw,9.5rem)] leading-[1]">
            {titleLines.map((line, i) => (
              <span
                key={i}
                className="block overflow-hidden pb-[0.05em] mb-[-0.05em]"
              >
                <motion.span
                  className={`inline-block ${line.em ? "italic" : ""} ${line.rouge ? "text-rouge" : ""}`}
                  style={{
                    willChange: "transform, opacity",
                    fontWeight: line.em ? 500 : 400,
                  }}
                  initial={reduce ? false : { y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.2 + i * 0.07,
                    ease,
                  }}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>

        <aside className="col-span-12 md:col-span-3 md:pt-6 flex flex-col gap-8">
          {[
            {
              eyebrow: "Specialites",
              lines: ["Laravel.", "Next.js.", "Java Spring.", "ICT4D."],
            },
            {
              eyebrow: "Mission",
              lines: ["Logiciels", "qui tiennent", "des annees."],
            },
          ].map((block, i) => (
            <motion.div
              key={block.eyebrow}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6 + i * 0.08, ease }}
            >
              <p className="eyebrow mb-3">{block.eyebrow}</p>
              <p className="text-[15px] leading-relaxed">
                {block.lines.map((l, j) => (
                  <span key={j}>
                    {l}
                    {j < block.lines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </motion.div>
          ))}
        </aside>

        <motion.div
          className="col-span-12 md:col-span-7 md:col-start-1 mt-4 md:mt-12"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease }}
        >
          <p className="lead">
            Trois produits qui tiennent debout. Un seul fil rouge:{" "}
            <em className="font-display italic text-rouge">la rigueur du detail</em>.
          </p>
        </motion.div>

        <motion.div
          className="col-span-12 md:col-span-4 md:col-start-9 flex md:justify-end items-end"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.0, ease }}
        >
          <Link
            href="/#work"
            className="group relative inline-flex items-center gap-3 border-b border-foreground pb-2 text-[12px] uppercase tracking-[0.18em] font-medium hover:border-rouge hover:text-rouge transition-colors whitespace-nowrap"
          >
            Voir le travail
            <span aria-hidden className="transition-transform group-hover:translate-x-1.5">
              {"\u2192"}
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
