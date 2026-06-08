"use client";

import { motion, useReducedMotion } from "motion/react";

const CAPABILITIES = [
  {
    title: "Produit",
    body: "Du brief commercial a la mise en production. Architecture, decisions de stack, dette assumee.",
    items: ["Discovery", "Architecture", "Roadmap"],
  },
  {
    title: "Ingenierie",
    body: "Backends Laravel et Spring Boot. Frontends React et Next.js. Bases relationnelles. Tests.",
    items: ["Backend", "Frontend", "DevOps"],
  },
  {
    title: "ICT4D",
    body: "Outils numeriques pour le terrain ouest-africain. Reseau intermittent, mobile money, offline-first.",
    items: ["Mobile money", "Offline-first", "Multilingue"],
  },
  {
    title: "Direction",
    body: "Identite, design system, copy editorial. Le produit doit aussi etre beau pour etre adopte.",
    items: ["Identite", "Design system", "Editorial"],
  },
];

export function CapabilitiesList() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-label="Capacites"
      className="border-y border-hairline bg-paper-soft"
    >
      <div className="mx-auto max-w-350 px-6 sm:px-10 py-28 md:py-40">
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-7">
            <h2 className="display text-5xl md:text-7xl">
              Quatre <em>territoires</em>,
              <br />
              une seule signature.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline">
          {CAPABILITIES.map((cap, i) => (
            <motion.article
              key={cap.title}
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-paper-soft p-8 md:p-10 flex flex-col gap-5 group hover:bg-paper transition-colors duration-500"
            >
              <p className="eyebrow tnum">N. 0{i + 1}</p>
              <h3 className="display text-3xl md:text-4xl">
                {cap.title}
                <span className="text-rouge">.</span>
              </h3>
              <p className="text-[14px] leading-relaxed text-muted">
                {cap.body}
              </p>
              <ul className="mt-auto pt-6 border-t border-hairline space-y-1.5">
                {cap.items.map((item) => (
                  <li
                    key={item}
                    className="text-[13px] text-muted group-hover:text-foreground transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
