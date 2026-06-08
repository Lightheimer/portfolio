"use client";

/**
 * Lien magnétique : suit légèrement la souris dans un rayon de 60px.
 * Utilise gsap.quickTo() = 1 seul tween réutilisé (perf).
 * Désactivé en touch + reduced-motion.
 */

import Link from "next/link";
import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type Props = {
  href: string;
  className?: string;
  children: ReactNode;
  /** Force d'attraction (0-1) */
  strength?: number;
};

export function MagneticLink({
  href,
  className = "",
  children,
  strength = 0.3,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const innerRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      const inner = innerRef.current;
      if (!el || !inner) return;

      const reduce =
        typeof window !== "undefined" &&
        (window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
          window.matchMedia("(hover: none)").matches);
      if (reduce) return;

      const xTo = gsap.quickTo(el, "x", { duration: 0.55, ease: "expo.out" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.55, ease: "expo.out" });
      const ixTo = gsap.quickTo(inner, "x", { duration: 0.7, ease: "expo.out" });
      const iyTo = gsap.quickTo(inner, "y", { duration: 0.7, ease: "expo.out" });

      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        xTo(x * strength);
        yTo(y * strength);
        ixTo(x * strength * 0.5);
        iyTo(y * strength * 0.5);
      };
      const onLeave = () => {
        xTo(0);
        yTo(0);
        ixTo(0);
        iyTo(0);
      };

      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);

      return () => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      };
    },
    { scope: ref as React.RefObject<HTMLElement> }
  );

  return (
    <Link
      ref={ref}
      href={href}
      className={className}
      style={{ willChange: "transform", display: "inline-flex" }}
    >
      <span ref={innerRef} style={{ display: "inline-flex", alignItems: "center", gap: "inherit", willChange: "transform" }}>
        {children}
      </span>
    </Link>
  );
}
