import { SectionWrapper, MaterialIcon } from "@/components/landing/shared";
import { Badge } from "@/components/ui/badge";

export function Mechanism() {
  return (
    <SectionWrapper id="mechanism" background="white" maxWidth="narrow" className="py-24" innerClassName="text-center">
      <Badge variant="accent" className="gap-2 px-4 py-1.5 font-bold uppercase tracking-wider mb-8">
        <MaterialIcon name="memory" />
        The Local Context Engine
      </Badge>
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
        Why it works when ChatGPT doesn&apos;t.
      </h2>
      <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
        ChatGPT writes from its training data. Feed it 500 cities and you get 500 versions of the same generic paragraph. Seoscribed&apos;s <span className="font-semibold text-text-primary">Local Context Engine</span> researches each location individually — pulling real neighborhoods, landmarks, demographic data, local institutions, and market stats — then weaves them into content that reads like it was written by someone who actually lives there.
      </p>

      {/* Before / After */}
      <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
        <figure className="text-left bg-pain-bg border border-pain-border rounded-xl p-5 relative">
          <figcaption className="text-[10px] font-bold text-brand-error uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <MaterialIcon name="close" size="xs" /> ChatGPT Output — Austin, TX
          </figcaption>
          <blockquote className="text-base text-text-secondary leading-relaxed italic">
            &quot;Welcome to Austin, TX, where you&apos;ll find a wide range of quality dental providers. Austin is known for its vibrant culture and growing population. Whether you need a routine cleaning or cosmetic dentistry, Austin has many great options to choose from...&quot;
          </blockquote>
        </figure>
        <figure className="text-left bg-solution-bg border border-solution-border rounded-xl p-5 relative">
          <figcaption className="text-[10px] font-bold text-brand-success uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <MaterialIcon name="check" size="xs" /> Seoscribed Output — Austin, TX
          </figcaption>
          <blockquote className="text-base text-text-primary leading-relaxed italic">
            &quot;From Austin&apos;s vibrant South Congress district to family practices expanding near Round Rock and Cedar Park, the city&apos;s 964,000 residents have access to a growing network fueled by UT Austin&apos;s dental school pipeline...&quot;
          </blockquote>
        </figure>
      </div>
      <p className="text-base text-text-muted leading-relaxed max-w-2xl mx-auto">
        Same city. Same prompt. Completely different output — because one researched, the other guessed.
      </p>
    </SectionWrapper>
  );
}
