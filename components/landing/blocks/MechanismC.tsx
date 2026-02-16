import { content } from "@/lib/content";
import { SectionWrapper, MaterialIcon, RichTextRenderer } from "@/components/landing/shared";
import { Badge } from "@/components/ui/badge";

const c = content.mechanism;

export function MechanismC() {
  if (!c) return null;

  return (
    <SectionWrapper id="mechanism" background="warm">
      {/* Centered header */}
      <div className="text-center mb-12">
        {c.badge && (
          <Badge variant="accent" className="gap-2 px-4 py-1.5 font-bold uppercase tracking-wider mb-6">
            {c.badge.icon && <MaterialIcon name={c.badge.icon} />}
            {c.badge.text}
          </Badge>
        )}
        {c.headline && (
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            {c.headline}
          </h2>
        )}
        {c.description && (
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
            <RichTextRenderer segments={c.description} />
          </p>
        )}
      </div>

      {/* Unified before/after card */}
      {(c.before || c.after) && (
        <div className="max-w-2xl mx-auto rounded-2xl shadow-lg bg-white overflow-hidden">
          {/* Before section */}
          {c.before && (
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                {c.before.icon && (
                  <MaterialIcon name={c.before.icon} size="sm" className="text-brand-error" />
                )}
                <span className="text-xs font-bold text-brand-error uppercase tracking-wider">
                  {c.before.label}
                </span>
              </div>
              <blockquote className="text-base text-text-secondary leading-relaxed italic">
                {c.before.quote}
              </blockquote>
            </div>
          )}

          {/* Gradient divider */}
          <div className="h-1 bg-gradient-to-r from-brand-error via-border-warm to-brand-success" />

          {/* After section */}
          {c.after && (
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                {c.after.icon && (
                  <MaterialIcon name={c.after.icon} size="sm" className="text-brand-success" />
                )}
                <span className="text-xs font-bold text-brand-success uppercase tracking-wider">
                  {c.after.label}
                </span>
              </div>
              <blockquote className="text-base text-text-primary leading-relaxed italic">
                {c.after.quote}
              </blockquote>
            </div>
          )}
        </div>
      )}

      {/* Closing line below card */}
      {c.closingLine && (
        <p className="text-base text-text-muted leading-relaxed text-center mt-8 max-w-2xl mx-auto">
          {c.closingLine}
        </p>
      )}
    </SectionWrapper>
  );
}
