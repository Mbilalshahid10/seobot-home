'use client'

import { SectionWrapper, SectionHeader, CTAButton } from "@/components/landing/shared";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqItems = [
  {
    number: "1",
    question: "How is this different from ChatGPT?",
    answer:
      "ChatGPT generates one page at a time. Loop it with a script and every page still sounds the same. Seoscribed pulls real local context \u2014 landmarks, neighborhoods, demographics \u2014 to make each page genuinely distinct.",
  },
  {
    number: "2",
    question: "Will Google flag AI-generated content?",
    answer:
      "Google penalizes duplicate content, not AI content itself. Every page gets a uniqueness score before publish. If any page is too similar to another, you\u2019ll see it first.",
  },
  {
    number: "3",
    question: "Can I see a sample before I decide?",
    answer:
      "Yes. Every founding member gets a free sample page generated for their niche within 24 hours of signing up. If the output doesn\u2019t meet your standard, no commitment \u2014 you\u2019re in beta, not a contract.",
  },
];

export function FAQ() {
  return (
    <SectionWrapper id="faq" background="warm" maxWidth="narrow">
      <SectionHeader
        eyebrow="Before you commit"
        heading={<>Answers to what you&apos;re already thinking.</>}
      />
      <Accordion type="single" collapsible className="space-y-4">
        {faqItems.map((item) => (
          <AccordionItem
            key={item.number}
            value={`faq-${item.number}`}
            className="bg-white border border-border-warm rounded-lg px-6"
          >
            <AccordionTrigger className="hover:no-underline gap-4">
              <span className="flex gap-4 items-center text-left">
                <span className="text-brand-accent font-bold text-base">{item.number}</span>
                <span className="font-bold text-text-primary text-base font-sans">{item.question}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-base text-text-secondary leading-relaxed pl-8">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-12 text-center">
        <CTAButton
          href="#get-access"
          ctaName="Get Free Beta Access"
          ctaLocation="faq"
          icon="arrow_forward"
        >
          Get Free Beta Access
        </CTAButton>
      </div>
    </SectionWrapper>
  );
}
