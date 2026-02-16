import { content } from "@/lib/content";
import { CTAButton } from "@/components/landing/shared/CTAButton";
import { RichTextRenderer } from "@/components/landing/shared/RichTextRenderer";
import Image from "next/image";

const c = content.heroB;

export function HeroB() {
  if (!c) return null;

  return (
    <section
      id="hero"
      data-track-section="hero"
      className="overflow-hidden scroll-mt-16"
    >
      <div className="pb-24 pt-24 md:pb-32 lg:pb-40 lg:pt-32">
        <div className="relative mx-auto flex max-w-[1120px] flex-col px-6 lg:block">
          {/* Text column */}
          <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
            {c.headline && (
              <h1 className="mt-8 max-w-2xl text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-text-primary font-display sm:text-5xl md:text-6xl lg:mt-16 xl:text-7xl">
                <RichTextRenderer segments={c.headline} />
              </h1>
            )}

            {c.subhead && (
              <p className="mt-8 max-w-2xl text-pretty text-lg text-text-secondary leading-relaxed font-sans">
                {c.subhead}
              </p>
            )}

            {c.ctas && c.ctas.length > 0 && (
              <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                {c.ctas.map((cta) => (
                  <CTAButton
                    key={cta.text}
                    href={cta.href}
                    ctaName={cta.trackingName ?? cta.text}
                    ctaLocation={cta.trackingLocation ?? "hero"}
                    variant={cta.variant}
                    icon={cta.icon}
                  >
                    {cta.text}
                  </CTAButton>
                ))}
              </div>
            )}
          </div>

          {/* Image column */}
          {c.image && (
            <div className="-z-10 order-first ml-auto lg:absolute lg:inset-0 lg:-right-20 lg:-top-48 lg:order-last lg:w-2/3">
              <Image
                className="h-56 w-full rounded-xl object-cover sm:h-96 lg:h-max lg:object-contain"
                src={c.image.src}
                alt={c.image.alt}
                height={1200}
                width={1600}
                priority
              />
            </div>
          )}
        </div>
      </div>

      {/* Social proof strip */}
      {c.socialProofLabel && (
        <div className="border-t border-border-warm bg-bg-warm pb-16 pt-12 md:pb-20">
          <div className="mx-auto max-w-[1120px] px-6">
            <p className="text-center text-sm font-medium text-text-muted lg:text-left">
              {c.socialProofLabel}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
