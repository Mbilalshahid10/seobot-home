'use client'

import { content } from "@/lib/content";
import { SectionWrapper, SectionHeader, CTAButton } from "@/components/landing/shared";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const c = content.faq;

export function FAQ() {
  if (!c) return null;

  return (
    <SectionWrapper id="faq" background="warm" maxWidth="narrow">
      <SectionHeader
        eyebrow={c.eyebrow ?? ""}
        heading={<>{c.headline}</>}
      />
      <Accordion type="single" collapsible className="space-y-4">
        {c.items.map((item, index) => {
          const number = String(index + 1);
          return (
            <AccordionItem
              key={number}
              value={`faq-${number}`}
              className="bg-white border border-border-warm rounded-lg px-6"
            >
              <AccordionTrigger className="hover:no-underline gap-4">
                <span className="flex gap-4 items-center text-left">
                  <span className="text-brand-accent font-bold text-base">{number}</span>
                  <span className="font-bold text-text-primary text-base font-sans">{item.question}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-base text-text-secondary leading-relaxed pl-8">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>

      {c.cta && (
        <div className="mt-12 text-center">
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
    </SectionWrapper>
  );
}
