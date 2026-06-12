"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

/**
 * Hero éditorial : planche d'édition couture.
 * Nom massif en Cormorant sur 8 colonnes, portrait encadré
 * en regard sur 4 colonnes avec folio, méta sous le portrait.
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
      className="relative mx-auto w-full max-w-350 px-6 sm:px-10 pt-12 sm:pt-16"
    >
      {/* Folio */}
      <motion.div
        className="relative grid grid-cols-12 gap-6 pb-6 border-b border-hairline"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1, ease }}
      >
        <span aria-hidden className="crop-mark -top-1 -left-5 hidden lg:block" />
        <span aria-hidden className="crop-mark -top-1 -right-5 hidden lg:block" />
        <p className="eyebrow col-span-6 sm:col-span-3">Portfolio. 2026.</p>
        <p className="eyebrow col-span-6 sm:col-span-3 sm:text-center">Nº I</p>
        <p className="hidden sm:block eyebrow col-span-3 text-center">
          Software engineer
        </p>
        <p className="hidden sm:block eyebrow col-span-3 text-right tnum">
          Lome. Paris.
        </p>
      </motion.div>

      <div className="relative grid grid-cols-12 gap-x-6 gap-y-12 pt-10 sm:pt-16 pb-16 md:pb-28">
        <span aria-hidden className="crop-mark bottom-6 -left-5 hidden lg:block" />
        <span aria-hidden className="crop-mark bottom-6 -right-5 hidden lg:block" />
        {/* Nom massif */}
        <div className="col-span-12 md:col-span-8 flex flex-col justify-between">
          <motion.h1
            className="display text-[clamp(2.75rem,11.5vw,10rem)] leading-[0.95]"
            initial={reduce ? false : "hidden"}
            animate="visible"
          >
            {titleLines.map((line, i) => (
              <span
                key={i}
                className="block overflow-hidden pb-[0.05em] mb-[-0.05em]"
              >
                <motion.span
                  className={`inline-block ${line.em ? "italic" : ""} ${line.rouge ? "text-rouge" : ""}`}
                  style={{ willChange: "transform, opacity" }}
                  variants={
                    reduce
                      ? undefined
                      : {
                          hidden: { y: "110%", opacity: 0 },
                          visible: { y: "0%", opacity: 1 },
                        }
                  }
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
          </motion.h1>

          <div className="mt-12 md:mt-0 max-w-xl">
            <motion.p
              className="lead"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.85, ease }}
            >
              Cinq produits en ligne. Un seul fil conducteur :{" "}
              <em className="font-display italic text-rouge">
                la rigueur du detail
              </em>
              .
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 1.0, ease }}
            >
              <span className="inline-flex border border-rouge/50 text-rouge px-4 py-2 text-[11px] sm:text-[12px] tracking-[0.14em] uppercase font-medium text-center">
                Alternance · Paris · Octobre 2026
              </span>
              <Link
                href="/#work"
                className="group inline-flex items-center gap-3 border-b border-foreground pb-1.5 text-[12px] uppercase tracking-[0.18em] font-medium hover:border-rouge hover:text-rouge transition-colors whitespace-nowrap"
              >
                Voir le travail
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1.5"
                >
                  {"\u2192"}
                </span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Portrait encadré + méta */}
        <div className="col-span-12 md:col-span-4 flex flex-col gap-8">
          <motion.figure
            className="relative"
            initial={
              reduce
                ? false
                : { opacity: 0, clipPath: "inset(100% 0% 0% 0%)" }
            }
            animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1.4, delay: 0.5, ease }}
          >
            <div className="relative aspect-3/4 w-full max-w-sm md:max-w-none overflow-hidden bg-ink">
              <Image
                src="/profile.jpg"
                alt="Portrait Junior Samuel Koudji"
                fill
                priority
                sizes="(min-width: 768px) 30vw, 80vw"
                className="object-cover object-[50%_28%]"
                style={{
                  filter: "grayscale(100%) contrast(1.06) brightness(0.95)",
                }}
              />
              <span
                aria-hidden
                className="absolute inset-0 bg-linear-to-t from-ink/35 via-transparent to-transparent"
              />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between border-b border-hairline pb-3">
              <span className="eyebrow text-[9px]">Portrait</span>
              <span className="eyebrow text-[9px] tnum">JK / 2026</span>
            </figcaption>
          </motion.figure>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-8">
            {[
              {
                eyebrow: "Specialites",
                lines: ["Laravel.", "Next.js.", "Node.js.", "Shopify."],
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
                transition={{ duration: 0.9, delay: 0.7 + i * 0.08, ease }}
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
          </div>
        </div>
      </div>
    </section>
  );
}
