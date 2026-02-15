import BetaSignupForm from "@/components/BetaSignupForm";
import { MaterialIcon } from "@/components/landing/shared";
import { Badge } from "@/components/ui/badge";

export function Offer() {
  return (
    <section id="offer" data-track-section="offer" className="py-28 bg-dark-bg text-white relative overflow-hidden">
      <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-brand-accent via-brand-accent-hover to-brand-accent opacity-60"></div>
      <div className="max-w-[1120px] mx-auto px-6 text-center relative z-10">

        <Badge variant="dark" className="text-[10px] px-3 py-1 font-bold uppercase tracking-wider mb-8">
          Join the Beta
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Your directory deserves <br />
          <span className="text-brand-accent">content as unique as each city.</span>
        </h2>
        <p className="text-text-muted mb-8 max-w-lg mx-auto text-lg leading-relaxed">
          Join as a founding member. Free access during beta — we&apos;ll generate a sample page for your niche within 24 hours.
        </p>

        {/* Access card */}
        <div id="get-access" className="max-w-md mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 mb-10 backdrop-blur-sm scroll-mt-8">

          <p className="text-sm text-brand-accent font-bold uppercase tracking-wider mb-6">Free Beta Access Includes</p>

          {/* Value stack */}
          <ul className="space-y-3 text-left mb-6">
            <li className="flex items-center gap-3 text-base text-text-muted">
              <MaterialIcon name="check_circle" size="base" className="text-brand-success" />
              Unlimited page generation
            </li>
            <li className="flex items-center gap-3 text-base text-text-muted">
              <MaterialIcon name="check_circle" size="base" className="text-brand-success" />
              Built-in uniqueness scoring per page
            </li>
            <li className="flex items-center gap-3 text-base text-text-muted">
              <MaterialIcon name="check_circle" size="base" className="text-brand-success" />
              Direct CMS push (WordPress, Webflow, more)
            </li>
            <li className="flex items-center gap-3 text-base text-text-muted">
              <MaterialIcon name="check_circle" size="base" className="text-brand-success" />
              Free sample page for your niche within 24 hours
            </li>
            <li className="flex items-center gap-3 text-base text-text-muted">
              <MaterialIcon name="check_circle" size="base" className="text-brand-success" />
              Priority support &amp; feature requests
            </li>
          </ul>

          {/* EMAIL + CTA */}
          <BetaSignupForm />

          <p className="text-sm text-text-muted mt-3">No credit card. No commitment. If the output doesn&apos;t meet your standard, just walk away.</p>
        </div>

        {/* Scarcity */}
        <div className="text-center">
          <Badge variant="scarcity" className="gap-2 px-3 py-1 text-[10px] font-bold uppercase tracking-wide">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-success-bright animate-pulse"></span>
            Beta limited to 75 founding members
          </Badge>
          <p className="text-sm text-text-muted mt-3 max-w-sm mx-auto">Capped at 75 to maintain generation quality and give every founding member hands-on support.</p>
        </div>

      </div>
    </section>
  );
}
