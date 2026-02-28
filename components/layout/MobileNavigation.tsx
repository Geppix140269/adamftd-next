"use client";

import { cn } from "@/lib/utils/cn";
import { mobileNavigationItems } from "@/lib/constants/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMobile } from "@/lib/hooks/useMediaQuery";

export function MobileNavigation() {
  const pathname = usePathname();
  const isMobile = useMobile();

  // Only show on mobile
  if (!isMobile) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[50] bg-s1 border-t border-border">
      <div className="flex justify-around items-center h-16">
        {mobileNavigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center flex-1 h-full transition-colors",
                isActive ? "text-gold" : "text-text-muted"
              )}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
