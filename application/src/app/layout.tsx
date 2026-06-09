import type { Metadata } from "next";
import "./globals.css";
import { playfair, geist, geistMono } from "@/lib/fonts";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://koudji.dev"),
  title: {
    default: "Junior Samuel KOUDJI",
    template: "%s. Junior Samuel KOUDJI",
  },
  description:
    "Developpeur Fullstack | Laravel, React, Next.js, Shopify | Ex-UNICEF Togo | En alternance a Paris — Octobre 2026.",
  authors: [{ name: "Junior Samuel KOUDJI" }],
  openGraph: {
    title: "Junior Samuel KOUDJI",
    description: "Developpeur Fullstack | Laravel, React, Next.js, Shopify | Ex-UNICEF Togo | En alternance a Paris — Octobre 2026.",
    type: "website",
    locale: "fr_FR",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      data-theme="light"
      className={`${playfair.variable} ${geist.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex flex-1 flex-col">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
