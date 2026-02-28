"use client";

import { cn } from "@/lib/utils/cn";
import { X } from "lucide-react";
import { useEffect } from "react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  className,
}: ModalProps) {
  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm fade-in"
      onClick={onClose}
    >
      <div
        className={cn(
          "relative bg-s1 border border-b2 rounded-2xl p-8 max-w-md w-[90%] shadow-modal fade-up",
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-text-muted hover:text-text-primary transition-colors text-2xl leading-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        {title && (
          <h2 className="font-heading text-2xl font-extrabold text-white mb-2">
            {title}
          </h2>
        )}

        {/* Description */}
        {description && (
          <p className="text-sm text-text-secondary mb-6 leading-relaxed">
            {description}
          </p>
        )}

        {/* Content */}
        {children}
      </div>
    </div>
  );
}
