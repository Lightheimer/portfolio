import Link from "next/link";

const NAV = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-hairline">
      <div className="mx-auto flex max-w-350 items-center justify-between px-6 py-5 sm:px-10">
        <Link
          href="/"
          aria-label="Junior Samuel Koudji — Accueil"
          className="font-serif text-lg tracking-tight"
        >
          Junior Samuel<span className="text-gold">.</span>
        </Link>

        <nav aria-label="Navigation principale">
          <ul className="flex items-center gap-8">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="micro hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
