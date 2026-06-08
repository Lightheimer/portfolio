"use client";

import { type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { GfaPanel } from "@/components/home/gfa-panel";

type Project = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  context: string;
  year: string;
  stack: string;
  image?: string;
  alt?: string;
  render?: ReactNode;
  span: "feature" | "half";
};

const PROJECTS: Project[] = [
  {
    slug: "https://github.com/Lightheimer",
    index: "01",
    title: "PIKARRE Apart",
    subtitle: "Location premium d'appartements",
    context: "Marque d'hospitalite urbaine, Lome",
    year: "2025",
    stack: "Laravel . Livewire . SQLite",
    image: "/work/pikarre.jpg",
    alt: "Hero PIKARRE Apart, location premium a Lome",
    span: "feature",
  },
  {
    slug: "https://github.com/Lightheimer/GFA-PROJECT",
    index: "02",
    title: "GFA",
    subtitle: "Gestion de flux . Assemblee nationale",
    context: "Institution publique, suivi documentaire",
    year: "2024",
    stack: "Laravel . Spring Boot . PostgreSQL",
    render: <GfaPanel />,
    span: "half",
  },
  {
    slug: "https://github.com/Lightheimer",
    index: "03",
    title: "CBC",
    subtitle: "Catholic Basketball Club . Lome",
    context: "Identite, app club, comptabilite",
    year: "2026",
    stack: "Next.js 16 . Supabase . Prisma 7",
    image: "/work/cbc.jpg",
    alt: "Accueil CBC, street basketball club a Lome",
    span: "half",
  },
];

export function SelectedWork() {
  return (
    <section
      id="work"
      aria-label="Travail selectionne"
      className="mx-auto max-w-350 px-6 sm:px-10 py-24 sm:py-28 md:py-40 scroll-mt-24"
    >
      <header className="mb-14 sm:mb-16 md:mb-24 grid grid-cols-12 gap-6 items-end">
        <div className="col-span-12 md:col-span-8">
          <p className="eyebrow mb-5">03 / Selection</p>
          <h2 className="display text-[clamp(2.5rem,9vw,6.5rem)]">
            Une selection.
            <br />
            <em>Un seul atelier.</em>
          </h2>
        </div>
        <div className="hidden md:flex col-span-4 justify-end items-end pb-2">
          <Link
            href="https://github.com/Lightheimer"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.18em] font-medium border-b border-foreground pb-1 hover:text-rouge hover:border-rouge transition-colors"
          >
            Voir sur GitHub
            <span aria-hidden className="transition-transform group-hover:translate-x-1.5">
              {"\u2192"}
            </span>
          </Link>
        </div>
      </header>

      <FeatureCard project={PROJECTS[0]} index={0} />

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-20">
        {PROJECTS.slice(1).map((p, i) => (
          <HalfCard key={p.slug + p.title} project={p} index={i + 1} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;
  const external = project.slug.startsWith("http");
  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1.1, delay: index * 0.12, ease }}
    >
      <Link
        href={project.slug}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="group block"
      >
        <div
          className="relative aspect-16/10 w-full overflow-hidden bg-bone"
          style={{ containerType: "size" }}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.alt ?? project.title}
              fill
              sizes="(min-width: 1024px) 1400px, 100vw"
              className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-[1.06]"
              priority
            />
          ) : (
            <div className="absolute inset-0">{project.render}</div>
          )}
          <span className="absolute top-5 left-5 z-10 px-3 py-1 bg-paper text-foreground text-[11px] tracking-[0.18em] uppercase">
            Feature
          </span>

          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          >
            <span
              className="font-display italic select-none"
              style={{
                fontSize: "clamp(4rem, 14vw, 11rem)",
                color: "rgba(250,250,248,0.92)",
                mixBlendMode: "difference",
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}
            >
              {project.title}
            </span>
          </span>
        </div>

        <div className="mt-6 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2">
            <p className="eyebrow tnum">N. {project.index}</p>
          </div>
          <div className="col-span-12 md:col-span-7">
            <h3 className="display text-2xl sm:text-3xl md:text-5xl">
              {project.title}.{" "}
              <em className="text-foreground/60">{project.subtitle}</em>
            </h3>
          </div>
          <div className="col-span-12 md:col-span-3 md:text-right">
            <p className="text-[13px] leading-relaxed text-muted">
              {project.context}
              <br />
              <span className="tnum">{project.year}</span>
              <br />
              {project.stack}
            </p>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

function HalfCard({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;
  const external = project.slug.startsWith("http");
  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1.1, delay: index * 0.12, ease }}
    >
      <Link
        href={project.slug}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="group block"
      >
        <div
          className="relative aspect-4/5 w-full overflow-hidden bg-bone"
          style={{ containerType: "size" }}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.alt ?? project.title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-[1.06]"
              loading="eager"
            />
          ) : (
            <div className="absolute inset-0">{project.render}</div>
          )}

          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          >
            <span
              className="font-display italic select-none"
              style={{
                fontSize: "clamp(3rem, 18cqw, 8rem)",
                color: "rgba(250,250,248,0.95)",
                mixBlendMode: "difference",
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}
            >
              {project.title}
            </span>
          </span>
        </div>

        <div className="mt-5 flex items-baseline justify-between gap-4">
          <div className="min-w-0">
            <p className="eyebrow tnum mb-2">N. {project.index}</p>
            <h3 className="display text-2xl md:text-3xl">{project.title}</h3>
            <p className="font-display italic text-foreground/60 text-base md:text-lg mt-1">
              {project.subtitle}
            </p>
          </div>
          <span
            aria-hidden
            className="shrink-0 text-[12px] uppercase tracking-[0.18em] font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-rouge"
          >
            {"\u2192"}
          </span>
        </div>
        <p className="text-[13px] text-muted mt-2 tnum">
          {project.year}. {project.stack}.
        </p>
      </Link>
    </motion.article>
  );
}
