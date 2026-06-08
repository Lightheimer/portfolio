import { HeroDisplay } from "@/components/home/hero-display";
import { SelectedWork } from "@/components/home/selected-work";
import { Manifesto } from "@/components/home/manifesto";
import { AboutSection } from "@/components/home/about-section";
import { StackMarquee } from "@/components/home/stack-marquee";
import { CapabilitiesList } from "@/components/home/capabilities-list";
import { ClosingMark } from "@/components/home/closing-mark";
import { PageIntro } from "@/components/effects/page-intro";
import { ScrollHint } from "@/components/effects/scroll-hint";

export default function Home() {
  return (
    <>
      <PageIntro />
      <ScrollHint />
      <HeroDisplay />
      <Manifesto />
      <AboutSection />
      <SelectedWork />
      <StackMarquee />
      <CapabilitiesList />
      <ClosingMark />
    </>
  );
}
