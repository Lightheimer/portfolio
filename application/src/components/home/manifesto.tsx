"use client";

import { motion, useReducedMotion } from "motion/react";
import { AnimatedCounter } from "@/components/effects/animated-counter";

/**
 * Manifesto — entrée animée avec Motion + viewport trigger.
 */
export function Manifesto() {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  const lines = [
    "Construire des produits qui tiennent",
    "des annees, pas un trimestre.",
    "Le code, le design, la performance,",
    "la maintenance: un seul artisan.",
  ];

  return (
    <section
      id="manifeste"
      aria-label="Manifeste"
      className="relative border-y border-hairline bg-paper-soft scroll-mt-24"
    >
      <div className="mx-auto max-w-350 px-6 sm:px-10 py-16 sm:py-24 md:py-40 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-2">
          <motion.p
            className="eyebrow"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 0.8, ease }}
          >
            II — Manifeste
          </motion.p>
        </div>

        <div className="col-span-12 md:col-span-10">
          <motion.h2
            className="display text-3xl md:text-5xl lg:text-6xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: "some" }}
          >
            {lines.map((line, i) => (
              <span
                key={i}
                className="block overflow-hidden pb-[0.05em] mb-[-0.05em]"
              >
                <motion.span
                  className="inline-block"
                  style={{ willChange: "transform, opacity" }}
                  variants={
                    reduce
                      ? undefined
                      : {
                          hidden: { y: "105%", opacity: 0 },
                          visible: { y: "0%", opacity: 1 },
                        }
                  }
                  transition={{ duration: 1.1, delay: 0.15 + i * 0.1, ease }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </motion.h2>

          <div className="mt-10 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl">
            <Stat label="Annees" value={3} trailing="+" />
            <Stat label="Projets" value={6} />
            <Stat label="Stack" value={10} trailing="+" suffix="domaines" />
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
  trailing,
}: {
  label: string;
  value: number;
  suffix?: string;
  trailing?: string;
}) {
  return (
    <div>
      <p className="display text-4xl sm:text-5xl md:text-6xl tnum">
        <AnimatedCounter value={value} pad={2} trailing={trailing} />
      </p>
      <p className="eyebrow mt-2">
        {label}
        {suffix ? ` / ${suffix}` : ""}
      </p>
    </div>
  );
}
