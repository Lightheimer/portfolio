import Link from "next/link";

export default function Home() {
  return (
    <section
      aria-label="Présentation"
      className="relative mx-auto w-full max-w-350 flex-1 px-6 sm:px-10"
    >
      {/* En-tête éditorial — eyebrow */}
      <div className="pt-16 sm:pt-24 grid grid-cols-12 gap-6">
        <p className="micro col-span-12 sm:col-span-4">
          Portfolio · 2026 · N°01
        </p>
        <p className="micro col-span-12 sm:col-span-4 sm:text-center">
          Software engineer
        </p>
        <p className="micro col-span-12 sm:col-span-4 sm:text-right tnum">
          Lomé — Paris
        </p>
      </div>

      {/* Hairline supérieure */}
      <hr className="hairline mt-10" />

      {/* Display — Z pattern : titre haut-gauche, baseline bas-droite */}
      <div className="grid grid-cols-12 gap-6 pt-12 sm:pt-20 pb-32 sm:pb-48">
        <h1 className="display col-span-12 text-[clamp(3.5rem,12vw,9.5rem)]">
          Junior Samuel
          <br />
          KOUDJI<span className="text-gold">.</span>
        </h1>

        <div className="col-span-12 mt-12 sm:mt-20 grid grid-cols-12 gap-6">
          <p className="lead col-span-12 sm:col-span-7 sm:col-start-1">
            Je construis des produits qui tiennent debout — sobres, rapides,
            utiles. Six projets, deux pays, un seul fil rouge : la rigueur du
            détail.
          </p>

          <div className="col-span-12 sm:col-span-4 sm:col-start-9 sm:text-right flex sm:justify-end items-end">
            <Link
              href="/work"
              className="group inline-flex items-center gap-3 border-b border-foreground pb-2 text-sm uppercase tracking-[0.18em]"
            >
              Voir le travail
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Hairline inférieure + meta navigation */}
      <hr className="hairline" />
      <div className="grid grid-cols-12 gap-6 py-8">
        <p className="micro col-span-12 sm:col-span-4 tnum">
          06 projets · 2021 — 2026
        </p>
        <p className="micro col-span-12 sm:col-span-4 sm:text-center">
          Laravel · Next.js · ICT4D
        </p>
        <p className="micro col-span-12 sm:col-span-4 sm:text-right">
          <Link href="/about" className="underline-offset-4 hover:underline">
            À propos →
          </Link>
        </p>
      </div>
    </section>
  );
}
