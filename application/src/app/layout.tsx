import type { Metadata } from "next";
import "./globals.css";
import { fraunces, inter } from "@/lib/fonts";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://koudji.dev"),
  title: {
    default: "Junior Samuel KOUDJI — Software engineer",
    template: "%s — Junior Samuel KOUDJI",
  },
  description:
    "Software engineer. Laravel, Next.js, ICT4D. Lomé → Paris. Portfolio éditorial.",
  authors: [{ name: "Junior Samuel KOUDJI" }],
  openGraph: {
    title: "Junior Samuel KOUDJI",
    description:
      "Software engineer. Laravel, Next.js, ICT4D. Lomé → Paris.",
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
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex flex-1 flex-col">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
