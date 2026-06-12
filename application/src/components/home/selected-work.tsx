"use client";

import { useRef, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";

/**
 * SelectedWork — refonte cinematique "Manufacture" inspiree Cartier.
 * Section sombre, projets projetes comme sur un ecran d'atelier.
 * Chaque scene = image plein cadre, halo dore ambiant,
 * titre en Fraunces, parallaxe au scroll, statut discret.
 */

type Project = {
  slug?: string;
  index: string;
  title: string;
  subtitle: string;
  context: string;
  year: string;
  stack: string;
  status?: { label: string; tone?: "live" | "wip" | "soutenu" | "done" };
  image?: string;
  alt?: string;
};

const PROJECTS: Project[] = [
  {
    slug: "https://pikarreappart.com",
    index: "01",
    title: "PIKARRE Apart",
    subtitle: "Location d'appartements . Lome",
    context: "Plateforme de gestion locative meublee courte / longue duree. Domaine prive, refresh continu en production depuis 2024.",
    year: "2024",
    stack: "Laravel . Blade . MySQL",
    status: { label: "En production", tone: "live" },
    image: "/work/pikarre.jpg",
    alt: "Hero PIKARRE Apart, location d'appartements a Lome",
  },
  {
    slug: "https://vanelys.infinityfreeapp.com/",
    index: "02",
    title: "Vanelys",
    subtitle: "E-commerce mode . Lome",
    context: "Boutique en ligne, catalogue, panier, paiement WhatsApp. Hebergement free-tier, demo publique.",
    year: "2026",
    stack: "Laravel . Livewire . MySQL",
    status: { label: "En ligne", tone: "live" },
    image: "/work/vanelys.jpg",
    alt: "Vanelys, boutique e-commerce mode a Lome",
  },
  {
    index: "03",
    title: "CBC",
    subtitle: "Catholic Basketball Club . Lome",
    context: "Identite, app club, comptabilite transparente, mini-matchs, votes anonymes. Backend complet, front en finition.",
    year: "2026",
    stack: "Next.js 16 . Supabase . Prisma 7",
    status: { label: "En cours", tone: "wip" },
    image: "/work/cbc.jpg",
    alt: "Accueil CBC, street basketball club a Lome",
  },
  {
    index: "04",
    title: "GFA",
    subtitle: "Courrier parlementaire . Assemblee Nationale Togo",
    context: "Plateforme de gestion du courrier de l'Assemblee Nationale Togolaise. Livree pendant le stage UNICEF Togo, en service interne.",
    year: "2025",
    stack: "Laravel . Livewire . MySQL",
    status: { label: "Livre", tone: "done" },
    image: "/work/gfa-welcome.jpg",
    alt: "GFA, plateforme de courrier de l'Assemblee Nationale Togolaise",
  },
  {
    index: "05",
    title: "Marlone",
    subtitle: "Atelier mode . Boutique + caisse",
    context: "POS + e-commerce, gestion stock multi-variantes. Demo locale (Laravel + MySQL), non deploye publiquement.",
    year: "2026",
    stack: "Laravel . Livewire . MySQL",
    status: { label: "Livre", tone: "done" },
    alt: "Marlone, atelier mode et boutique POS",
  },
];

export function SelectedWork() {
  return (
    <section
      id="work"
      aria-label="Travail selectionne"
      className="relative bg-ink text-paper overflow-hidden"
    >
      {/* Atmosphere ambiante (or + rouge tres legers) */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(216,184,124,0.4), transparent 60%), radial-gradient(circle at 80% 80%, rgba(168,130,63,0.25), transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-350 px-6 sm:px-10 pt-24 sm:pt-32 md:pt-44 pb-20 sm:pb-28 md:pb-32">
        <SectionHeader />

        <div className="mt-16 sm:mt-24 md:mt-32 space-y-28 sm:space-y-36 md:space-y-48">
          {PROJECTS.map((p, i) => (
            <ProjectStage key={p.title} project={p} index={i} />
          ))}
        </div>

        <FinalSeal />
      </div>
    </section>
  );
}

function SectionHeader() {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;
  return (
    <header className="grid grid-cols-12 gap-6 items-end">
      <div className="col-span-12 md:col-span-9">
        <motion.p
          className="eyebrow text-paper/55 mb-5"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.7, ease }}
        >
          IV — La Manufacture
        </motion.p>
        <h2 className="display text-[clamp(2.5rem,9vw,6.5rem)] leading-none">
          <motion.span
            className="block"
            initial={reduce ? false : { y: 28, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 0.9, ease }}
          >
            Cinq projets.
          </motion.span>
          <motion.span
            className="block italic text-paper/75"
            initial={reduce ? false : { y: 28, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 0.95, delay: 0.12, ease }}
          >
            Un seul atelier<span className="text-rouge not-italic">.</span>
          </motion.span>
        </h2>
      </div>
      <div className="hidden md:flex col-span-3 justify-end items-end pb-2">
        <Link
          href="https://github.com/Lightheimer"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.18em] font-medium border-b border-paper/30 pb-1 text-paper/70 hover:text-paper hover:border-paper transition-colors"
        >
          Voir sur GitHub
          <span
            aria-hidden
            className="transition-transform group-hover:translate-x-1.5"
          >
            {"\u2192"}
          </span>
        </Link>
      </div>
    </header>
  );
}

