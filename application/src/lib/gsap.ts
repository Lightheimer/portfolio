"use client";

/**
 * GSAP centralisé : enregistre les plugins une seule fois côté client.
 * Pas d'import côté SSR (gsap touche window au load).
 */
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  gsap.defaults({
    ease: "power3.out",
    duration: 0.9,
  });
}

export { gsap, useGSAP, ScrollTrigger };
