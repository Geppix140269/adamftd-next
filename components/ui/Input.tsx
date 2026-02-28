import { cn } from "@/lib/utils/cn";
import { InputHTMLAttributes, forwardRef } from "react";
import { LucideIcon } from "lucide-react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: LucideIcon;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon: Icon, type = "text", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-semibold text-text-secondary mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          {Icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <Icon className="w-4 h-4 text-text-muted" />
            </div>
          )}
          <input
            type={type}
            ref={ref}
            className={cn(
              "w-full bg-s2 border border-border rounded-lg py-3 font-outfit text-base text-text-primary",
              "outline-none transition-colors duration-200",
              "focus:border-gold focus:ring-1 focus:ring-gold/30",
              "placeholder:text-text-muted",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              error && "border-red focus:border-red focus:ring-red/30",
              Icon ? "pl-11 pr-4" : "px-4",
              className
            )}
            {...props}
          />
        </div>
        {error && <p className="mt-2 text-sm text-red">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
