import dynamic from "next/dynamic";
import { Nav, Hero, Problem, Mechanism, Offer, FAQ, Footer } from "@/components/landing/sections";

const SmoothScrollAnchors = dynamic(
  () => import("@/components/SmoothScrollAnchors"),
  { ssr: false }
);

const SectionTracker = dynamic(
  () => import("@/components/SectionTracker"),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="landing-page-scope bg-bg-warm text-text-primary">
      <SmoothScrollAnchors />
      <SectionTracker />
      <Nav />
      <Hero />
      <Problem />
      <Mechanism />
      <Offer />
      <FAQ />
      <Footer />
    </div>
  );
}
