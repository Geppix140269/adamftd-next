import { cn } from "@/lib/utils/cn";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "ghost" | "accent" | "green" | "blue" | "link";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "gold",
      size = "md",
      isLoading = false,
      icon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2.5 font-outfit font-bold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 focus:ring-offset-bg";

    const variants = {
      gold: "bg-gold text-bg hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(232,164,36,0.28)] active:translate-y-0",
      ghost:
        "bg-s2 border border-border text-text-secondary hover:border-border-light hover:text-text-primary",
      accent:
        "bg-gold-dark border border-gold text-gold-light hover:bg-[rgba(232,164,36,0.18)]",
      green:
        "bg-green-dark border border-green text-green hover:bg-[rgba(0,204,144,0.15)]",
      blue: "bg-blue-dark border border-blue text-blue hover:bg-[rgba(64,144,255,0.15)]",
      link: "text-gold-light underline-offset-2 hover:underline",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs",
      md: "px-5 py-2.5 text-sm",
      lg: "px-7 py-3 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          variant !== "link" && sizes[size],
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </>
        ) : (
          <>
            {icon && <span className="flex-shrink-0">{icon}</span>}
            {children}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
