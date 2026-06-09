"use client";

import { type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

type Project = {
  slug?: string;
  index: string;
  title: string;
  subtitle: string;
  context: string;
  year: string;
  stack: string;
  status?: { label: string; tone?: "live" | "wip" | "confidential" | "done" };
  image?: string;
  alt?: string;
  span: "feature" | "half";
};

const PROJECTS: Project[] = [
  {
    index: "01",
    title: "PIKARRE Apart",
    subtitle: "Location premium d'appartements",
    context: "Marque d'hospitalite urbaine, Lome",
    year: "2025",
    stack: "Laravel . Livewire . SQLite",
    status: { label: "En production", tone: "live" },
    image: "/work/pikarre.jpg",
    alt: "Hero PIKARRE Apart, location premium a Lome",
    span: "feature",
  },
  {
    index: "02",
    title: "GFA",
    subtitle: "Gestion de flux . Assemblee nationale",
    context: "Institution publique, suivi documentaire",
    year: "2024",
    stack: "Laravel . PHP . PostgreSQL",
    status: { label: "Confidentiel", tone: "confidential" },
    image: "/work/gfa-welcome.jpg",
    alt: "GFA, plateforme de gestion de flux pour l'Assemblee nationale",
    span: "half",
  },
  {
    index: "03",
    title: "CBC",
    subtitle: "Catholic Basketball Club . Lome",
    context: "Identite, app club, comptabilite",
    year: "2026",
    stack: "Next.js 16 . Supabase . Prisma 7",
    status: { label: "En cours", tone: "wip" },
    image: "/work/cbc.jpg",
    alt: "Accueil CBC, street basketball club a Lome",
    span: "half",
  },
  {
    index: "04",
    title: "Boutique Telephonie",
    subtitle: "E-commerce accessoires mobiles",
    context: "Vente accessoires, gestion stock et paiement",
    year: "2024",
    stack: "Laravel . MySQL . Bootstrap",
    status: { label: "Livre", tone: "done" },
    span: "half",
  },
  {
    index: "05",
    title: "Boutique E-commerce",
    subtitle: "Plateforme complete avec dashboard admin",
    context: "Boutique en ligne, gestion produits, paiement",
    year: "2023",
    stack: "Laravel . MySQL . JavaScript",
    status: { label: "Deploye", tone: "done" },
    span: "half",
  },
];

export function SelectedWork() {
  return (
    <section
      id="work"
      aria-label="Travail selectionne"
      className="mx-auto max-w-350 px-6 sm:px-10 py-20 sm:py-28 md:py-40 scroll-mt-24"
    >
      <header className="mb-12 sm:mb-16 md:mb-24 grid grid-cols-12 gap-6 items-end">
        <div className="col-span-12 md:col-span-8">
          <p className="eyebrow mb-5">04 / Selection</p>
          <h2 className="display text-[clamp(2.5rem,9vw,6.5rem)]">
            Cinq projets.
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

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-10 sm:mt-12 md:mt-20">
        {PROJECTS.slice(1).map((p, i) => (
          <HalfCard key={p.title} project={p} index={i + 1} />
        ))}
      </div>
    </section>
  );
}

function StatusBadge({
  status,
  className = "",
}: {
  status: NonNullable<Project["status"]>;
  className?: string;
}) {
  const tone = status.tone ?? "done";
  const toneClasses =
    tone === "live"
      ? "bg-rouge text-paper"
      : tone === "wip"
      ? "bg-paper text-foreground border border-foreground/15"
      : tone === "confidential"
      ? "bg-ink text-paper"
      : "bg-paper text-foreground border border-hairline";
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] sm:text-[11px] tracking-[0.16em] uppercase font-medium ${toneClasses} ${className}`}
    >
      {tone === "live" ? (
        <span aria-hidden className="size-1 rounded-full bg-paper animate-pulse" />
      ) : null}
      {status.label}
    </span>
  );
}

function CardShell({
  project,
  children,
}: {
  project: Project;
  children: ReactNode;
}) {
  if (!project.slug) {
    return <div className="group block">{children}</div>;
  }
  const external = project.slug.startsWith("http");
  return (
    <Link
      href={project.slug}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group block"
    >
      {children}
    </Link>
  );
}

function PlaceholderTile({ title, year }: { title: string; year: string }) {
  const initial = title.charAt(0);
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-ink text-paper">
      <span
        aria-hidden
        className="absolute top-4 left-4 text-[9px] tracking-[0.3em] uppercase font-mono text-paper/55"
      >
        Atelier
      </span>
      <span
        aria-hidden
        className="absolute bottom-4 right-4 text-[9px] tracking-[0.3em] uppercase font-mono text-paper/55 tnum"
      >
        {year}
      </span>
      <span
        className="font-display italic select-none"
        style={{
          fontSize: "clamp(3rem, 16cqw, 7rem)",
          letterSpacing: "-0.04em",
          lineHeight: 1,
        }}
      >
        <span className="text-paper">{initial}</span>
        <span className="text-rouge">.</span>
      </span>
    </div>
  );
}

function FeatureCard({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;
  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 1.1, delay: index * 0.12, ease }}
    >
      <CardShell project={project}>
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
            <PlaceholderTile title={project.title} year={project.year} />
          )}
          <span className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10 px-3 py-1 bg-paper text-foreground text-[10px] sm:text-[11px] tracking-[0.18em] uppercase">
            Feature
          </span>
          {project.status ? (
            <StatusBadge
              status={project.status}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 z-10"
            />
          ) : null}

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

        <div className="mt-5 sm:mt-6 grid grid-cols-12 gap-4 sm:gap-6">
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
      </CardShell>
    </motion.article>
  );
}

function HalfCard({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;
  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 1.1, delay: index * 0.12, ease }}
    >
      <CardShell project={project}>
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
            <PlaceholderTile title={project.title} year={project.year} />
          )}
          {project.status ? (
            <StatusBadge
              status={project.status}
              className="absolute top-4 left-4 z-10"
            />
          ) : null}

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
          {project.slug ? (
            <span
              aria-hidden
              className="shrink-0 text-[12px] uppercase tracking-[0.18em] font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-rouge"
            >
              {"\u2192"}
            </span>
          ) : null}
        </div>
        <p className="text-[13px] text-muted mt-2 tnum">
          {project.year}. {project.stack}.
        </p>
      </CardShell>
    </motion.article>
  );
}
