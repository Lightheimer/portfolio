import { Cormorant } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

/**
 * Cormorant, serif de haute couture a fort contraste.
 * La voix display du portfolio : tranchante en grand corps,
 * italiques dessinees. Ivoire + encre + carmin signature.
 */
export const cormorant = Cormorant({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

/** Alias legacy : la route capture importe encore `fraunces`. */
export const fraunces = cormorant;

/**
 * Geist Sans, neutre technique (Vercel official).
 */
export const geist = GeistSans;
export const geistMono = GeistMono;
