import dynamic from "next/dynamic";
import { CTAButton, MaterialIcon } from "@/components/landing/shared";
import { Badge } from "@/components/ui/badge";

const InteractiveDemo = dynamic(
  () => import("@/components/InteractiveDemo"),
  {
    loading: () => (
      <div className="mt-16 max-w-3xl mx-auto">
        <div className="rounded-xl border border-border-warm bg-white shadow-sm overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 bg-bg-warm border-b border-border-warm">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-300" />
              <div className="w-3 h-3 rounded-full bg-yellow-300" />
              <div className="w-3 h-3 rounded-full bg-green-300" />
            </div>
            <div className="h-5 w-48 bg-border-warm rounded animate-pulse" />
          </div>
          <div className="p-6 space-y-4">
            <div className="h-4 w-3/4 bg-badge-bg rounded animate-pulse" />
            <div className="h-4 w-1/2 bg-badge-bg rounded animate-pulse" />
            <div className="h-4 w-2/3 bg-badge-bg rounded animate-pulse" />
          </div>
        </div>
      </div>
    ),
  }
);

export function Hero() {
  return (
    <section id="hero" data-track-section="hero" className="pt-24 pb-20 overflow-hidden scroll-mt-16">
      <div className="max-w-[1120px] mx-auto px-6 text-center">

        {/* Badge */}
        <Badge className="gap-2 px-3 py-1 uppercase tracking-wider mb-8">
          <span className="inline-block w-2 h-2 rounded-full bg-brand-success animate-pulse"></span>
          Beta Access Open
        </Badge>

        {/* Qualifier */}
        <p className="text-base text-text-secondary font-medium mb-6">For directory founders scaling location pages across hundreds of cities.</p>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.08] mb-6 text-text-primary font-display tracking-tight">
          500 location pages. Zero rankings.<br />
          <span className="text-gradient italic">We fix that in under an hour.</span>
        </h1>

        {/* Subhead */}
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-14 leading-relaxed font-sans">
          You built the directory. You uploaded the data. But Google sees 500 pages of identical copy — and it&apos;s ranking none of them.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <CTAButton
            href="#mechanism"
            ctaName="See the Difference"
            ctaLocation="hero"
            icon="arrow_downward"
            className="hover:shadow-xl"
          >
            See the Difference
          </CTAButton>
          <CTAButton
            href="#get-access"
            ctaName="Get Free Beta Access"
            ctaLocation="hero"
            variant="outline"
            icon="arrow_forward"
          >
            Get Free Beta Access
          </CTAButton>
        </div>

        {/* Trust line */}
        <div className="flex items-center justify-center gap-6 text-xs text-text-muted font-medium">
          <span className="flex items-center gap-1"><MaterialIcon name="credit_card_off" /> No credit card required</span>
          <span>·</span>
          <span className="flex items-center gap-1"><MaterialIcon name="group" /> Limited to 75 beta members</span>
        </div>

        {/* Animated App Mockup */}
        <InteractiveDemo />

      </div>
    </section>
  );
}
