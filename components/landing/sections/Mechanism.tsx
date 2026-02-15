import { content } from "@/lib/content";
import { SectionWrapper, MaterialIcon, RichTextRenderer } from "@/components/landing/shared";
import { Badge } from "@/components/ui/badge";

const c = content.mechanism;

export function Mechanism() {
  return (
    <SectionWrapper id="mechanism" background="white" maxWidth="narrow" className="py-24" innerClassName="text-center">
      {c?.badge && (
        <Badge variant="accent" className="gap-2 px-4 py-1.5 font-bold uppercase tracking-wider mb-8">
          {c.badge.icon && <MaterialIcon name={c.badge.icon} />}
          {c.badge.text}
        </Badge>
      )}
      {c?.headline && (
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
          {c.headline}
        </h2>
      )}
      {c?.description && (
        <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
          <RichTextRenderer segments={c.description} />
        </p>
      )}

      {/* Before / After */}
      {(c?.before || c?.after) && (
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
          {c?.before && (
            <figure className="text-left bg-pain-bg border border-pain-border rounded-xl p-5 relative">
              <figcaption className="text-[10px] font-bold text-brand-error uppercase tracking-wider mb-3 flex items-center gap-1.5">
                {c.before.icon && <MaterialIcon name={c.before.icon} size="xs" />} {c.before.label}
              </figcaption>
              <blockquote className="text-base text-text-secondary leading-relaxed italic">
                {c.before.quote}
              </blockquote>
            </figure>
          )}
          {c?.after && (
            <figure className="text-left bg-solution-bg border border-solution-border rounded-xl p-5 relative">
              <figcaption className="text-[10px] font-bold text-brand-success uppercase tracking-wider mb-3 flex items-center gap-1.5">
                {c.after.icon && <MaterialIcon name={c.after.icon} size="xs" />} {c.after.label}
              </figcaption>
              <blockquote className="text-base text-text-primary leading-relaxed italic">
                {c.after.quote}
              </blockquote>
            </figure>
          )}
        </div>
      )}
      {c?.closingLine && (
        <p className="text-base text-text-muted leading-relaxed max-w-2xl mx-auto">
          {c.closingLine}
        </p>
      )}
    </SectionWrapper>
  );
}
