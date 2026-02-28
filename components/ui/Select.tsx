import { cn } from "@/lib/utils/cn";
import { SelectHTMLAttributes, forwardRef } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  children?: React.ReactNode;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, children, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-semibold text-text-secondary mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            className={cn(
              "w-full bg-s2 border border-border rounded-lg px-4 py-3 pr-10 font-outfit text-base text-text-primary appearance-none cursor-pointer",
              "outline-none transition-colors duration-200",
              "focus:border-gold focus:ring-1 focus:ring-gold/30",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              error && "border-red focus:border-red focus:ring-red/30",
              className
            )}
            {...props}
          >
            {children}
          </select>
          {/* Custom dropdown arrow */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L6 5.5L11 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-text-muted"
              />
            </svg>
          </div>
        </div>
        {error && <p className="mt-2 text-sm text-red">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";

export { Select };
