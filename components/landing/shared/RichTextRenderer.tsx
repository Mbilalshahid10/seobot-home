import { cn } from "@/utils/cn";
import type { RichText, StyledSegment } from "@/lib/content";

const styleMap: Record<StyledSegment["style"], string> = {
  gradient: "text-gradient italic",
  muted: "text-text-muted",
  accent: "text-brand-accent",
  strong: "font-semibold text-text-primary",
};

export function RichTextRenderer({
  segments,
  className,
}: {
  segments: RichText;
  className?: string;
}) {
  return (
    <span className={className}>
      {segments.map((segment, i) => {
        if (typeof segment === "string") {
          // Split on "\n" to insert <br /> elements
          const parts = segment.split("\n");
          return parts.map((part, j) => (
            <span key={`${i}-${j}`}>
              {part}
              {j < parts.length - 1 && <br />}
            </span>
          ));
        }
        return (
          <span key={i} className={cn(styleMap[segment.style])}>
            {segment.text}
          </span>
        );
      })}
    </span>
  );
}
