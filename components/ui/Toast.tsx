"use client";

import { cn } from "@/lib/utils/cn";
import { useToast } from "@/lib/hooks/useToast";
import { CheckCircle2, AlertCircle, AlertTriangle, Info, X } from "lucide-react";

export function ToastContainer() {
  const { toasts, removeToast } = useToast();

  const icons = {
    success: CheckCircle2,
    error: AlertCircle,
    warning: AlertTriangle,
    info: Info,
  };

  const styles = {
    success: "bg-green-dark border-green/20 text-green",
    error: "bg-red-dark border-red/20 text-red",
    warning: "bg-amber-dark border-amber/20 text-amber",
    info: "bg-blue-dark border-blue/20 text-blue",
  };

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-7 right-7 z-[500] flex flex-col gap-3 max-w-sm">
      {toasts.map((toast) => {
        const Icon = icons[toast.type];

        return (
          <div
            key={toast.id}
            className={cn(
              "slide-in-right flex items-start gap-3 p-4 rounded-lg border shadow-modal backdrop-blur-sm",
              styles[toast.type]
            )}
          >
            <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              {toast.title && (
                <div className="font-semibold text-sm mb-0.5">
                  {toast.title}
                </div>
              )}
              <div className="text-sm text-text-secondary">{toast.message}</div>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="flex-shrink-0 text-text-muted hover:text-text-primary transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
