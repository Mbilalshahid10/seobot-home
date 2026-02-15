import { cn } from "@/utils/cn";

const bgMap = {
  warm: "bg-bg-warm",
  white: "bg-white border-b border-border-warm",
  dark: "bg-dark-bg text-white",
} as const;

const maxWidthMap = {
  narrow: "max-w-3xl",
  default: "max-w-[1120px]",
} as const;

interface SectionWrapperProps {
  id: string;
  trackSection?: string;
  background?: keyof typeof bgMap;
  maxWidth?: keyof typeof maxWidthMap;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
}

export function SectionWrapper({
  id,
  trackSection,
  background = "warm",
  maxWidth = "default",
  className,
  innerClassName,
  children,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      data-track-section={trackSection ?? id}
      className={cn(
        "py-28 overflow-hidden scroll-mt-16",
        bgMap[background],
        className
      )}
    >
      <div
        className={cn(
          "mx-auto px-6",
          maxWidthMap[maxWidth],
          innerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
