"use client";

import { useState } from "react";
import { cn } from "@/lib/utils/cn";
import { useToast } from "@/lib/hooks/useToast";
import { Package2, Bell, User, Settings, LogOut, CreditCard } from "lucide-react";
import Link from "next/link";

export function Header() {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const { toast } = useToast();

  const user = {
    name: "Adam Rashid",
    email: "adam@example.com",
    initials: "AR",
    credits: 340,
    tier: "pro" as const,
  };

  return (
    <header className="sticky top-0 z-[200] bg-bg/96 backdrop-blur-xl border-b border-border h-[58px] flex items-center px-8 gap-4">
      {/* Logo */}
      <Link href="/mission-control" className="flex-shrink-0">
        <div className="font-heading font-extrabold text-xl tracking-tight text-white whitespace-nowrap">
          ADAM<span className="text-gold">ftd</span>
        </div>
      </Link>

      {/* Session Info */}
      <div className="hidden md:flex text-xs text-text-muted bg-s2 border border-border px-3 py-1 rounded-md">
        Last session:{" "}
        <strong className="text-text-secondary ml-1">
          Polypropylene · Turkey
        </strong>
      </div>

      {/* Credits Display */}
      <button
        onClick={() =>
          toast.info(
            `You have ${user.credits} credits remaining. Upgrade to Pro for unlimited access.`,
            "Credits"
          )
        }
        className="hidden md:flex items-center gap-2 ml-1 text-xs text-text-secondary bg-s2 border border-border px-3.5 py-1 rounded-full transition-colors hover:border-gold cursor-pointer"
      >
        <span className="text-text-muted">Credits</span>
        <span className="font-mono font-semibold text-gold-light">
          {user.credits}
        </span>
      </button>

      {/* Signal Notifications */}
      <button
        onClick={() => toast.info("You have 3 new buyer signals", "Signals")}
        className="hidden md:flex items-center gap-2 ml-auto text-xs text-amber cursor-pointer hover:text-amber-light transition-colors"
      >
        <div className="pulse w-1.5 h-1.5 rounded-full bg-amber" />3 new buyer
        signals
      </button>

      {/* Profile Dropdown */}
      <div className="relative ml-auto md:ml-3.5">
        <button
          onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
          className={cn(
            "w-[34px] h-[34px] rounded-full bg-gradient-to-br from-gold to-[#f0a020] flex items-center justify-center font-heading font-extrabold text-sm text-bg border-2 transition-colors flex-shrink-0",
            profileDropdownOpen ? "border-gold" : "border-transparent"
          )}
        >
          {user.initials}
        </button>

        {/* Dropdown Menu */}
        {profileDropdownOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-[300]"
              onClick={() => setProfileDropdownOpen(false)}
            />

            {/* Dropdown */}
            <div className="absolute top-[calc(100%+10px)] right-0 w-[220px] bg-s1 border border-b2 rounded-xl shadow-modal z-[400] overflow-hidden fade-up">
              {/* User Info */}
              <div className="px-4 py-3.5 bg-s2 border-b border-border">
                <div className="font-bold text-sm text-text-primary">
                  {user.name}
                </div>
                <div className="text-xs text-text-muted mt-0.5">
                  {user.email}
                </div>
                <div className="inline-block mt-1.5 text-[10px] font-bold bg-gold-dark text-gold-light border border-gold/25 px-3 py-0.5 rounded-full uppercase tracking-wide">
                  {user.tier} Plan
                </div>
              </div>

              {/* Menu Items */}
              <Link
                href="/profile"
                className="flex items-center gap-2.5 px-4 py-2.75 text-sm text-text-secondary hover:bg-s2 hover:text-text-primary transition-colors border-b border-border"
                onClick={() => setProfileDropdownOpen(false)}
              >
                <Package2 className="w-3.5 h-3.5" />
                My Products & HS Codes
              </Link>

              <Link
                href="/profile?tab=alerts"
                className="flex items-center gap-2.5 px-4 py-2.75 text-sm text-text-secondary hover:bg-s2 hover:text-text-primary transition-colors border-b border-border"
                onClick={() => setProfileDropdownOpen(false)}
              >
                <Bell className="w-3.5 h-3.5" />
                Alert Feed
                <span className="ml-auto bg-gold text-bg text-[10px] font-extrabold px-1.75 py-0.5 rounded-full">
                  3
                </span>
              </Link>

              <Link
                href="/profile?tab=notifications"
                className="flex items-center gap-2.5 px-4 py-2.75 text-sm text-text-secondary hover:bg-s2 hover:text-text-primary transition-colors border-b border-border"
                onClick={() => setProfileDropdownOpen(false)}
              >
                <Settings className="w-3.5 h-3.5" />
                Notification Preferences
              </Link>

              <Link
                href="/profile?tab=account"
                className="flex items-center gap-2.5 px-4 py-2.75 text-sm text-text-secondary hover:bg-s2 hover:text-text-primary transition-colors border-b border-border"
                onClick={() => setProfileDropdownOpen(false)}
              >
                <User className="w-3.5 h-3.5" />
                Account & Billing
              </Link>

              <button
                onClick={() => {
                  toast.success("Signing out...", "Goodbye");
                  setProfileDropdownOpen(false);
                }}
                className="w-full flex items-center gap-2.5 px-4 py-2.75 text-sm text-red hover:bg-red-dark transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
                Sign Out
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
