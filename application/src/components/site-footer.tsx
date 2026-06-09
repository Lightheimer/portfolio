import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hairline mt-32">
      <div className="mx-auto max-w-350 px-6 sm:px-10 pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow mb-5">Travailler ensemble</p>
            <p className="display text-4xl md:text-6xl">
              Disponible
              <br />
              pour <em>commission.</em>
            </p>
            <Link
              href="mailto:koudjisamson@gmail.com"
              className="mt-8 inline-flex items-center gap-3 group"
            >
              <span className="font-display italic text-2xl border-b border-foreground pb-1 group-hover:text-rouge group-hover:border-rouge transition-colors">
                koudjisamson@gmail.com
              </span>
            </Link>
          </div>

          <div className="md:col-span-3 md:col-start-8">
            <p className="eyebrow mb-5">Bureau</p>
            <p className="text-base leading-relaxed">
              Lome.<br />Paris.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-5">Suivre</p>
            <ul className="space-y-1 text-base">
              <li>
                <Link
                  href="https://github.com/Lightheimer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rouge transition-colors"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/junior-samuel-koudji-9a4622279/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rouge transition-colors"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 pt-8 border-t border-hairline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="eyebrow tnum">© {year} Junior Samuel Koudji</p>
          <p className="eyebrow">Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
