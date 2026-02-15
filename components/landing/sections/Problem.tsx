import { SectionWrapper, MaterialIcon } from "@/components/landing/shared";

export function Problem() {
  return (
    <SectionWrapper id="problem" background="warm">
      <div className="text-center mb-16">
        <span className="text-brand-accent font-bold text-xs uppercase tracking-widest mb-3 block font-sans">Why your pages aren&apos;t ranking</span>
        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
          Google demands unique content. <br />
          <span className="text-text-muted">You have 500 identical pages.</span>
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
          Your directory is built. Your data is ready. But every location page needs genuinely different content — and right now, the options are painful.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">

        {/* Pain card */}
        <article className="transform -rotate-1 md:-rotate-2 bg-pain-bg rounded-2xl p-8 border-2 border-dashed border-pain-border relative opacity-[0.85] hover:opacity-100 transition-all duration-300 group origin-bottom-right">
          <div className="flex items-center gap-3 mb-6 border-b border-pain-border/40 pb-4">
            <div className="w-8 h-8 rounded bg-pain-icon-bg flex items-center justify-center text-brand-error">
              <MaterialIcon name="close" />
            </div>
            <h3 className="font-bold text-text-muted text-sm tracking-wide uppercase font-sans">Current Workflow</h3>
          </div>
          <ul className="space-y-4">
            <li className="flex gap-3 text-text-secondary text-base">
              <MaterialIcon name="remove_circle_outline" size="base" className="text-brand-accent/50 mt-0.5" />
              <span>Three weeks of copy-pasting city names into ChatGPT. Page 1 and page 47 read identically.</span>
            </li>
            <li className="flex gap-3 text-text-secondary text-base">
              <MaterialIcon name="remove_circle_outline" size="base" className="text-brand-accent/50 mt-0.5" />
              <span>Every page opens with &quot;Welcome to {"{City}"}, where you&apos;ll find...&quot; — and Google notices.</span>
            </li>
            <li className="flex gap-3 text-text-secondary text-base">
              <MaterialIcon name="remove_circle_outline" size="base" className="text-brand-accent/50 mt-0.5" />
              <span>$15,000 to freelancers who deliver the same filler with different city names swapped in.</span>
            </li>
            <li className="flex gap-3 text-text-secondary text-base">
              <MaterialIcon name="warning" size="base" className="text-brand-error/60 mt-0.5" />
              <span>You check Search Console. Most of your pages aren&apos;t even indexed. Duplicate content penalty.</span>
            </li>
          </ul>
          <div className="absolute inset-0 bg-text-secondary/5 pointer-events-none rounded-2xl mix-blend-multiply"></div>
        </article>

        {/* Solution card */}
        <article className="bg-white rounded-2xl p-10 border-2 border-brand-success shadow-2xl relative z-10 transform md:scale-105">
          <div className="flex items-center gap-3 mb-8 border-b border-border-warm pb-6">
            <div className="w-10 h-10 rounded-lg bg-brand-success flex items-center justify-center text-white shadow-lg shadow-green-100">
              <MaterialIcon name="auto_awesome" size="xl" />
            </div>
            <div>
              <h3 className="font-bold text-text-primary text-lg font-sans">With Seoscribed</h3>
              <p className="text-xs text-text-muted">The Local Context Engine</p>
            </div>
          </div>
          <ul className="space-y-5">
            <li className="flex gap-4 items-start">
              <span className="inline-block mt-0.5 bg-success-light p-0.5 rounded-full text-brand-success">
                <MaterialIcon name="check" className="font-bold block" />
              </span>
              <span className="text-text-primary text-base font-medium">Upload CSV, generate 500 pages instantly.</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="inline-block mt-0.5 bg-success-light p-0.5 rounded-full text-brand-success">
                <MaterialIcon name="check" className="font-bold block" />
              </span>
              <span className="text-text-primary text-base font-medium">Location-aware context (landmarks, facts).</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="inline-block mt-0.5 bg-success-light p-0.5 rounded-full text-brand-success">
                <MaterialIcon name="check" className="font-bold block" />
              </span>
              <span className="text-text-primary text-base font-medium">Built-in uniqueness scoring per page.</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="inline-block mt-0.5 bg-success-light p-0.5 rounded-full text-brand-success">
                <MaterialIcon name="check" className="font-bold block" />
              </span>
              <span className="text-text-primary text-base font-medium">Done in under 1 hour. Free during beta.</span>
            </li>
          </ul>
        </article>

      </div>
    </SectionWrapper>
  );
}
