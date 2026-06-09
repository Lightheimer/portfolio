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
    body: "Backends Laravel et Node.js. Frontends React et Next.js. Bases relationnelles. Tests.",
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
  const ease = [0.22, 1, 0.36, 1] as const;

  const titleParts: { text: string; em?: boolean }[] = [
    { text: "Quatre" },
    { text: "territoires,", em: true },
    { text: "une" },
    { text: "seule" },
    { text: "signature." },
  ];

  return (
    <section
      id="capacites"
      aria-label="Capacites"
      className="border-y border-hairline bg-paper-soft scroll-mt-24"
    >
      <div className="mx-auto max-w-350 px-6 sm:px-10 py-20 sm:py-28 md:py-40">
        <div className="grid grid-cols-12 gap-6 mb-12 sm:mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-9">
            <motion.h2
              className="display text-4xl sm:text-5xl md:text-7xl leading-[0.96]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: "some" }}
            >
              {titleParts.map((p, i) => (
                <span
                  key={i}
                  className="inline-block overflow-hidden pb-[0.05em] mb-[-0.05em] mr-[0.3em] align-bottom"
                >
                  <motion.span
                    className={`inline-block ${p.em ? "italic" : ""}`}
                    style={{ willChange: "transform, opacity" }}
                    variants={
                      reduce
                        ? undefined
                        : {
                            hidden: { y: "110%", opacity: 0 },
                            visible: { y: "0%", opacity: 1 },
                          }
                    }
                    transition={{ duration: 1.1, delay: i * 0.08, ease }}
                  >
                    {p.text}
                  </motion.span>
                </span>
              ))}
            </motion.h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline">
          {CAPABILITIES.map((cap, i) => (
            <motion.article
              key={cap.title}
              className="bg-paper-soft p-8 md:p-10 flex flex-col gap-5 group hover:bg-paper transition-colors duration-500"
              initial={reduce ? false : { opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 1, delay: i * 0.1, ease }}
            >
              <p className="eyebrow tnum">N. 0{i + 1}</p>
              <h3 className="display text-3xl md:text-4xl">
                {cap.title}
                <span className="text-rouge">.</span>
              </h3>
              <p className="text-[14px] leading-relaxed text-muted">{cap.body}</p>
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
