import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils/cn"

const inputVariants = cva(
  "flex w-full rounded-md border text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      variant: {
        default:
          "h-10 px-3 py-2 border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring",
        dark:
          "px-5 py-4 bg-dark-bg border-dark-input-border text-white placeholder-text-secondary focus:ring-brand-accent focus:border-transparent transition-all",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface InputProps
  extends Omit<React.ComponentProps<"input">, "size">,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input, inputVariants }
