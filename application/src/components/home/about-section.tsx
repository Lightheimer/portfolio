"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

/**
 * AboutSection — section éditoriale "À propos" animée avec Motion.
 */
export function AboutSection() {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  const titleLines = [
    { text: "Software engineer." },
    { text: "Né à Lomé.", em: true },
    { text: "Vu plus large." },
  ];

  const paras = [
    "Cinq ans à construire des produits qui survivent au lundi matin. Du backend Laravel au design system, de la stack Spring Boot aux déploiements Vercel. Un seul atelier.",
    "Né au Togo, formé sur les contraintes du terrain ouest-africain : réseau intermittent, mobile money, offline-first. Le détail compte quand l'internet ne suit pas.",
    "Trois projets en ligne, dont une plateforme d'hospitalité urbaine et une suite documentaire pour une institution publique. Tout est conçu pour tenir des années — pas un trimestre.",
    "Aujourd'hui : disponible pour rejoindre une équipe produit ambitieuse, en remote ou avec relocation. Lomé. Paris.",
  ];

  return (
    <section
      id="a-propos"
      aria-label="À propos"
      className="border-t border-hairline scroll-mt-24"
    >
      <div className="mx-auto max-w-350 px-6 sm:px-10 py-24 sm:py-28 md:py-40 grid grid-cols-12 gap-6 md:gap-10">
        <div className="col-span-12 md:col-span-2">
          <motion.p
            className="eyebrow"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
          >
            02 / À propos
          </motion.p>
        </div>

        <div className="col-span-12 md:col-span-7">
          <h2 className="display text-[clamp(2.25rem,7.5vw,5.5rem)]">
            {titleLines.map((line, i) => (
              <span
                key={i}
                className="block overflow-hidden pb-[0.05em] mb-[-0.05em]"
              >
                <motion.span
                  className={`inline-block ${line.em ? "italic text-rouge" : ""}`}
                  style={{
                    willChange: "transform, opacity",
                    fontWeight: line.em ? 500 : 400,
                  }}
                  initial={reduce ? false : { y: "105%", opacity: 0 }}
                  whileInView={{ y: "0%", opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.1, delay: 0.05 + i * 0.1, ease }}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h2>

          <div className="mt-10 sm:mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-6 max-w-3xl">
            {paras.map((p, i) => (
              <motion.p
                key={i}
                className="text-[15px] leading-[1.7] text-foreground/85"
                initial={reduce ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.5 + i * 0.08, ease }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          <motion.div
            className="mt-12 grid sm:grid-cols-2 gap-8 max-w-3xl"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.85, ease }}
          >
            <div>
              <p className="eyebrow mb-3">Stack signature</p>
              <ul className="flex flex-wrap gap-2">
                {[
                  "Laravel",
                  "Spring Boot",
                  "Next.js",
                  "TypeScript",
                  "PostgreSQL",
                  "Supabase",
                  "Prisma",
                  "Tailwind",
                  "Motion",
                ].map((t) => (
                  <li
                    key={t}
                    className="text-[12px] tracking-[0.06em] px-3 py-1.5 border border-hairline hover:border-foreground transition-colors"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-3">Mission visée</p>
              <ul className="space-y-1.5 text-[14px]">
                <li className="flex items-center gap-2">
                  <span className="size-1 rounded-full bg-rouge" />
                  Software / Product engineer
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1 rounded-full bg-rouge" />
                  Startups, agences, scale-ups
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1 rounded-full bg-rouge" />
                  Remote · Lomé · Paris
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <aside className="col-span-12 md:col-span-3 flex flex-col gap-8 md:items-end">
          <motion.div
            className="relative w-full aspect-square max-w-70 flex items-center justify-center bg-ink text-paper overflow-hidden"
            aria-hidden
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, delay: 0.1, ease }}
          >
            <span
              className="font-display italic"
              style={{
                fontSize: "clamp(5rem, 14vw, 9rem)",
                lineHeight: 1,
                letterSpacing: "-0.04em",
              }}
            >
              JK
              <span className="text-rouge">.</span>
            </span>
            <span className="absolute top-3 left-3 text-[9px] tracking-[0.3em] uppercase font-mono text-paper/55">
              Signature
            </span>
            <span className="absolute bottom-3 right-3 text-[9px] tracking-[0.3em] uppercase font-mono text-paper/55 tnum">
              2026
            </span>
          </motion.div>

          <div className="text-sm md:text-right">
            <p className="eyebrow mb-2 flex md:justify-end items-center gap-2">
              <span className="size-1.5 rounded-full bg-rouge" /> Disponible
            </p>
            <p className="leading-relaxed text-foreground/80">
              Pour commission.
              <br />
              Sous 7 jours.
            </p>
            <Link
              href="mailto:lightheimer@gmail.com"
              className="mt-4 inline-flex items-center gap-2 font-display italic text-[18px] border-b border-foreground pb-1 hover:text-rouge hover:border-rouge transition-colors"
            >
              lightheimer@gmail.com
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
