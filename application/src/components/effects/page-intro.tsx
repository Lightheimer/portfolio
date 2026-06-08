"use client";

/**
 * PageIntro — rideau noir 1.4s, nom centré qui se révèle puis se retire vers le haut.
 * Affiché uniquement à la première visite par session (sessionStorage).
 * Respecte prefers-reduced-motion.
 */

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

export function PageIntro() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduce) return;
    try {
      if (sessionStorage.getItem("jsk-intro-played") === "1") return;
      sessionStorage.setItem("jsk-intro-played", "1");
    } catch {
      /* private mode etc. */
    }
    setVisible(true);
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 1900);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, [reduce]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          aria-hidden
          className="fixed inset-0 z-[60] bg-ink text-paper flex items-center justify-center overflow-hidden pointer-events-none"
          initial={{ y: 0 }}
          exit={{ y: "-101%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        >
          {/* fine red line traveling across */}
          <motion.span
            className="absolute left-0 right-0 top-1/2 h-px bg-rouge origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          />

          <motion.div
            className="relative flex items-center gap-6 px-8"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          >
            <span
              aria-hidden
              className="size-2 rounded-full bg-rouge"
            />
            <span
              className="font-display tracking-tight text-[clamp(1.5rem,4vw,2.5rem)]"
              style={{ letterSpacing: "-0.02em" }}
            >
              Junior Samuel Koudji
              <span className="text-rouge italic">.</span>
            </span>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
