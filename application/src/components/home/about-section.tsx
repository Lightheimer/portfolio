"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

/**
 * AboutSection — section éditoriale "À propos" animée avec Motion.
 */
export function AboutSection() {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  const titleLines = [
    { text: "Software engineer." },
    { text: "Ne a Lome." },
    { text: "Vu plus large.", em: true },
  ];

  const paras = [
    "Trois ans a construire des produits qui survivent au lundi matin. Du stage en entreprise publique a l'UNICEF Togo, du backend Laravel au design system \u2014 chaque projet m'a forme sur le terrain.",
    "Ne au Togo, forme sur les contraintes du terrain ouest-africain : reseau intermittent, mobile money, offline-first. Le detail compte quand l'internet ne suit pas.",
    "Trois produits en ligne (PIKARRE Apart, Vanelys, CBC en finition), une plateforme institutionnelle livree pour l'Assemblee Nationale Togolaise pendant le stage UNICEF, plus une boutique POS en demo. Tout est concu pour tenir des annees \u2014 pas un trimestre.",
    "Aujourd'hui : disponible a Paris des octobre 2026 pour rejoindre une equipe produit ambitieuse en alternance. Lome. Paris.",
  ];

  return (
    <section
      id="a-propos"
      aria-label="À propos"
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
            V — À propos
          </motion.p>
        </div>

        <div className="col-span-12 md:col-span-7">
          <motion.h2
            className="display text-[clamp(2.25rem,7.5vw,5.5rem)]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: "some" }}
          >
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
                  variants={
                    reduce
                      ? undefined
                      : {
                          hidden: { y: "105%", opacity: 0 },
                          visible: { y: "0%", opacity: 1 },
                        }
                  }
                  transition={{ duration: 1.1, delay: 0.05 + i * 0.1, ease }}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </motion.h2>

          {/* Mobile-only portrait, just under the title */}
          <motion.div
            className="mt-8 md:hidden relative w-full aspect-4/5 max-w-72 overflow-hidden bg-ink"
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 1.2, delay: 0.1, ease }}
          >
            <Image
              src="/profile.jpg"
              alt="Portrait Junior Samuel Koudji"
              fill
              sizes="(min-width: 768px) 288px, 60vw"
              className="object-cover object-center"
              style={{ filter: "grayscale(100%) contrast(1.05) brightness(0.95)" }}
            />
            <span
              aria-hidden
              className="absolute inset-0 bg-linear-to-t from-ink/40 via-transparent to-transparent"
            />
            <span className="absolute top-3 left-3 text-[9px] tracking-[0.3em] uppercase font-mono text-paper/70">
              Portrait
            </span>
            <span className="absolute bottom-3 right-3 text-[9px] tracking-[0.3em] uppercase font-mono text-paper/70 tnum">
              JK / 2026
            </span>
          </motion.div>

          <div className="mt-10 sm:mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-6 max-w-3xl">
            {paras.map((p, i) => (
              <motion.p
                key={i}
                className="text-[15px] leading-[1.7] text-foreground/85"
                initial={reduce ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: "some" }}
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
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 0.7, delay: 0.85, ease }}
          >
            <div>
              <p className="eyebrow mb-3">Stack signature</p>
              <ul className="flex flex-wrap gap-2">
                {[
                  "Laravel",
                  "PHP",
                  "Next.js",
                  "React",
                  "Node.js",
                  "TypeScript",
                  "PostgreSQL",
                  "MySQL",
                  "Supabase",
                  "Prisma",
                  "Tailwind",
                  "Shopify",
                  "REST APIs",
                  "Server Actions",
                  "Offline-first",
                  "PWA",
                  "Git",
                  "Vercel",
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
            className="hidden md:block relative w-full aspect-4/5 max-w-72 overflow-hidden bg-ink"
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 1.4, delay: 0.1, ease }}
          >
            <Image
              src="/profile.jpg"
              alt="Portrait Junior Samuel Koudji"
              fill
              sizes="(min-width: 768px) 288px, 60vw"
              className="object-cover object-center"
              style={{ filter: "grayscale(100%) contrast(1.05) brightness(0.95)" }}
            />
            <span
              aria-hidden
              className="absolute inset-0 bg-linear-to-t from-ink/40 via-transparent to-transparent"
            />
            <span className="absolute top-3 left-3 text-[9px] tracking-[0.3em] uppercase font-mono text-paper/70">
              Portrait
            </span>
            <span className="absolute bottom-3 right-3 text-[9px] tracking-[0.3em] uppercase font-mono text-paper/70 tnum">
              JK / 2026
            </span>
          </motion.div>

          <div className="text-sm md:text-right">
            <p className="eyebrow mb-2 flex md:justify-end items-center gap-2">
              <span className="size-1.5 rounded-full bg-rouge" /> Disponible
            </p>
            <p className="leading-relaxed text-foreground/80">
              Paris des octobre 2026.
              <br />
              En recherche d&apos;alternance — Master
              <br />
              Developpeur Fullstack.
              <br />
              Freelance : delai selon dispo.
            </p>
            <Link
              href="mailto:koudjisamson@gmail.com"
              className="mt-4 inline-flex items-center gap-2 font-display italic text-[18px] border-b border-foreground pb-1 hover:text-rouge hover:border-rouge transition-colors"
            >
              koudjisamson@gmail.com
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
