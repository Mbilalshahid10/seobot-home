import { content } from "@/lib/content";
import BetaSignupForm from "@/components/BetaSignupForm";
import { MaterialIcon, RichTextRenderer } from "@/components/landing/shared";
import { Badge } from "@/components/ui/badge";

const c = content.offer;

export function OfferB() {
  return (
    <section id="offer" data-track-section="offer" className="py-28 bg-bg-warm overflow-hidden scroll-mt-16">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Large white card */}
        <div className="bg-white rounded-3xl shadow-xl border border-border-warm p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-10">
            {c?.badge && (
              <Badge variant="accent" className="text-[10px] px-3 py-1 font-bold uppercase tracking-wider mb-6">
                {c.badge}
              </Badge>
            )}
            {c?.headline && (
              <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
                <RichTextRenderer segments={c.headline} />
              </h2>
            )}
            {c?.description && (
              <p className="text-text-secondary max-w-lg mx-auto text-lg leading-relaxed">
                {c.description}
              </p>
            )}
          </div>

          {/* Two-column: value stack + form */}
          <div id="get-access" className="grid md:grid-cols-2 gap-8 items-start scroll-mt-8">
            {/* Left — value stack */}
            {c?.accessCard && (
              <div>
                {c.accessCard.label && (
                  <p className="text-sm text-brand-accent font-bold uppercase tracking-wider mb-6">
                    {c.accessCard.label}
                  </p>
                )}
                {c.accessCard.items && c.accessCard.items.length > 0 && (
                  <ul className="space-y-4">
                    {c.accessCard.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-base text-text-primary">
                        {item.icon && (
                          <MaterialIcon name={item.icon} size="base" className="text-brand-success" />
                        )}
                        {item.text}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* Right — dark inner panel with form */}
            <div className="bg-dark-bg rounded-xl p-6 md:p-8">
              <BetaSignupForm />
              {c?.accessCard?.disclaimer && (
                <p className="text-sm text-text-muted mt-3">{c.accessCard.disclaimer}</p>
              )}
            </div>
          </div>

          {/* Scarcity at card bottom */}
          {c?.scarcity && (
            <div className="text-center mt-10 pt-8 border-t border-border-warm">
              {c.scarcity.badge && (
                <Badge variant="scarcity" className="gap-2 px-3 py-1 text-[10px] font-bold uppercase tracking-wide">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-success-bright animate-pulse" />
                  {c.scarcity.badge}
                </Badge>
              )}
              {c.scarcity.description && (
                <p className="text-sm text-text-muted mt-3 max-w-sm mx-auto">
                  {c.scarcity.description}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
