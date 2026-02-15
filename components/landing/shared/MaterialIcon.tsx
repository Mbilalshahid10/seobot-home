import { cn } from "@/utils/cn";

const sizeMap = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
} as const;

interface MaterialIconProps {
  name: string;
  size?: keyof typeof sizeMap;
  className?: string;
}

export function MaterialIcon({
  name,
  size = "sm",
  className,
}: MaterialIconProps) {
  return (
    <span className={cn("material-icons-outlined", sizeMap[size], className)}>
      {name}
    </span>
  );
}
