import { cn } from "@/lib/utils/cn";
import { HTMLAttributes, forwardRef } from "react";

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "gold" | "green" | "red" | "blue" | "amber" | "purple";
  size?: "sm" | "md";
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const Tag = forwardRef<HTMLSpanElement, TagProps>(
  (
    { className, variant = "default", size = "md", icon, children, ...props },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center gap-1.5 font-medium rounded-full border";

    const variants = {
      default: "bg-s2 border-border text-text-secondary",
      gold: "bg-gold-dark border-gold/20 text-gold-light",
      green: "bg-green-dark border-green/20 text-green",
      red: "bg-red-dark border-red/20 text-red",
      blue: "bg-blue-dark border-blue/20 text-blue",
      amber: "bg-amber-dark border-amber/20 text-amber",
      purple: "bg-purple-dark border-purple/20 text-purple",
    };

    const sizes = {
      sm: "px-2.5 py-1 text-xs",
      md: "px-3.5 py-1.5 text-sm",
    };

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </span>
    );
  }
);

Tag.displayName = "Tag";

export { Tag };
