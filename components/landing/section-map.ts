import type { ComponentType } from "react";
import { Nav, Hero, Problem, Mechanism, Offer, FAQ, Footer } from "./sections";
import { HeroB } from "./blocks/HeroB";
import { ProblemB } from "./blocks/ProblemB";
import { ProblemC } from "./blocks/ProblemC";
import { MechanismB } from "./blocks/MechanismB";
import { MechanismC } from "./blocks/MechanismC";
import { OfferB } from "./blocks/OfferB";
import { FAQB } from "./blocks/FAQB";
import { FAQC } from "./blocks/FAQC";
import { FooterB } from "./blocks/FooterB";

// Static typed map — add new variants here, never mutate at runtime
export const SECTION_MAP = {
  nav_a: Nav,
  hero_a: Hero,
  hero_b: HeroB,
  problem_a: Problem,
  problem_b: ProblemB,
  problem_c: ProblemC,
  mechanism_a: Mechanism,
  mechanism_b: MechanismB,
  mechanism_c: MechanismC,
  offer_a: Offer,
  offer_b: OfferB,
  faq_a: FAQ,
  faq_b: FAQB,
  faq_c: FAQC,
  footer_a: Footer,
  footer_b: FooterB,
} as const satisfies Record<string, ComponentType>;

export type SectionKey = keyof typeof SECTION_MAP;
