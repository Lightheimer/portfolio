"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * ExperienceSection — parcours pro éditorial.
 * Timeline verticale, ligne médiane fine, 4 entrées.
 * Animations Motion safe mobile (amount: "some" pour iOS Safari).
 */

type Entry = {
  index: string;
  period: string;
  duration: string;
  role: string;
  company: string;
  context: string;
  body: string;
  tags: string[];
};

const ENTRIES: Entry[] = [
  {
    index: "01",
    period: "2023 → Present",
    duration: "3 ans",
    role: "Developpeur Fullstack & Shopify Expert",
    company: "Freelance",
    context: "Togo & international",
    body:
      "Developpement de sites web et boutiques Shopify pour clients au Togo et a l'international. Specialite : e-commerce, plateformes metier et offline-first.",
    tags: ["Laravel", "Shopify", "Next.js", "PostgreSQL"],
  },
  {
    index: "02",
    period: "2025",
    duration: "5 mois",
    role: "Developpeur ICT4D — Stagiaire",
    company: "UNICEF Togo",
    context: "Lome",
    body:
      "Conception et developpement d'une plateforme hospitaliere de suivi des operations terrain. Projet de fin de cycle soutenu devant jury et note 18/20. Demo locale, non deploye en production.",
    tags: ["Laravel", "PostgreSQL", "Offline-first", "Soutenance 18/20"],
  },
  {
    index: "03",
    period: "2025",
    duration: "3 mois",
    role: "Developpeur Fullstack — Stagiaire",
    company: "ATANYS / CAMEG",
    context: "Lome",
    body:
      "Developpement d'une plateforme web de gestion des commandes medicales pour la Centrale d'Achat des Medicaments Essentiels Generiques du Togo.",
    tags: ["Laravel", "Livewire", "MySQL", "PostgreSQL"],
  },
  {
    index: "04",
    period: "2024",
    duration: "2 mois",
    role: "Developpeur Web — Stagiaire",
    company: "CEET",
    context: "Compagnie Energie Electrique du Togo",
    body:
      "Stage au departement informatique. Developpement d'une plateforme web de gestion interne. Architecture MVC avec Laravel et MySQL.",
    tags: ["Laravel", "MySQL", "MVC"],
  },
];

export function ExperienceSection() {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  const titleLines = [
    { text: "Trois ans" },
    { text: "sur le terrain.", em: true },
  ];

  return (
    <section
      id="parcours"
      aria-label="Parcours professionnel"
      className="border-t border-hairline scroll-mt-24"
    >
      <div className="mx-auto max-w-350 px-6 sm:px-10 py-20 sm:py-28 md:py-40 grid grid-cols-12 gap-6 md:gap-10">
        <div className="col-span-12 md:col-span-2">
          <motion.p
            className="eyebrow"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 0.7, ease }}
          >
            03 / Parcours
          </motion.p>
        </div>

        <div className="col-span-12 md:col-span-10">
          <h2 className="display text-[clamp(2.25rem,7vw,5rem)] leading-[1.02]">
            {titleLines.map((line, i) => (
              <motion.span
                key={i}
                className={`block ${line.em ? "italic text-rouge" : ""}`}
                style={{ willChange: "transform, opacity" }}
                initial={reduce ? false : { y: 28, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ duration: 0.95, delay: 0.05 + i * 0.12, ease }}
              >
                {line.text}
              </motion.span>
            ))}
          </h2>

          <ol className="mt-12 sm:mt-16 md:mt-20 relative">
            {/* Vertical rule */}
            <span
              aria-hidden
              className="absolute left-0 md:left-[12%] top-2 bottom-2 w-px bg-hairline"
            />
            {ENTRIES.map((e, i) => (
              <motion.li
                key={e.index}
                className="relative pl-8 md:pl-[16%] pb-12 md:pb-16 last:pb-0"
                initial={reduce ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ duration: 0.8, delay: i * 0.08, ease }}
              >
                {/* Marker */}
                <span
                  aria-hidden
                  className="absolute -left-0.75 md:left-[calc(12%-3px)] top-2 size-1.5 rounded-full bg-rouge ring-4 ring-paper"
                />

                <div className="grid grid-cols-12 gap-4 md:gap-8 items-baseline">
                  <div className="col-span-12 md:col-span-3">
                    <p className="eyebrow tnum">
                      N. {e.index} / {e.period}
                    </p>
                    <p className="text-[12px] text-muted mt-1 tnum">
                      {e.duration}
                    </p>
                  </div>

                  <div className="col-span-12 md:col-span-9">
                    <h3 className="display text-2xl md:text-3xl">
                      {e.company}
                      <span className="text-rouge">.</span>
                    </h3>
                    <p className="font-display italic text-foreground/65 text-base md:text-lg mt-1">
                      {e.role}
                    </p>
                    <p className="text-[12px] text-muted mt-1 uppercase tracking-[0.12em]">
                      {e.context}
                    </p>

                    <p className="text-[14.5px] leading-[1.7] text-foreground/85 mt-5 max-w-2xl">
                      {e.body}
                    </p>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {e.tags.map((t) => (
                        <li
                          key={t}
                          className="text-[11px] tracking-[0.06em] px-2.5 py-1 border border-hairline text-foreground/75"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
