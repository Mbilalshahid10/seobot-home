import { content } from "@/lib/content";
import { SectionWrapper, CTAButton } from "@/components/landing/shared";

const c = content.faq;

export function FAQB() {
  if (!c) return null;

  return (
    <SectionWrapper id="faq" background="warm">
      <div className="md:flex gap-12">
        {/* Left column — sticky heading + CTA */}
        <div className="md:w-1/3 mb-10 md:mb-0 lg:sticky lg:top-24 lg:self-start">
          {c.eyebrow && (
            <span className="text-brand-accent font-bold text-xs uppercase tracking-widest mb-3 block font-sans">
              {c.eyebrow}
            </span>
          )}
          {c.headline && (
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              {c.headline}
            </h2>
          )}
          {c.cta && (
            <CTAButton
              href={c.cta.href}
              ctaName={c.cta.trackingName ?? c.cta.text}
              ctaLocation={c.cta.trackingLocation ?? "faq"}
              icon={c.cta.icon}
            >
              {c.cta.text}
            </CTAButton>
          )}
        </div>

        {/* Right column — all Q&A visible */}
        <dl className="md:w-2/3 space-y-0">
          {c.items.map((item, i) => (
            <div
              key={i}
              className={
                i < c.items.length - 1
                  ? "py-6 border-b border-dashed border-border-warm"
                  : "py-6"
              }
            >
              <dt className="font-bold text-text-primary text-base font-sans mb-2">
                {item.question}
              </dt>
              <dd className="text-text-secondary text-base leading-relaxed">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </SectionWrapper>
  );
}
