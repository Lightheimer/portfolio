import { HeroDisplay } from "@/components/home/hero-display";
import { SelectedWork } from "@/components/home/selected-work";
import { Manifesto } from "@/components/home/manifesto";
import { AboutSection } from "@/components/home/about-section";
import { ExperienceSection } from "@/components/home/experience-section";
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
      <ExperienceSection />
      <SelectedWork />
      <AboutSection />
      <StackMarquee />
      <CapabilitiesList />
      <ClosingMark />
    </>
  );
}
