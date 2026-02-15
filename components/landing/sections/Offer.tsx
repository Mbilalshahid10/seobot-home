import { content } from "@/lib/content";
import BetaSignupForm from "@/components/BetaSignupForm";
import { MaterialIcon, RichTextRenderer } from "@/components/landing/shared";
import { Badge } from "@/components/ui/badge";

const c = content.offer;

export function Offer() {
  return (
    <section id="offer" data-track-section="offer" className="py-28 bg-dark-bg text-white relative overflow-hidden">
      <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-brand-accent via-brand-accent-hover to-brand-accent opacity-60"></div>
      <div className="max-w-[1120px] mx-auto px-6 text-center relative z-10">

        {c?.badge && (
          <Badge variant="dark" className="text-[10px] px-3 py-1 font-bold uppercase tracking-wider mb-8">
            {c.badge}
          </Badge>
        )}
        {c?.headline && (
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <RichTextRenderer segments={c.headline} />
          </h2>
        )}
        {c?.description && (
          <p className="text-text-muted mb-8 max-w-lg mx-auto text-lg leading-relaxed">
            {c.description}
          </p>
        )}

        {/* Access card */}
        <div id="get-access" className="max-w-md mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 mb-10 scroll-mt-8">

          {c?.accessCard?.label && (
            <p className="text-sm text-brand-accent font-bold uppercase tracking-wider mb-6">{c.accessCard.label}</p>
          )}

          {/* Value stack */}
          {c?.accessCard?.items && c.accessCard.items.length > 0 && (
            <ul className="space-y-3 text-left mb-6">
              {c.accessCard.items.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-base text-text-muted">
                  {item.icon && <MaterialIcon name={item.icon} size="base" className="text-brand-success" />}
                  {item.text}
                </li>
              ))}
            </ul>
          )}

          {/* EMAIL + CTA */}
          <BetaSignupForm />

          {c?.accessCard?.disclaimer && (
            <p className="text-sm text-text-muted mt-3">{c.accessCard.disclaimer}</p>
          )}
        </div>

        {/* Scarcity */}
        {c?.scarcity && (
          <div className="text-center">
            {c.scarcity.badge && (
              <Badge variant="scarcity" className="gap-2 px-3 py-1 text-[10px] font-bold uppercase tracking-wide">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-success-bright animate-pulse"></span>
                {c.scarcity.badge}
              </Badge>
            )}
            {c.scarcity.description && (
              <p className="text-sm text-text-muted mt-3 max-w-sm mx-auto">{c.scarcity.description}</p>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