function ProjectStage({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1, 1.04]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);
  const ambientOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    [0, 1, 1, 0],
  );

  const alignRight = index % 2 === 1;

  return (
    <motion.article
      ref={ref}
      className="relative"
      initial={reduce ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: "some" }}
      transition={{ duration: 1.1, ease }}
    >
      <CardShell project={project}>
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
          {/* Index vertical lateral */}
          <div
            className={`hidden md:flex col-span-1 ${
              alignRight ? "md:order-last md:justify-end" : "md:justify-start"
            }`}
          >
            <span className="font-mono text-[10px] tracking-[0.3em] text-paper/45 [writing-mode:vertical-rl] rotate-180">
              N. {project.index}
            </span>
          </div>

          {/* Scene (ecran de projection) */}
          <div
            className={`col-span-12 md:col-span-7 ${
              alignRight ? "md:col-start-5" : ""
            }`}
          >
            <Stage
              project={project}
              imageY={imageY}
              imageScale={imageScale}
              ambientOpacity={ambientOpacity}
              reduce={!!reduce}
            />
          </div>

          {/* Texte (cote oppose) */}
          <div
            className={`col-span-12 md:col-span-4 ${
              alignRight ? "md:col-start-1 md:row-start-1" : ""
            }`}
          >
            <ProjectMeta project={project} titleY={titleY} reduce={!!reduce} />
          </div>
        </div>
      </CardShell>
    </motion.article>
  );
}

