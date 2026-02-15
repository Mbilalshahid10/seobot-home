import dynamic from "next/dynamic";
import { content } from "@/lib/content";
import { CTAButton, MaterialIcon, RichTextRenderer } from "@/components/landing/shared";
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

const c = content.hero;

export function Hero() {
  return (
    <section id="hero" data-track-section="hero" className="pt-24 pb-20 overflow-hidden scroll-mt-16">
      <div className="max-w-[1120px] mx-auto px-6 text-center">

        {/* Badge */}
        {c?.badge && (
          <Badge className="gap-2 px-3 py-1 uppercase tracking-wider mb-8">
            <span className="inline-block w-2 h-2 rounded-full bg-brand-success animate-pulse"></span>
            {c.badge}
          </Badge>
        )}

        {/* Qualifier */}
        {c?.qualifier && (
          <p className="text-base text-text-secondary font-medium mb-6">{c.qualifier}</p>
        )}

        {/* Headline */}
        {c?.headline && (
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.08] mb-6 text-text-primary font-display tracking-tight">
            <RichTextRenderer segments={c.headline} />
          </h1>
        )}

        {/* Subhead */}
        {c?.subhead && (
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-14 leading-relaxed font-sans">
            {c.subhead}
          </p>
        )}

        {/* CTAs */}
        {c?.ctas && c.ctas.length > 0 && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            {c.ctas.map((cta) => (
              <CTAButton
                key={cta.text}
                href={cta.href}
                ctaName={cta.trackingName ?? cta.text}
                ctaLocation={cta.trackingLocation ?? "hero"}
                variant={cta.variant}
                icon={cta.icon}
                className={cta.variant !== "outline" ? "hover:shadow-xl" : undefined}
              >
                {cta.text}
              </CTAButton>
            ))}
          </div>
        )}

        {/* Trust line */}
        {c?.trustLine && c.trustLine.length > 0 && (
          <div className="flex items-center justify-center gap-6 text-xs text-text-muted font-medium">
            {c.trustLine.map((item, i) => (
              <span key={i} className="flex items-center gap-1">
                {i > 0 && <span className="mr-6">&middot;</span>}
                <MaterialIcon name={item.icon} /> {item.text}
              </span>
            ))}
          </div>
        )}

        {/* Animated App Mockup */}
        <InteractiveDemo />

      </div>
    </section>
  );
}
