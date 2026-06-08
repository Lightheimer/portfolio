"use client";

import { motion, useReducedMotion } from "motion/react";

export function Manifesto() {
  const reduce = useReducedMotion();

  const lines = [
    "Construire des produits qui tiennent",
    "des annees, pas un trimestre.",
    "Le code, le design, la performance,",
    "la maintenance: un seul artisan.",
  ];

  return (
    <section
      aria-label="Manifeste"
      className="relative border-y border-hairline bg-paper-soft"
    >
      <div className="mx-auto max-w-350 px-6 sm:px-10 py-28 md:py-40 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-2">
          <p className="eyebrow">02 / Manifeste</p>
        </div>

        <div className="col-span-12 md:col-span-10">
          <h2 className="display text-3xl md:text-5xl lg:text-6xl">
            {lines.map((line, i) => (
              <motion.span
                key={i}
                className="block"
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {line}
              </motion.span>
            ))}
          </h2>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-12 grid md:grid-cols-3 gap-8 max-w-3xl"
          >
            <Stat label="Annees" value="05" />
            <Stat label="Projets" value="03" />
            <Stat label="Stack" value="04" suffix="domaines" />
          </motion.div>
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
  value: string;
  suffix?: string;
}) {
  return (
    <div>
      <p className="display text-5xl md:text-6xl tnum">{value}</p>
      <p className="eyebrow mt-2">
        {label}
        {suffix ? ` / ${suffix}` : ""}
      </p>
    </div>
  );
}
