import type { Metadata } from "next";
import "./globals.css";
import { playfair, geist, geistMono } from "@/lib/fonts";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const SITE_URL = "https://application-nine-henna.vercel.app";
const TITLE = "Junior Samuel KOUDJI — Software Engineer";
const DESCRIPTION =
  "Software Engineer fullstack. Laravel, Next.js, Java, Shopify. Ex-stagiaire UNICEF Togo. Disponible en alternance a Paris des octobre 2026.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s. Junior Samuel KOUDJI",
  },
  description: DESCRIPTION,
  applicationName: "Portfolio Junior Samuel KOUDJI",
  authors: [{ name: "Junior Samuel KOUDJI", url: SITE_URL }],
  creator: "Junior Samuel KOUDJI",
  keywords: [
    "Software Engineer",
    "Developpeur Fullstack",
    "Laravel",
    "Next.js",
    "React",
    "TypeScript",
    "Java Spring",
    "Shopify",
    "Prisma",
    "Supabase",
    "PostgreSQL",
    "Alternance Paris 2026",
    "UNICEF Togo",
    "ICT4D",
    "Lome",
    "Paris",
  ],
  alternates: { canonical: "/" },
  category: "technology",
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "profile",
    locale: "fr_FR",
    siteName: "Junior Samuel KOUDJI",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: { icon: "/favicon.ico" },
};

const PERSON_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Junior Samuel KOUDJI",
  alternateName: "J. Samuel Koudji",
  jobTitle: "Software Engineer",
  url: SITE_URL,
  email: "mailto:koudjisamson@gmail.com",
  description: DESCRIPTION,
  image: `${SITE_URL}/profile.jpg`,
  address: [
    { "@type": "PostalAddress", addressLocality: "Lome", addressCountry: "TG" },
    { "@type": "PostalAddress", addressLocality: "Paris", addressCountry: "FR" },
  ],
  sameAs: [
    "https://github.com/Lightheimer",
  ],
  knowsAbout: [
    "Laravel",
    "Next.js",
    "React",
    "TypeScript",
    "Java Spring",
    "PostgreSQL",
    "Shopify",
    "Offline-first",
    "ICT4D",
  ],
  seeks: {
    "@type": "JobPosting",
    title: "Alternance Software Engineer",
    employmentType: "INTERN",
    jobLocation: {
      "@type": "Place",
      address: { "@type": "PostalAddress", addressLocality: "Paris", addressCountry: "FR" },
    },
    datePosted: "2026-01-01",
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSONLD) }}
        />
        <SiteHeader />
        <main className="flex flex-1 flex-col">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
