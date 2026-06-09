"use client";

/**
 * Compteur animé : tween 0 → value sur viewport enter.
 * Implémentation vanilla (rAF) — pas de dépendance externe.
 */

import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  pad?: number;
  className?: string;
  duration?: number;
  trailing?: string;
};

export function AnimatedCounter({
  value,
  pad = 2,
  className = "",
  duration = 1600,
  trailing,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setCurrent(value);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            setStarted(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, started]);

  useEffect(() => {
    if (!started) return;
    let raf = 0;
    const start = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 4); // expo-out
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setCurrent(Math.round(ease(p) * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, value, duration]);

  return (
    <span ref={ref} className={className}>
      {String(current).padStart(pad, "0")}
      {trailing ? <span className="text-rouge">{trailing}</span> : null}
    </span>
  );
}
