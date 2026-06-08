import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hairline mt-32">
      <div className="mx-auto max-w-350 px-6 py-12 sm:px-10 grid gap-10 sm:grid-cols-2 sm:items-end">
        <div>
          <p className="micro mb-3">Basé à</p>
          <p className="font-serif text-2xl tracking-tight">
            Lomé <span className="text-gold">→</span> Paris
          </p>
        </div>

        <div className="sm:text-right">
          <p className="micro mb-3">Contact</p>
          <ul className="space-y-1 text-sm">
            <li>
              <Link
                href="mailto:lightheimer@gmail.com"
                className="underline-offset-4 hover:underline"
              >
                lightheimer@gmail.com
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/Lightheimer"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline"
              >
                GitHub
              </Link>
              {" · "}
              <Link
                href="https://www.linkedin.com/in/junior-samuel-koudji"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-hairline">
        <div className="mx-auto max-w-350 px-6 sm:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="micro">© {year} Junior Samuel Koudji</p>
          <p className="micro tnum">v0.1 — Édition continue</p>
        </div>
      </div>
    </footer>
  );
}