function Stage({
  project,
  imageY,
  imageScale,
  ambientOpacity,
  reduce,
}: {
  project: Project;
  imageY: MotionValue<string>;
  imageScale: MotionValue<number>;
  ambientOpacity: MotionValue<number>;
  reduce: boolean;
}) {
  return (
    <div
      className="relative aspect-16/10 w-full"
      style={{ containerType: "size" }}
    >
      {/* Halo dore ambiant (projecteur) */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -inset-12 md:-inset-20 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(216,184,124,0.34), rgba(168,130,63,0.14) 45%, transparent 75%)",
          opacity: reduce ? 0.65 : ambientOpacity,
        }}
      />

      {/* Cadre ecran */}
      <div className="absolute inset-0 overflow-hidden bg-paper-soft shadow-[0_40px_120px_-20px_rgba(0,0,0,0.65)] ring-1 ring-paper/10">
        {project.image ? (
          <motion.div
            className="absolute inset-0"
            style={{
              y: reduce ? "0%" : imageY,
              scale: reduce ? 1 : imageScale,
            }}
          >
            <Image
              src={project.image}
              alt={project.alt ?? project.title}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover object-top"
            />
          </motion.div>
        ) : (
          <PlaceholderTile title={project.title} year={project.year} />
        )}

        {/* Vignette */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 55%, rgba(12,12,12,0.55) 100%), radial-gradient(ellipse at center, transparent 60%, rgba(12,12,12,0.45) 100%)",
          }}
        />

        {/* Statut discret */}
        {project.status ? (
          <StatusBadge
            status={project.status}
            className="absolute bottom-4 left-4 z-10"
          />
        ) : null}

        {/* Hover label */}
        {project.slug ? (
          <span
            aria-hidden
            className="pointer-events-none absolute top-4 right-4 z-10 px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase font-medium bg-paper text-foreground opacity-0 -translate-y-1 group-hover/stage:opacity-100 group-hover/stage:translate-y-0 transition-all duration-500"
          >
            Visiter le projet {"\u2192"}
          </span>
        ) : (
          <span
            aria-hidden
            className="pointer-events-none absolute top-4 right-4 z-10 px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase font-medium border border-paper/30 text-paper/70 opacity-0 -translate-y-1 group-hover/stage:opacity-100 group-hover/stage:translate-y-0 transition-all duration-500"
          >
            Capture {"\u00b7"} {project.year}
          </span>
        )}
      </div>

      {/* Petits piliers de scene */}
      <span
        aria-hidden
        className="hidden md:block absolute left-0 -bottom-4 h-4 w-px bg-linear-to-b from-paper/30 to-transparent"
      />
      <span
        aria-hidden
        className="hidden md:block absolute right-0 -bottom-4 h-4 w-px bg-linear-to-b from-paper/30 to-transparent"
      />
    </div>
  );
}

function ProjectMeta({
  project,
  titleY,
  reduce,
}: {
  project: Project;
  titleY: MotionValue<string>;
  reduce: boolean;
}) {
  return (
    <div className="md:py-4">
      <p className="eyebrow text-paper/45 mb-3 tnum md:hidden">
        N. {project.index}
      </p>

      <motion.h3
        className="display text-3xl sm:text-4xl md:text-5xl leading-[1.05] text-paper"
        style={{ y: reduce ? "0%" : titleY }}
      >
        {project.title}
        <span className="text-rouge">.</span>
      </motion.h3>

      <p className="font-display italic text-paper/60 text-lg md:text-xl mt-2">
        {project.subtitle}
      </p>

      <div className="mt-6 h-px w-12 bg-paper/30" />

      <p className="mt-6 text-[13.5px] leading-[1.7] text-paper/75 max-w-md">
        {project.context}
      </p>

      <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-[11px] tracking-[0.06em]">
        <div>
          <dt className="text-paper/40 uppercase mb-1">Annee</dt>
          <dd className="text-paper tnum">{project.year}</dd>
        </div>
        <div>
          <dt className="text-paper/40 uppercase mb-1">Stack</dt>
          <dd className="text-paper">{project.stack}</dd>
        </div>
      </dl>
    </div>
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
    return <div className="group/stage block">{children}</div>;
  }
  const external = project.slug.startsWith("http");
  return (
    <Link
      href={project.slug}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group/stage block"
      aria-label={`Ouvrir ${project.title} dans un nouvel onglet`}
    >
      {children}
    </Link>
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
      ? "bg-paper text-foreground"
      : tone === "soutenu"
      ? "bg-paper/95 text-foreground"
      : "bg-paper/90 text-foreground";
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] sm:text-[11px] tracking-[0.16em] uppercase font-medium ${toneClasses} ${className}`}
    >
      {tone === "live" ? (
        <span
          aria-hidden
          className="size-1 rounded-full bg-paper animate-pulse"
        />
      ) : null}
      {status.label}
    </span>
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

function FinalSeal() {
  return (
    <div className="mt-24 md:mt-32 flex flex-col items-center gap-4 text-center">
      <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-paper/40">
        Fin de la Manufacture
      </span>
      <span aria-hidden className="h-12 w-px bg-paper/20" />
      <Link
        href="https://github.com/Lightheimer"
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.18em] font-medium border-b border-paper/30 pb-1 text-paper/70 hover:text-paper hover:border-paper transition-colors"
      >
        Voir sur GitHub {"\u2192"}
      </Link>
    </div>
  );
}
