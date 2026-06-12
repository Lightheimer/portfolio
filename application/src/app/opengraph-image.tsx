import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Junior Samuel KOUDJI · Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f8f6f1",
          color: "#12100d",
          padding: 64,
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 16,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#6b6766",
            fontFamily: "monospace",
          }}
        >
          <span>Portfolio · 2026</span>
          <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span
              style={{
                width: 28,
                height: 2,
                background: "#a91e2c",
                display: "block",
              }}
            />
            Disponible
          </span>
        </div>

        {/* Center : nom + rôle */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 28,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#6b6766",
              fontFamily: "monospace",
            }}
          >
            Nº I · Software Engineer
          </div>
          <div
            style={{
              fontSize: 132,
              lineHeight: 1,
              letterSpacing: -3,
              fontWeight: 500,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Junior Samuel</span>
            <span style={{ fontStyle: "italic" }}>
              Koudji
              <span style={{ color: "#a91e2c" }}>.</span>
            </span>
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#3a3a3a",
              maxWidth: 920,
              lineHeight: 1.35,
            }}
          >
            Laravel · Next.js · Java Spring · Shopify. Trois ans à construire des
            produits qui tiennent debout.
          </div>
        </div>

        {/* Bottom : meta + accent */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 18,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#6b6766",
            fontFamily: "monospace",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span>Lomé · Paris</span>
            <span>Alternance · Octobre 2026</span>
          </div>
          <div
            style={{
              padding: "12px 20px",
              border: "1px solid #a91e2c",
              color: "#a91e2c",
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: 3,
            }}
          >
            koudji.dev
          </div>
        </div>

        {/* Hairline */}
        <div
          style={{
            position: "absolute",
            top: 130,
            left: 64,
            right: 64,
            height: 1,
            background: "rgba(12,12,12,0.12)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
