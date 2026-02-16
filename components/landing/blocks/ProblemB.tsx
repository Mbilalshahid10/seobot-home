import { content } from "@/lib/content";
import { SectionWrapper, MaterialIcon, RichTextRenderer } from "@/components/landing/shared";

const c = content.problem;

export function ProblemB() {
  if (!c) return null;

  return (
    <SectionWrapper id="problem" background="warm">
      {/* Header */}
      <div className="text-center mb-16">
        {c.eyebrow && (
          <span className="text-brand-accent font-bold text-xs uppercase tracking-widest mb-3 block font-sans">
            {c.eyebrow}
          </span>
        )}
        {c.headline && (
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            <RichTextRenderer segments={c.headline} />
          </h2>
        )}
        {c.description && (
          <p className="text-text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
            {c.description}
          </p>
        )}
      </div>

      {/* Two-column: numbered pain list + solution card */}
      <div className="grid md:grid-cols-5 gap-10 items-start max-w-5xl mx-auto">
        {/* Left 3/5 — pain items as numbered list */}
        {c.painCard && (
          <div className="md:col-span-3">
            {c.painCard.title && (
              <div className="flex items-center gap-3 mb-8">
                {c.painCard.icon && (
                  <div className="w-8 h-8 rounded bg-pain-icon-bg flex items-center justify-center text-brand-error">
                    <MaterialIcon name={c.painCard.icon} />
                  </div>
                )}
                <h3 className="font-bold text-text-muted text-sm tracking-wide uppercase font-sans">
                  {c.painCard.title}
                </h3>
              </div>
            )}
            <ol className="space-y-6">
              {c.painCard.items.map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-pain-bg border border-pain-border flex items-center justify-center text-sm font-bold text-brand-error">
                    {i + 1}
                  </span>
                  <p className="text-text-secondary text-base leading-relaxed pt-1">
                    {item.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Right 2/5 — solution card */}
        {c.solutionCard && (
          <div className="md:col-span-2">
            <article className="bg-white rounded-2xl p-8 border-2 border-brand-success shadow-xl">
              <div className="flex items-center gap-3 mb-6 border-b border-border-warm pb-4">
                {c.solutionCard.icon && (
                  <div className="w-10 h-10 rounded-lg bg-brand-success flex items-center justify-center text-white shadow-lg shadow-green-100">
                    <MaterialIcon name={c.solutionCard.icon} size="xl" />
                  </div>
                )}
                <div>
                  {c.solutionCard.title && (
                    <h3 className="font-bold text-text-primary text-lg font-sans">
                      {c.solutionCard.title}
                    </h3>
                  )}
                  {c.solutionCard.subtitle && (
                    <p className="text-xs text-text-muted">{c.solutionCard.subtitle}</p>
                  )}
                </div>
              </div>
              <ul className="space-y-4">
                {c.solutionCard.items.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    {item.icon && (
                      <span className="inline-block mt-0.5 bg-success-light p-0.5 rounded-full text-brand-success">
                        <MaterialIcon name={item.icon} className="font-bold block" />
                      </span>
                    )}
                    <span className="text-text-primary text-base font-medium">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
