import { content } from "@/lib/content";
import { SectionWrapper, MaterialIcon, RichTextRenderer } from "@/components/landing/shared";

const c = content.problem;

export function Problem() {
  return (
    <SectionWrapper id="problem" background="warm">
      <div className="text-center mb-16">
        {c?.eyebrow && (
          <span className="text-brand-accent font-bold text-xs uppercase tracking-widest mb-3 block font-sans">{c.eyebrow}</span>
        )}
        {c?.headline && (
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            <RichTextRenderer segments={c.headline} />
          </h2>
        )}
        {c?.description && (
          <p className="text-text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
            {c.description}
          </p>
        )}
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">

        {/* Pain card */}
        {c?.painCard && (
          <article className="transform -rotate-1 md:-rotate-2 bg-pain-bg rounded-2xl p-8 border-2 border-dashed border-pain-border relative opacity-[0.85] hover:opacity-100 transition-all duration-300 group origin-bottom-right">
            <div className="flex items-center gap-3 mb-6 border-b border-pain-border/40 pb-4">
              {c.painCard.icon && (
                <div className="w-8 h-8 rounded bg-pain-icon-bg flex items-center justify-center text-brand-error">
                  <MaterialIcon name={c.painCard.icon} />
                </div>
              )}
              {c.painCard.title && (
                <h3 className="font-bold text-text-muted text-sm tracking-wide uppercase font-sans">{c.painCard.title}</h3>
              )}
            </div>
            <ul className="space-y-4">
              {c.painCard.items.map((item, i) => (
                <li key={i} className="flex gap-3 text-text-secondary text-base">
                  {item.icon && (
                    <MaterialIcon
                      name={item.icon}
                      size="base"
                      className={item.icon === "warning" ? "text-brand-error/60 mt-0.5" : "text-brand-accent/50 mt-0.5"}
                    />
                  )}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="absolute inset-0 bg-text-secondary/5 pointer-events-none rounded-2xl"></div>
          </article>
        )}

        {/* Solution card */}
        {c?.solutionCard && (
          <article className="bg-white rounded-2xl p-10 border-2 border-brand-success shadow-2xl relative z-10 transform md:scale-105">
            <div className="flex items-center gap-3 mb-8 border-b border-border-warm pb-6">
              {c.solutionCard.icon && (
                <div className="w-10 h-10 rounded-lg bg-brand-success flex items-center justify-center text-white shadow-lg shadow-green-100">
                  <MaterialIcon name={c.solutionCard.icon} size="xl" />
                </div>
              )}
              <div>
                {c.solutionCard.title && (
                  <h3 className="font-bold text-text-primary text-lg font-sans">{c.solutionCard.title}</h3>
                )}
                {c.solutionCard.subtitle && (
                  <p className="text-xs text-text-muted">{c.solutionCard.subtitle}</p>
                )}
              </div>
            </div>
            <ul className="space-y-5">
              {c.solutionCard.items.map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  {item.icon && (
                    <span className="inline-block mt-0.5 bg-success-light p-0.5 rounded-full text-brand-success">
                      <MaterialIcon name={item.icon} className="font-bold block" />
                    </span>
                  )}
                  <span className="text-text-primary text-base font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
          </article>
        )}

      </div>
    </SectionWrapper>
  );
}
