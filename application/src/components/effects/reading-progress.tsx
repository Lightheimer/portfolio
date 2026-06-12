"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";

/**
 * ReadingProgress — filet de lecture carmin fixe en haut de page.
 * Discret (2px), façon repère de massicot qui avance avec la lecture.
 */
export function ReadingProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-rouge"
      style={{ scaleX }}
    />
  );
}
