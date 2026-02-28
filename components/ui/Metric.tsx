import { cn } from "@/lib/utils/cn";
import { HTMLAttributes, forwardRef } from "react";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

export interface MetricProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string | number;
  change?: number;
  trend?: "up" | "down" | "neutral";
  changeLabel?: string;
  variant?: "default" | "gold" | "green" | "red" | "blue";
}

const Metric = forwardRef<HTMLDivElement, MetricProps>(
  (
    {
      className,
      label,
      value,
      change,
      trend = "neutral",
      changeLabel,
      variant = "default",
      ...props
    },
    ref
  ) => {
    const trendColors = {
      up: "text-green",
      down: "text-red",
      neutral: "text-text-muted",
    };

    const valueColors = {
      default: "text-white",
      gold: "text-gold-light",
      green: "text-green",
      red: "text-red",
      blue: "text-blue",
    };

    const TrendIcon = {
      up: TrendingUp,
      down: TrendingDown,
      neutral: Minus,
    }[trend];

    return (
      <div ref={ref} className={cn("", className)} {...props}>
        <div className="text-xs font-medium text-text-muted mb-2">{label}</div>
        <div
          className={cn(
            "font-heading text-3xl font-extrabold tracking-tight mb-1",
            valueColors[variant]
          )}
        >
          {value}
        </div>
        {(change !== undefined || changeLabel) && (
          <div className={cn("flex items-center gap-1.5 text-sm", trendColors[trend])}>
            {change !== undefined && (
              <>
                <TrendIcon className="w-4 h-4" />
                <span>
                  {trend === "up" ? "+" : trend === "down" ? "" : ""}
                  {change}%
                </span>
              </>
            )}
            {changeLabel && <span>{changeLabel}</span>}
          </div>
        )}
      </div>
    );
  }
);

Metric.displayName = "Metric";

export { Metric };
