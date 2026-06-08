import { HeroDisplay } from "@/components/home/hero-display";
import { SelectedWork } from "@/components/home/selected-work";
import { Manifesto } from "@/components/home/manifesto";
import { CapabilitiesList } from "@/components/home/capabilities-list";
import { ClosingMark } from "@/components/home/closing-mark";

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
