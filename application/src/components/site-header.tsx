"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

const NAV = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0.5, 0.92]);
  const blurPx = useTransform(scrollY, [0, 80], [4, 16]);
  const bg = useTransform(bgOpacity, (o) => `rgba(250, 250, 248, ${o})`);
  const filter = useTransform(blurPx, (b) => `blur(${b}px)`);

  return (
    <motion.header
      style={reduce ? undefined : { backgroundColor: bg, backdropFilter: filter }}
      className="sticky top-0 z-40 border-b border-hairline"
    >
      <div className="mx-auto flex max-w-350 items-center justify-between px-6 py-5 sm:px-10">
        <Link
          href="/"
          aria-label="Junior Samuel Koudji, accueil"
          className="font-display text-[19px] tracking-tight leading-none"
        >
          Junior Samuel Koudji
        </Link>

        <nav aria-label="Navigation principale" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="eyebrow hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/contact"
          className="group hidden md:inline-flex items-center gap-2.5 bg-ink text-paper px-5 py-2.5 text-[12px] font-medium tracking-[0.12em] uppercase hover:bg-rouge transition-colors duration-300"
        >
          <span aria-hidden className="size-1.5 rounded-full bg-rouge group-hover:bg-paper transition-colors" />
          Disponible
        </Link>

        <button type="button" aria-label="Menu" className="md:hidden eyebrow">
          Menu
        </button>
      </div>
    </motion.header>
  );
}
