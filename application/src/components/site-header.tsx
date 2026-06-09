"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";

const NAV = [
  { href: "/#work", label: "Travail" },
  { href: "/#capacites", label: "Capacites" },
  { href: "/#a-propos", label: "A propos" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0.5, 0.92]);
  const blurPx = useTransform(scrollY, [0, 80], [4, 16]);
  const bg = useTransform(bgOpacity, (o) => `rgba(250, 250, 248, ${o})`);
  const filter = useTransform(blurPx, (b) => `blur(${b}px)`);

  const [open, setOpen] = useState(false);

  // Lock scroll when drawer is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Escape closes drawer
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <motion.header
        style={reduce ? undefined : { backgroundColor: bg, backdropFilter: filter }}
        className="sticky top-0 z-40 border-b border-hairline"
      >
        <div className="mx-auto flex max-w-350 items-center justify-between px-6 py-5 sm:px-10">
          <Link
            href="/"
            aria-label="Junior Samuel Koudji, accueil"
            className="font-display tracking-tight leading-none"
            onClick={() => setOpen(false)}
          >
            <span className="hidden lg:inline text-[17px] sm:text-[19px]">Junior Samuel Koudji</span>
            <span className="lg:hidden text-[17px] sm:text-[19px]">J.&thinsp;Samuel Koudji</span>
          </Link>

          <nav aria-label="Navigation principale" className="hidden md:block">
            <ul className="flex items-center gap-6 lg:gap-9">
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
            href="/#contact"
            className="group hidden md:inline-flex items-center gap-2.5 bg-ink text-paper px-4 lg:px-5 py-2.5 text-[11px] lg:text-[12px] font-medium tracking-[0.12em] uppercase hover:bg-rouge transition-colors duration-300"
          >
            <span
              aria-hidden
              className="size-1.5 rounded-full bg-rouge group-hover:bg-paper transition-colors"
            />
            <span className="hidden lg:inline">Echangeons</span>
            <span className="lg:hidden">Contact</span>
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
              {"\u2192"}
            </span>
          </Link>

          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden relative size-10 -mr-2 flex items-center justify-center"
          >
            <span className="sr-only">Menu</span>
            <span
              aria-hidden
              className={`absolute h-[1.5px] w-6 bg-foreground transition-transform duration-300 ${
                open ? "translate-y-0 rotate-45" : "-translate-y-[5px]"
              }`}
            />
            <span
              aria-hidden
              className={`absolute h-[1.5px] w-6 bg-foreground transition-transform duration-300 ${
                open ? "translate-y-0 -rotate-45" : "translate-y-[5px]"
              }`}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Menu mobile"
            initial={reduce ? undefined : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-0 z-50 bg-paper"
          >
            <div className="absolute inset-0 flex flex-col">
              {/* Top bar inside drawer */}
              <div className="flex items-center justify-between px-6 py-5">
                <span className="font-display text-[17px] tracking-tight">
                  Junior Samuel Koudji
                </span>
                <button
                  type="button"
                  aria-label="Fermer le menu"
                  onClick={() => setOpen(false)}
                  className="relative size-10 -mr-2 flex items-center justify-center"
                >
                  <span
                    aria-hidden
                    className="absolute h-[1.5px] w-6 bg-foreground rotate-45"
                  />
                  <span
                    aria-hidden
                    className="absolute h-[1.5px] w-6 bg-foreground -rotate-45"
                  />
                </button>
              </div>

              <div className="border-t border-hairline" />

              {/* Nav giant */}
              <nav
                aria-label="Navigation principale mobile"
                className="flex-1 overflow-y-auto px-6 py-10"
              >
                <ul className="flex flex-col gap-2">
                  {NAV.map((item, i) => (
                    <motion.li
                      key={item.href}
                      initial={reduce ? undefined : { opacity: 0, y: 14 }}
                      animate={reduce ? undefined : { opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.1 + i * 0.06,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="group block py-3 border-b border-hairline display text-4xl"
                      >
                        <span className="inline-flex items-baseline gap-3">
                          <span className="eyebrow tnum opacity-60 text-[10px] mt-1">
                            0{i + 1}
                          </span>
                          <span className="group-hover:text-rouge transition-colors">
                            {item.label}
                          </span>
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-12 grid grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="eyebrow mb-2">Bureau</p>
                    <p>Lome. Paris.</p>
                  </div>
                  <div>
                    <p className="eyebrow mb-2">Email</p>
                    <Link
                      href="mailto:koudjisamson@gmail.com"
                      className="underline underline-offset-4 hover:text-rouge"
                    >
                      koudjisamson@gmail.com
                    </Link>
                  </div>
                </div>
              </nav>

              <div className="px-6 py-6 border-t border-hairline flex items-center justify-between">
                <span className="eyebrow flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-rouge" />
                  Disponible
                </span>
                <Link
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="bg-ink text-paper px-5 py-3 text-[12px] tracking-[0.18em] uppercase hover:bg-rouge transition-colors"
                >
                  Echangeons
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
