"use client";

/**
 * StackMarquee — bandeau silencieux qui glisse à très basse vitesse.
 * Signature anti-slop, séparateur visuel entre Manifeste et Capacités.
 */

const ITEMS = [
  "Laravel",
  "PHP",
  "Next.js",
  "React",
  "Node.js",
  "TypeScript",
  "Shopify",
  "REST APIs",
  "Server Actions",
  "Supabase",
  "Prisma",
  "PostgreSQL",
  "MySQL",
  "Tailwind",
  "Mobile money",
  "Offline-first",
  "PWA",
];

export function StackMarquee() {
  // 2x for seamless loop
  const list = [...ITEMS, ...ITEMS];
  return (
    <div
      aria-hidden
      className="relative overflow-hidden border-y border-hairline bg-paper"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className="flex w-max animate-[marquee_38s_linear_infinite] py-6">
        {list.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="flex items-center gap-10 px-6 font-display text-[clamp(1.25rem,3vw,2.25rem)] tracking-tight whitespace-nowrap"
          >
            <span>{label}</span>
            <span className="text-rouge text-sm">●</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[marquee_38s_linear_infinite\\] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
