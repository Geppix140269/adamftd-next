import { cn } from "@/lib/utils/cn";
import { HTMLAttributes, forwardRef } from "react";
import { TrendingUp, TrendingDown, Minus, LucideIcon } from "lucide-react";

export interface MetricProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string | number;
  change?: number;
  trend?: "up" | "down" | "neutral";
  changeLabel?: string;
  trendValue?: string;
  subtext?: string;
  variant?: "default" | "gold" | "green" | "red" | "blue";
  icon?: LucideIcon;
  iconColor?: string;
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
      trendValue,
      subtext,
      variant = "default",
      icon: Icon,
      iconColor,
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
        <div className="flex items-center justify-between mb-2">
          <div className="text-xs font-medium text-text-muted">{label}</div>
          {Icon && (
            <Icon className={cn("w-4 h-4", iconColor || "text-text-muted")} />
          )}
        </div>
        <div
          className={cn(
            "font-heading text-3xl font-extrabold tracking-tight",
            valueColors[variant]
          )}
        >
          {value}
        </div>
        {subtext && (
          <div className="text-xs text-text-muted mt-1">{subtext}</div>
        )}
        {(change !== undefined || changeLabel || trendValue) && (
          <div className={cn("flex items-center gap-1.5 text-sm mt-1", trendColors[trend])}>
            {(change !== undefined || trendValue) && (
              <>
                <TrendIcon className="w-4 h-4" />
                <span>
                  {trendValue || `${trend === "up" ? "+" : trend === "down" ? "" : ""}${change}%`}
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
