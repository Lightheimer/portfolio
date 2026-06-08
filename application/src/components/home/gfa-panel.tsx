/**
 * GfaPanel — visuel éditorial inline pour la carte GFA.
 * Pas de capture nécessaire, rendu responsive via CSS dans n'importe quel ratio.
 * Tokens portfolio : ink, rouge Cartier, Playfair, Geist Mono.
 */
export function GfaPanel() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0a0908] text-[#f5f3ef]">
      {/* Grid */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,243,239,.030) 1px,transparent 1px),linear-gradient(90deg,rgba(245,243,239,.030) 1px,transparent 1px)",
          backgroundSize: "12% 16%",
        }}
      />
      {/* Vignette rouge */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 28% 38%, rgba(200,16,46,0.12), transparent 55%), radial-gradient(ellipse at 90% 95%, rgba(200,16,46,0.06), transparent 50%)",
        }}
      />
      {/* Grain */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* Ribbon rouge gauche */}
      <div
        aria-hidden
        className="absolute left-0 top-1/2 -translate-y-1/2"
        style={{
          width: 4,
          height: "32%",
          background: "#C8102E",
          boxShadow: "0 0 30px rgba(200,16,46,0.4)",
        }}
      />

      {/* Glyph GFA géant fond */}
      <div
        aria-hidden
        className="absolute italic font-display select-none pointer-events-none"
        style={{
          right: "-5%",
          bottom: "-18%",
          fontSize: "min(82cqw, 100cqh)",
          lineHeight: 1,
          fontWeight: 600,
          color: "transparent",
          WebkitTextStroke: "1px rgba(200,16,46,.30)",
          letterSpacing: "-0.08em",
        }}
      >
        GFA
      </div>

      {/* Padding interne */}
      <div className="relative h-full w-full p-[6%] sm:p-[7%] flex flex-col">
        {/* Top row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3 text-[clamp(8px,1.4cqw,11px)] uppercase tracking-[0.28em] text-[#a7a394] font-mono">
            <span
              aria-hidden
              className="inline-block size-1.5 rounded-full bg-rouge"
            />
            <span>Dossier . 2026</span>
            <span className="opacity-40 hidden sm:inline">/</span>
            <span className="hidden sm:inline">Ref. GFA-AN/004</span>
          </div>
          <div className="text-right text-[clamp(8px,1.2cqw,10px)] uppercase tracking-[0.3em] text-[#a7a394] font-mono leading-[1.8]">
            <span className="block font-semibold tracking-[0.4em] text-rouge">
              Confidentiel
            </span>
            <span className="hidden sm:inline">Institution publique</span>
          </div>
        </div>

        {/* Eyebrow */}
        <div className="mt-[5%] italic font-display text-[clamp(11px,1.7cqw,18px)] text-[#a7a394] tracking-tight">
          — Etude n. 02
        </div>

        {/* Headline */}
        <h3
          className="mt-[2%] font-display"
          style={{
            fontSize: "clamp(2.25rem, 11.5cqw, 8rem)",
            lineHeight: 0.92,
            letterSpacing: "-0.04em",
            fontWeight: 400,
            color: "#f5f3ef",
          }}
        >
          Gestion
          <br />
          de flux
          <span
            className="block italic font-display"
            style={{
              color: "#C8102E",
              fontSize: "clamp(1.25rem, 6.6cqw, 4.5rem)",
              marginTop: "1.5%",
              marginLeft: "6%",
              fontWeight: 500,
              letterSpacing: "-0.025em",
              lineHeight: 1,
            }}
          >
            — Assemblee nationale.
          </span>
        </h3>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Hairline */}
        <div
          aria-hidden
          className="w-full"
          style={{ height: 1, background: "rgba(245,243,239,0.10)" }}
        />

        {/* Footer */}
        <div className="mt-[4%] flex items-end justify-between gap-3 text-[clamp(8px,1.1cqw,10px)] uppercase tracking-[0.28em] text-[#a7a394] font-mono">
          <div className="flex items-center gap-3">
            <span className="text-rouge text-[6px]">●</span>
            <span>Junior Samuel Koudji</span>
          </div>
          <span className="tabular-nums">02 / 03</span>
        </div>
      </div>
    </div>
  );
}
