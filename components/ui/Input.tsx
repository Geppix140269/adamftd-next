import { cn } from "@/lib/utils/cn";
import { InputHTMLAttributes, forwardRef } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, type = "text", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-semibold text-text-secondary mb-2">
            {label}
          </label>
        )}
        <input
          type={type}
          ref={ref}
          className={cn(
            "w-full bg-s2 border border-border rounded-lg px-4 py-3 font-outfit text-base text-text-primary",
            "outline-none transition-colors duration-200",
            "focus:border-gold focus:ring-1 focus:ring-gold/30",
            "placeholder:text-text-muted",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            error && "border-red focus:border-red focus:ring-red/30",
            className
          )}
          {...props}
        />
        {error && <p className="mt-2 text-sm text-red">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
