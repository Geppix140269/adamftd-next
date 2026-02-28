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
    isNew: undefined,
  },
  {
    href: "/find-buyers",
    label: "Find Buyers",
    icon: Search,
    isNew: undefined,
  },
  {
    href: "/benchmark-pricing",
    label: "Benchmark Pricing",
    icon: DollarSign,
    isNew: undefined,
  },
  {
    href: "/validate",
    label: "Check Company",
    icon: Building,
    isNew: undefined,
  },
  {
    href: "/evaluate-market",
    label: "Evaluate Market",
    icon: TrendingUp,
    isNew: undefined,
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
    isNew: undefined,
  },
  {
    href: "/deal-room",
    label: "Deal Room",
    icon: Folder,
    isNew: undefined,
  },
  {
    href: "/profile",
    label: "My Profile",
    icon: User,
    isNew: undefined,
  },
  {
    href: "/pricing",
    label: "Free vs Pro",
    icon: Star,
    isNew: undefined,
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
