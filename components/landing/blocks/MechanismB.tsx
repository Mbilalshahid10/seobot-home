import { content } from "@/lib/content";
import { SectionWrapper, MaterialIcon, RichTextRenderer } from "@/components/landing/shared";
import { Badge } from "@/components/ui/badge";

const c = content.mechanism;

export function MechanismB() {
  if (!c) return null;

  return (
    <SectionWrapper id="mechanism" background="white">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left column — sticky text */}
        <div className="lg:sticky lg:top-24 lg:self-start">
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
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              <RichTextRenderer segments={c.description} />
            </p>
          )}
          {c.closingLine && (
            <p className="text-base text-text-muted leading-relaxed italic">
              {c.closingLine}
            </p>
          )}
        </div>

        {/* Right column — stacked before/after cards */}
        <div className="space-y-6">
          {c.before && (
            <figure className="bg-pain-bg border border-pain-border rounded-xl p-6">
              <figcaption className="text-xs font-bold text-brand-error uppercase tracking-wider mb-4 flex items-center gap-2">
                {c.before.icon && <MaterialIcon name={c.before.icon} size="sm" />}
                {c.before.label}
              </figcaption>
              <blockquote className="text-base text-text-secondary leading-relaxed italic">
                {c.before.quote}
              </blockquote>
            </figure>
          )}
          {c.after && (
            <figure className="bg-solution-bg border border-solution-border rounded-xl p-6">
              <figcaption className="text-xs font-bold text-brand-success uppercase tracking-wider mb-4 flex items-center gap-2">
                {c.after.icon && <MaterialIcon name={c.after.icon} size="sm" />}
                {c.after.label}
              </figcaption>
              <blockquote className="text-base text-text-primary leading-relaxed italic">
                {c.after.quote}
              </blockquote>
            </figure>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
