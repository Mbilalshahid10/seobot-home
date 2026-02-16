import { content } from "@/lib/content";
import { SectionWrapper, SectionHeader, MaterialIcon } from "@/components/landing/shared";

const c = content.problem;

export function ProblemC() {
  if (!c) return null;

  return (
    <SectionWrapper id="problem" background="white">
      {c.eyebrow && c.headline && (
        <SectionHeader
          eyebrow={c.eyebrow}
          heading={
            <span className="text-3xl md:text-4xl font-bold text-text-primary">
              {c.headline.map((segment, i) =>
                typeof segment === "string" ? (
                  segment.split("\n").map((part, j) => (
                    <span key={`${i}-${j}`}>
                      {part}
                      {j < segment.split("\n").length - 1 && <br />}
                    </span>
                  ))
                ) : (
                  <span
                    key={i}
                    className={
                      segment.style === "gradient"
                        ? "text-gradient italic"
                        : segment.style === "muted"
                          ? "text-text-muted"
                          : segment.style === "accent"
                            ? "text-brand-accent"
                            : "font-semibold text-text-primary"
                    }
                  >
                    {segment.text}
                  </span>
                )
              )}
            </span>
          }
          description={c.description}
        />
      )}

      {/* Pain items as full-width strips */}
      {c.painCard && (
        <div className="space-y-0 mb-12">
          {c.painCard.items.map((item, i) => (
            <div
              key={i}
              className={`flex items-start gap-4 px-6 py-5 ${
                i % 2 === 0 ? "bg-bg-warm" : "bg-white"
              } ${i === 0 ? "rounded-t-xl" : ""} ${
                i === c.painCard!.items.length - 1 ? "rounded-b-xl" : ""
              }`}
            >
              {item.icon && (
                <MaterialIcon
                  name={item.icon}
                  size="base"
                  className={
                    item.icon === "warning"
                      ? "text-brand-error mt-0.5"
                      : "text-brand-accent/60 mt-0.5"
                  }
                />
              )}
              <p className="text-text-secondary text-base leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Solution summary at bottom */}
      {c.solutionCard && (
        <div className="border-2 border-brand-success rounded-2xl p-8 md:p-10 bg-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex items-center gap-4">
              {c.solutionCard.icon && (
                <div className="w-12 h-12 rounded-lg bg-brand-success flex items-center justify-center text-white shadow-lg shadow-green-100">
                  <MaterialIcon name={c.solutionCard.icon} size="xl" />
                </div>
              )}
              <div>
                {c.solutionCard.title && (
                  <h3 className="font-bold text-text-primary text-xl font-sans">
                    {c.solutionCard.title}
                  </h3>
                )}
                {c.solutionCard.subtitle && (
                  <p className="text-sm text-text-muted">{c.solutionCard.subtitle}</p>
                )}
              </div>
            </div>
            <ul className="space-y-3">
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
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
