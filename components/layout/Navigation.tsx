"use client";

import { cn } from "@/lib/utils/cn";
import { navigationItems } from "@/lib/constants/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMobile } from "@/lib/hooks/useMediaQuery";

export function Navigation() {
  const pathname = usePathname();
  const isMobile = useMobile();

  // Hide navigation on mobile (use bottom nav instead)
  if (isMobile) return null;

  return (
    <nav className="flex bg-s1 border-b border-border px-8 overflow-x-auto scrollbar-thin scrollbar-thumb-gold scrollbar-track-s2">
      {navigationItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "relative px-4.5 py-3.25 text-sm font-medium whitespace-nowrap border-b-2 transition-all duration-200 select-none",
              isActive
                ? "text-gold-light border-gold"
                : "text-text-muted border-transparent hover:text-text-secondary"
            )}
          >
            {item.label}
            {item.isNew && (
              <span className="ml-1.5 text-[9px] font-bold tracking-wider bg-gold text-bg rounded-sm px-1.25 py-0.5 align-middle">
                NEW
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
