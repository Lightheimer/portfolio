"use client";

/**
 * Reveal de mots : split chaque mot en span, place dans un mask vertical,
 * puis stagger un yPercent: 0 + opacity: 1 en scroll-trigger.
 * Subtil, anti-slop : pas de blur, pas de rotation, juste un slide-up précis.
 */

import { useRef, type ReactNode, type ElementType } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type Props = {
  children: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  /** Délai entre chaque mot (s) */
  stagger?: number;
  /** Durée du reveal d'un mot */
  duration?: number;
  /** Quand déclencher relativement au viewport */
  start?: string;
};

export function RevealText({
  children,
  as: Tag = "span",
  className = "",
  delay = 0,
  stagger = 0.06,
  duration = 1.0,
  start = "top 85%",
}: Props) {
  const rootRef = useRef<HTMLElement>(null);

  // Découpe la string en mots ; \n => <br/>
  const parts = children.split(/(\s+|\n)/);

  useGSAP(
    () => {
      const reduce =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduce || !rootRef.current) {
        gsap.set(rootRef.current?.querySelectorAll<HTMLElement>(".rt-word") ?? [], {
          yPercent: 0,
          autoAlpha: 1,
        });
        return;
      }

      const words = rootRef.current.querySelectorAll<HTMLElement>(".rt-word");

      gsap.set(words, { yPercent: 110, autoAlpha: 0 });

      gsap.to(words, {
        yPercent: 0,
        autoAlpha: 1,
        duration,
        delay,
        stagger,
        ease: "expo.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start,
          once: true,
        },
      });
    },
    { scope: rootRef as React.RefObject<HTMLElement> }
  );

  return (
    <Tag ref={rootRef as never} className={className}>
      {parts.map((p, i) => {
        if (p === "\n") return <br key={`br-${i}`} />;
        if (/^\s+$/.test(p)) return <span key={`s-${i}`}>{p}</span>;
        return (
          <span
            key={`w-${i}`}
            className="rt-word"
            style={{ display: "inline-block", willChange: "transform, opacity" }}
          >
            {p}
          </span>
        );
      })}
    </Tag>
  );
}

/**
 * Version pour les titres display qui ont des <em>...</em> à styler.
 * Utilise children: ReactNode et reveal les ENFANTS top-level (chaque enfant = bloc).
 */
type BlockProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  start?: string;
};

export function RevealBlocks({
  children,
  className = "",
  delay = 0,
  stagger = 0.1,
  start = "top 80%",
}: BlockProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const blocks =
        rootRef.current?.querySelectorAll<HTMLElement>("[data-rt-block]") ?? [];

      if (reduce) {
        gsap.set(blocks, { yPercent: 0, autoAlpha: 1 });
        return;
      }

      gsap.set(blocks, { yPercent: 105, autoAlpha: 0 });
      gsap.to(blocks, {
        yPercent: 0,
        autoAlpha: 1,
        duration: 1.1,
        delay,
        stagger,
        ease: "expo.out",
        scrollTrigger: {
          trigger: rootRef.current,
          start,
          once: true,
        },
      });
    },
    { scope: rootRef as React.RefObject<HTMLElement> }
  );

  return (
    <div ref={rootRef} className={className}>
      {children}
    </div>
  );
}
