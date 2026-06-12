/* Capture-only route for GFA project card visual. Not linked anywhere. */
import { fraunces } from "@/lib/fonts";

const W = 1200;
const H = 780;

export default function GfaCapturePage() {
  return (
    <div
      className={fraunces.variable}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "#08070a",
        overflow: "hidden",
      }}
    >
      <div
        id="capture-frame"
        style={{
          position: "relative",
          width: W,
          height: H,
          background: "#0a0908",
          color: "#f5f3ef",
          overflow: "hidden",
          fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
        }}
      >
        {/* Grid */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(245,243,239,.030) 1px,transparent 1px),linear-gradient(90deg,rgba(245,243,239,.030) 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Vignette rouge */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 28% 38%, rgba(168,130,63,0.13), transparent 55%), radial-gradient(ellipse at 90% 95%, rgba(168,130,63,0.07), transparent 50%)",
          }}
        />
        {/* Grain */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.06,
            mixBlendMode: "overlay",
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          }}
        />

        {/* Red ribbon */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            width: 5,
            height: 240,
            background: "#A8823F",
            boxShadow: "0 0 30px rgba(168,130,63,0.4)",
          }}
        />

        {/* Huge GFA glyph behind */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            right: -20,
            bottom: -90,
            fontFamily: "var(--font-display), serif",
            fontStyle: "italic",
            fontSize: 510,
            lineHeight: 1,
            fontWeight: 600,
            color: "transparent",
            WebkitTextStroke: "1px rgba(168,130,63,.34)",
            letterSpacing: "-0.08em",
          }}
        >
          GFA
        </div>

        {/* Top seal */}
        <div
          style={{
            position: "absolute",
            left: 80,
            top: 56,
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontSize: 10.5,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "#a7a394",
            fontFamily: "var(--font-geist-mono), monospace",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#A8823F",
            }}
          />
          <span>Dossier  .  2026</span>
          <span style={{ opacity: 0.4 }}>/</span>
          <span>Ref. GFA-AN/004</span>
        </div>

        {/* Top right stamp */}
        <div
          style={{
            position: "absolute",
            right: 80,
            top: 56,
            textAlign: "right",
            fontSize: 10,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#a7a394",
            lineHeight: 2,
            fontFamily: "var(--font-geist-mono), monospace",
          }}
        >
          <span
            style={{
              display: "block",
              fontWeight: 600,
              letterSpacing: "0.42em",
              color: "#A8823F",
            }}
          >
            Confidentiel
          </span>
          Institution publique  .  Togo
        </div>

        {/* Eyebrow italic */}
        <div
          style={{
            position: "absolute",
            left: 80,
            top: 188,
            fontFamily: "var(--font-display), serif",
            fontStyle: "italic",
            fontSize: 20,
            color: "#a7a394",
            letterSpacing: "0.02em",
          }}
        >
          — Etude n. 02
        </div>

        {/* Headline */}
        <h1
          style={{
            position: "absolute",
            left: 80,
            top: 232,
            margin: 0,
            fontFamily: "var(--font-display), serif",
            fontSize: 152,
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
            style={{
              display: "block",
              fontStyle: "italic",
              color: "#A8823F",
              fontSize: 92,
              marginTop: 14,
              marginLeft: 64,
              fontWeight: 500,
              letterSpacing: "-0.03em",
            }}
          >
            — Assemblee nationale.
          </span>
        </h1>

        {/* Meta */}
        <div
          style={{
            position: "absolute",
            left: 80,
            bottom: 156,
            display: "flex",
            gap: 64,
            fontSize: 10.5,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#a7a394",
            fontFamily: "var(--font-geist-mono), monospace",
          }}
        >
          <MetaCol label="Client" value="Institutionnel . Togo" />
          <MetaCol label="Stack" value="Laravel . Spring . PostgreSQL" />
          <MetaCol label="Mission" value="Suivi documentaire" />
          <MetaCol label="Statut" value="Livree . 2025" />
        </div>

        {/* Hairline */}
        <div
          style={{
            position: "absolute",
            left: 80,
            right: 80,
            bottom: 100,
            height: 1,
            background: "rgba(245,243,239,0.10)",
          }}
        />

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            left: 80,
            bottom: 56,
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontSize: 10,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#a7a394",
            fontFamily: "var(--font-geist-mono), monospace",
          }}
        >
          <span style={{ color: "#A8823F", fontSize: 8 }}>●</span>
          <span>Junior Samuel Koudji</span>
          <span style={{ opacity: 0.4 }}>/</span>
          <span>Etude selectionnee</span>
        </div>

        <div
          style={{
            position: "absolute",
            right: 80,
            bottom: 56,
            fontSize: 10,
            letterSpacing: "0.34em",
            textTransform: "uppercase",
            color: "#a7a394",
            fontFamily: "var(--font-geist-mono), monospace",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          02 / 03
        </div>
      </div>
    </div>
  );
}

function MetaCol({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span
        style={{
          display: "block",
          marginBottom: 11,
          fontSize: 9.5,
          fontWeight: 600,
          letterSpacing: "0.3em",
          color: "#f5f3ef",
        }}
      >
        {label}
      </span>
      <span style={{ color: "#a7a394" }}>{value}</span>
    </div>
  );
}
