"use client";

/**
 * ScrollHint — petite ligne verticale animée + label en bas du hero.
 * Disparaît après le 1er scroll. Caché pour reduced-motion.
 */
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

export function ScrollHint() {
  const reduce = useReducedMotion();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 40) setHidden(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.5, delay: hidden ? 0 : 1.4 }}
      className="pointer-events-none fixed bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3"
    >
      <span className="eyebrow text-[9px] tracking-[0.36em]">Scroll</span>
      <span className="relative block h-12 w-px bg-foreground/20 overflow-hidden">
        <motion.span
          className="absolute left-0 right-0 top-0 h-1/3 bg-rouge"
          animate={{ y: ["-110%", "330%"] }}
          transition={{
            duration: 1.8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.4,
          }}
        />
      </span>
    </motion.div>
  );
}
