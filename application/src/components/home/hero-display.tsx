"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

export function HeroDisplay() {
  const reduce = useReducedMotion();

  const enter = (delay: number) =>
    reduce
      ? { initial: false, animate: { opacity: 1, y: 0 } }
      : {
          initial: { opacity: 0, y: 32 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.9,
            delay,
            ease: [0.16, 1, 0.3, 1] as const,
          },
        };

  return (
    <section
      aria-label="Presentation"
      className="relative mx-auto w-full max-w-350 px-6 sm:px-10 pt-12 sm:pt-20"
    >
      {/* Eyebrow strip top */}
      <motion.div
        {...enter(0)}
        className="grid grid-cols-12 gap-6 pb-8 border-b border-hairline"
      >
        <p className="eyebrow col-span-6 sm:col-span-3">Portfolio. 2026.</p>
        <p className="eyebrow col-span-6 sm:col-span-3 sm:text-center">
          N. 01
        </p>
        <p className="hidden sm:block eyebrow col-span-3 text-center">
          Software engineer
        </p>
        <p className="hidden sm:block eyebrow col-span-3 text-right tnum">
          Lome. Paris.
        </p>
      </motion.div>

      {/* Main display split */}
      <div className="grid grid-cols-12 gap-x-6 gap-y-12 pt-14 sm:pt-24 pb-20 md:pb-32">
        {/* Left: huge editorial display, asymmetric */}
        <motion.div {...enter(0.1)} className="col-span-12 md:col-span-9">
          <h1 className="display text-[clamp(3.25rem,11vw,9.5rem)]">
            Junior Samuel
            <br />
            <em className="block">Koudji,</em>
            <span className="block text-rouge">
              software<br />
              engineer.
            </span>
          </h1>
        </motion.div>

        {/* Right: vertical meta column */}
        <motion.aside
          {...enter(0.25)}
          className="col-span-12 md:col-span-3 md:pt-6 flex flex-col gap-8"
        >
          <div>
            <p className="eyebrow mb-3">Specialites</p>
            <p className="text-[15px] leading-relaxed">
              Laravel.<br />
              Next.js.<br />
              Java Spring.<br />
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
        </motion.aside>

        {/* Lead + CTA row */}
        <motion.div
          {...enter(0.4)}
          className="col-span-12 md:col-span-7 md:col-start-1 mt-4 md:mt-12"
        >
          <p className="lead">
            Six produits qui tiennent debout. Un seul fil rouge:{" "}
            <em className="font-display italic text-rouge">la rigueur du detail</em>.
          </p>
        </motion.div>

        <motion.div
          {...enter(0.55)}
          className="col-span-12 md:col-span-4 md:col-start-9 flex md:justify-end items-end"
        >
          <Link
            href="/work"
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
