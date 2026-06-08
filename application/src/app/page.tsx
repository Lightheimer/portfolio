import Link from "next/link";
import { HeroDisplay } from "@/components/home/hero-display";
import { SelectedWork } from "@/components/home/selected-work";
import { Manifesto } from "@/components/home/manifesto";
import { CapabilitiesList } from "@/components/home/capabilities-list";

export default function Home() {
  return (
    <>
      <HeroDisplay />
      <Manifesto />
      <SelectedWork />
      <CapabilitiesList />
      <ClosingMark />
    </>
  );
}

function ClosingMark() {
  return (
    <section className="border-t border-hairline">
      <div className="mx-auto max-w-350 px-6 sm:px-10 py-32 grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-7">
          <p className="display text-5xl md:text-7xl lg:text-8xl">
            Pour ceux qui
            <br />
            <em>voient</em> le detail.
          </p>
        </div>
        <div className="md:col-span-4 md:col-start-9 flex md:justify-end">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-ink text-paper px-8 py-5 hover:bg-rouge transition-colors duration-300 whitespace-nowrap"
          >
            <span className="text-[12px] tracking-[0.18em] uppercase font-medium">
              Echangeons
            </span>
            <span aria-hidden className="transition-transform group-hover:translate-x-1.5">
              {"\u2192"}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
