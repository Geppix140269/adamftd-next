import { cn } from "@/lib/utils/cn";
import { HTMLAttributes, forwardRef } from "react";

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number; // 0-100
  variant?: "gold" | "green" | "blue" | "red" | "amber";
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  label?: string;
}

const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      className,
      value,
      variant = "gold",
      size = "md",
      showLabel = false,
      label,
      ...props
    },
    ref
  ) => {
    // Ensure value is between 0 and 100
    const clampedValue = Math.min(Math.max(value, 0), 100);

    const trackStyles = {
      sm: "h-1",
      md: "h-1.5",
      lg: "h-2",
    };

    const fillColors = {
      gold: "bg-gold",
      green: "bg-green",
      blue: "bg-blue",
      red: "bg-red",
      amber: "bg-amber",
    };

    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        {(showLabel || label) && (
          <div className="flex items-center justify-between mb-2">
            {label && (
              <span className="text-xs font-medium text-text-muted">
                {label}
              </span>
            )}
            {showLabel && (
              <span className="text-xs font-semibold text-text-secondary">
                {clampedValue}%
              </span>
            )}
          </div>
        )}
        <div
          className={cn(
            "w-full bg-s3 rounded-full overflow-hidden",
            trackStyles[size]
          )}
        >
          <div
            className={cn(
              "h-full rounded-full transition-all duration-300 ease-out",
              fillColors[variant]
            )}
            style={{ width: `${clampedValue}%` }}
          />
        </div>
      </div>
    );
  }
);

Progress.displayName = "Progress";

export { Progress };
