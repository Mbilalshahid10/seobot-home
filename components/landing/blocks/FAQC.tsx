'use client'

import { content } from "@/lib/content";
import { SectionWrapper, CTAButton, MaterialIcon } from "@/components/landing/shared";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const c = content.faq;

export function FAQC() {
  if (!c) return null;

  return (
    <SectionWrapper id="faq" background="warm">
      <div className="md:flex gap-12">
        {/* Left column — sticky sidebar */}
        <div className="md:w-1/3 mb-10 md:mb-0 lg:sticky lg:top-24 lg:self-start">
          {c.eyebrow && (
            <span className="text-brand-accent font-bold text-xs uppercase tracking-widest mb-3 block font-sans">
              {c.eyebrow}
            </span>
          )}
          {c.headline && (
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              {c.headline}
            </h2>
          )}
          {c.supportText && (
            <p className="text-text-secondary text-base leading-relaxed mb-4">
              {c.supportText}
            </p>
          )}
          {c.supportLink && (
            <a
              href={c.supportLink.href}
              className="text-brand-accent hover:text-brand-accent-hover text-sm font-medium underline underline-offset-2 mb-6 inline-block"
              data-cta-name={c.supportLink.text}
              data-cta-location="faq"
            >
              {c.supportLink.text}
            </a>
          )}
          {c.cta && (
            <div className="mt-4">
              <CTAButton
                href={c.cta.href}
                ctaName={c.cta.trackingName ?? c.cta.text}
                ctaLocation={c.cta.trackingLocation ?? "faq"}
                icon={c.cta.icon}
              >
                {c.cta.text}
              </CTAButton>
            </div>
          )}
        </div>

        {/* Right column — icon-prefixed accordion */}
        <div className="md:w-2/3">
          <Accordion type="single" collapsible className="space-y-4">
            {c.items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-white border border-border-warm rounded-lg px-6"
              >
                <AccordionTrigger className="hover:no-underline gap-4">
                  <span className="flex gap-3 items-center text-left">
                    {item.icon && (
                      <MaterialIcon
                        name={item.icon}
                        size="base"
                        className="text-brand-accent flex-shrink-0"
                      />
                    )}
                    <span className="font-bold text-text-primary text-base font-sans">
                      {item.question}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-text-secondary leading-relaxed pl-8">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </SectionWrapper>
  );
}
