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
      <div className="mx-auto max-w-350 px-6 sm:px-10 py-28 md:py-40 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-2">
          <motion.p
            className="eyebrow"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
          >
            02 / Manifeste
          </motion.p>
        </div>

        <div className="col-span-12 md:col-span-10">
          <h2 className="display text-3xl md:text-5xl lg:text-6xl">
            {lines.map((line, i) => (
              <span
                key={i}
                className="block overflow-hidden pb-[0.05em] mb-[-0.05em]"
              >
                <motion.span
                  className="inline-block"
                  style={{ willChange: "transform, opacity" }}
                  initial={reduce ? false : { y: "105%", opacity: 0 }}
                  whileInView={{ y: "0%", opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.1, delay: 0.15 + i * 0.1, ease }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-3xl">
            <Stat label="Annees" value={5} />
            <Stat label="Projets" value={3} />
            <Stat label="Stack" value={4} suffix="domaines" />
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
}: {
  label: string;
  value: number;
  suffix?: string;
}) {
  return (
    <div>
      <p className="display text-5xl md:text-6xl tnum">
        <AnimatedCounter value={value} pad={2} />
      </p>
      <p className="eyebrow mt-2">
        {label}
        {suffix ? ` / ${suffix}` : ""}
      </p>
    </div>
  );
}
