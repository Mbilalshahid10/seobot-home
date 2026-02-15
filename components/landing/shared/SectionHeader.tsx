import { cn } from "@/utils/cn";

interface SectionHeaderProps {
  eyebrow: string;
  heading: React.ReactNode;
  description?: React.ReactNode;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  heading,
  description,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <header className={cn("mb-16", centered && "text-center", className)}>
      <span className="text-brand-accent font-bold text-xs uppercase tracking-widest mb-3 block font-sans">
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
        {heading}
      </h2>
      {description && (
        <p className="text-text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
          {description}
        </p>
      )}
    </header>
  );
}
