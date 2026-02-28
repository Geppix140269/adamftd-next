import {
  Home,
  Search,
  DollarSign,
  Building,
  TrendingUp,
  Ship,
  FileText,
  Shield,
  Folder,
  User,
  Star,
} from "lucide-react";

export const navigationItems = [
  {
    href: "/mission-control",
    label: "Mission Control",
    icon: Home,
  },
  {
    href: "/find-buyers",
    label: "Find Buyers",
    icon: Search,
  },
  {
    href: "/benchmark-pricing",
    label: "Benchmark Pricing",
    icon: DollarSign,
  },
  {
    href: "/validate",
    label: "Check Company",
    icon: Building,
  },
  {
    href: "/evaluate-market",
    label: "Evaluate Market",
    icon: TrendingUp,
  },
  {
    href: "/tariffs",
    label: "Tariffs & Entry",
    icon: Ship,
    isNew: true,
  },
  {
    href: "/market-reports",
    label: "Market Reports",
    icon: FileText,
    isNew: true,
  },
  {
    href: "/risk-dashboard",
    label: "Risk Dashboard",
    icon: Shield,
  },
  {
    href: "/deal-room",
    label: "Deal Room",
    icon: Folder,
  },
  {
    href: "/profile",
    label: "My Profile",
    icon: User,
  },
  {
    href: "/pricing",
    label: "Free vs Pro",
    icon: Star,
  },
] as const;

export const mobileNavigationItems = [
  {
    href: "/mission-control",
    label: "Home",
    icon: Home,
  },
  {
    href: "/find-buyers",
    label: "Buyers",
    icon: Search,
  },
  {
    href: "/deal-room",
    label: "Deals",
    icon: Folder,
  },
  {
    href: "/market-reports",
    label: "Reports",
    icon: FileText,
  },
  {
    href: "/profile",
    label: "Profile",
    icon: User,
  },
] as const;

export type NavigationItem = (typeof navigationItems)[number];
export type MobileNavigationItem = (typeof mobileNavigationItems)[number];
