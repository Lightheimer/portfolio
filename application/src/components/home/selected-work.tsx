"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

type Project = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  context: string;
  year: string;
  stack: string;
  image: string;
  alt: string;
  span: "feature" | "half";
};

const PROJECTS: Project[] = [
  {
    slug: "/work/pikarre",
    index: "01",
    title: "PIKARRE",
    subtitle: "Plateforme e-commerce sur-mesure",
    context: "Marque togolaise de pret-a-porter",
    year: "2025",
    stack: "Laravel . Livewire . Stripe",
    image: "https://picsum.photos/seed/pikarre-fashion-textile/1600/1100",
    alt: "Etoffes textile, palette terre",
    span: "feature",
  },
  {
    slug: "/work/gfa",
    index: "02",
    title: "GFA",
    subtitle: "Suite de gestion documentaire",
    context: "Gestion administrative continentale",
    year: "2024",
    stack: "Spring Boot . PostgreSQL",
    image: "https://picsum.photos/seed/gfa-doc-archives-paper/1200/1500",
    alt: "Archives documentaires, ton ivoire",
    span: "half",
  },
  {
    slug: "/work/cbc",
    index: "03",
    title: "CBC",
    subtitle: "Catholic Basketball Club. Lome.",
    context: "Identite, app club, comptabilite",
    year: "2026",
    stack: "Next.js 16 . Supabase . Prisma",
    image: "https://picsum.photos/seed/cbc-basketball-court-night/1200/1500",
    alt: "Terrain de basket nocturne",
    span: "half",
  },
];

export function SelectedWork() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-label="Travail selectionne"
      className="mx-auto max-w-350 px-6 sm:px-10 py-28 md:py-40"
    >
      <header className="mb-16 md:mb-24 grid grid-cols-12 gap-6 items-end">
        <div className="col-span-12 md:col-span-8">
          <p className="eyebrow mb-5">03 / Selection</p>
          <h2 className="display text-5xl md:text-7xl lg:text-8xl">
            Une selection.
            <br />
            <em>Un seul atelier.</em>
          </h2>
        </div>
        <div className="hidden md:flex col-span-4 justify-end items-end pb-2">
          <Link
            href="/work"
            className="group inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.18em] font-medium border-b border-foreground pb-1 hover:text-rouge hover:border-rouge transition-colors"
          >
            Index complet
            <span aria-hidden className="transition-transform group-hover:translate-x-1.5">
              {"\u2192"}
            </span>
          </Link>
        </div>
      </header>

      {/* Feature project — full bleed */}
      <FeatureCard project={PROJECTS[0]} reduce={!!reduce} />

      {/* 2-up grid for projects 2 & 3 */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-12 md:mt-20">
        {PROJECTS.slice(1).map((p, i) => (
          <HalfCard key={p.slug} project={p} delay={i * 0.1} reduce={!!reduce} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ project, reduce }: { project: Project; reduce: boolean }) {
  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={project.slug} className="group block">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-bone">
          <Image
            src={project.image}
            alt={project.alt}
            fill
            sizes="(min-width: 1024px) 1400px, 100vw"
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
            priority
          />
          <span className="absolute top-5 left-5 px-3 py-1 bg-paper text-foreground text-[11px] tracking-[0.18em] uppercase">
            Feature
          </span>
        </div>

        <div className="mt-6 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2">
            <p className="eyebrow tnum">N. {project.index}</p>
          </div>
          <div className="col-span-12 md:col-span-7">
            <h3 className="display text-3xl md:text-5xl">
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

function HalfCard({
  project,
  delay,
  reduce,
}: {
  project: Project;
  delay: number;
  reduce: boolean;
}) {
  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={project.slug} className="group block">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-bone">
          <Image
            src={project.image}
            alt={project.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
          />
        </div>

        <div className="mt-5 flex items-baseline justify-between gap-4">
          <div>
            <p className="eyebrow tnum mb-2">N. {project.index}</p>
            <h3 className="display text-2xl md:text-3xl">{project.title}</h3>
            <p className="font-display italic text-foreground/60 text-lg mt-1">
              {project.subtitle}
            </p>
          </div>
          <span
            aria-hidden
            className="text-[12px] uppercase tracking-[0.18em] font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-rouge"
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
