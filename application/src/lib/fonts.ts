import { Playfair_Display } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

/**
 * Playfair Display, serif haute-couture.
 * Justification : portfolio editorial / luxury-heritage (rotation hors Fraunces banni).
 * Italic et regular dans la meme famille pour les emphasises.
 */
export const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
});

/**
 * Geist Sans, neutre technique (Vercel official).
 * Remplace Inter (LLM default discouraged).
 */
export const geist = GeistSans;
export const geistMono = GeistMono;
