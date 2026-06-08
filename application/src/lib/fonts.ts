import { Fraunces, Inter } from "next/font/google";

/**
 * Fraunces — serif éditorial variable.
 * Utilisée pour le display.
 */
export const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz"],
});

/**
 * Inter — sans-serif technique.
 * Utilisée pour le corps, la nav, le micro-typo.
 */
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
