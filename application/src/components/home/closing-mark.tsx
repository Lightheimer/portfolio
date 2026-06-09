"use client";

import { motion, useReducedMotion } from "motion/react";
import { MagneticLink } from "@/components/effects/magnetic-link";

/**
 * Closing — titre reveal word-by-word + CTA magnétique, via Motion.
 */
export function ClosingMark() {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  const parts: { text: string; em?: boolean; br?: boolean }[] = [
    { text: "Pour" },
    { text: "ceux" },
    { text: "qui", br: true },
    { text: "voient", em: true },
    { text: "le" },
    { text: "detail." },
  ];

  return (
    <section
      id="contact"
      className="border-t border-hairline scroll-mt-24"
    >
      <div className="mx-auto max-w-350 px-6 sm:px-10 py-20 sm:py-28 md:py-32 grid md:grid-cols-12 gap-10 items-end">
        <motion.p
          className="md:col-span-7 display text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.96]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: "some" }}
        >
          {parts.map((p, i) => (
            <span key={i}>
              <span className="inline-block overflow-hidden pb-[0.05em] mb-[-0.05em] mr-[0.25em] align-bottom">
                <motion.span
                  className={`inline-block ${p.em ? "italic" : ""}`}
                  style={{ willChange: "transform, opacity", fontWeight: p.em ? 500 : 400 }}
                  variants={
                    reduce
                      ? undefined
                      : {
                          hidden: { y: "110%", opacity: 0 },
                          visible: { y: "0%", opacity: 1 },
                        }
                  }
                  transition={{ duration: 1.15, delay: i * 0.09, ease }}
                >
                  {p.text}
                </motion.span>
              </span>
              {p.br ? <br /> : null}
            </span>
          ))}
        </motion.p>
        <motion.div
          className="md:col-span-4 md:col-start-9 flex md:justify-end"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.9, delay: 0.5, ease }}
        >
          <MagneticLink
            href="mailto:koudjisamson@gmail.com"
            strength={0.35}
            className="group items-center gap-3 bg-ink text-paper px-8 py-5 hover:bg-rouge transition-colors duration-300 whitespace-nowrap"
          >
            <span className="text-[12px] tracking-[0.18em] uppercase font-medium">
              Echangeons
            </span>
            <span aria-hidden className="transition-transform group-hover:translate-x-1.5">
              {"\u2192"}
            </span>
          </MagneticLink>
        </motion.div>
      </div>
    </section>
  );
}
