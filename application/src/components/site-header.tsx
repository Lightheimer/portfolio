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

          <div className="hidden md:flex items-center gap-1.5 lg:gap-2">
            <Link
              href="https://github.com/Lightheimer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Junior Samuel KOUDJI"
              title="GitHub"
              className="size-9 inline-flex items-center justify-center border border-hairline hover:border-foreground hover:text-rouge transition-colors"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.11.79-.25.79-.56v-2c-3.2.69-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.78 2.71 1.27 3.37.97.1-.75.4-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.77.11 3.06.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.79.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
              </svg>
            </Link>
            <Link
              href="mailto:koudjisamson@gmail.com"
              aria-label="Envoyer un e-mail"
              title="E-mail"
              className="size-9 inline-flex items-center justify-center border border-hairline hover:border-foreground hover:text-rouge transition-colors"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden
              >
                <rect x="3" y="5" width="18" height="14" rx="1" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </Link>
          </div>

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
