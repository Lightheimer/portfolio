import { Fraunces } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

/**
 * Fraunces, serif optique old-style — la voix des livrets imprimes
 * (The Cut, SUZY, Serenity). Le portfolio devient l'extension numerique
 * exacte des editions papier : meme typo, meme ivoire, meme or.
 * Axe optique (opsz) variable : fin en petit corps, incisif en display.
 */
export const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  axes: ["opsz"],
  style: ["normal", "italic"],
});

/**
 * Geist Sans, neutre technique (Vercel official).
 */
export const geist = GeistSans;
export const geistMono = GeistMono;
