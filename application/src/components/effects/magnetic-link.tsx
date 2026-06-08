"use client";

/**
 * Lien magnétique : suit légèrement la souris.
 * Vanilla — pas de GSAP. Désactivé en touch + reduced-motion.
 */

import Link from "next/link";
import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  href: string;
  className?: string;
  children: ReactNode;
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

  useEffect(() => {
    const el = ref.current;
    const inner = innerRef.current;
    if (!el || !inner) return;

    const reduce =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(hover: none)").matches;
    if (reduce) return;

    let raf = 0;
    let tx = 0,
      ty = 0,
      cx = 0,
      cy = 0,
      ix = 0,
      iy = 0,
      icx = 0,
      icy = 0;

    const animate = () => {
      cx += (tx - cx) * 0.15;
      cy += (ty - cy) * 0.15;
      icx += (ix - icx) * 0.18;
      icy += (iy - icy) * 0.18;
      el.style.transform = `translate3d(${cx.toFixed(2)}px, ${cy.toFixed(2)}px, 0)`;
      inner.style.transform = `translate3d(${icx.toFixed(2)}px, ${icy.toFixed(2)}px, 0)`;
      raf = requestAnimationFrame(animate);
    };

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      tx = x * strength;
      ty = y * strength;
      ix = x * strength * 0.5;
      iy = y * strength * 0.5;
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
      ix = 0;
      iy = 0;
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return (
    <Link
      ref={ref}
      href={href}
      className={className}
      style={{ willChange: "transform", display: "inline-flex" }}
    >
      <span ref={innerRef} className="inline-flex items-center gap-3">
        {children}
      </span>
    </Link>
  );
}
