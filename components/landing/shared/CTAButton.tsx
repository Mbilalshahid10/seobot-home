import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/button";
import { MaterialIcon } from "./MaterialIcon";

interface CTAButtonProps {
  href: string;
  ctaName: string;
  ctaLocation: string;
  variant?: "default" | "outline";
  icon?: string;
  className?: string;
  children: React.ReactNode;
}

export function CTAButton({
  href,
  ctaName,
  ctaLocation,
  variant = "default",
  icon,
  className,
  children,
}: CTAButtonProps) {
  return (
    <Button
      asChild
      variant={variant}
      className={cn("rounded-lg px-8 py-3.5 font-semibold", className)}
    >
      <a
        href={href}
        data-cta-name={ctaName}
        data-cta-location={ctaLocation}
      >
        {children}
        {icon && <MaterialIcon name={icon} size="sm" />}
      </a>
    </Button>
  );
}
