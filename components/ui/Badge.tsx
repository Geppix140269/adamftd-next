import { cn } from "@/lib/utils/cn";
import { HTMLAttributes, forwardRef } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "ok" | "warn" | "risk" | "grey" | "blue";
  children?: React.ReactNode;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "grey", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded border";

    const variants = {
      ok: "bg-green-dark text-green border-green/20",
      warn: "bg-amber-dark text-amber border-amber/20",
      risk: "bg-red-dark text-red border-red/20",
      grey: "bg-s2 text-text-muted border-border",
      blue: "bg-blue-dark text-blue border-blue/20",
    };

    const icons = {
      ok: "✓",
      warn: "⚠",
      risk: "✕",
      grey: "",
      blue: "ⓘ",
    };

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {icons[variant] && <span>{icons[variant]}</span>}
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
