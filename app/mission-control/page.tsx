import { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  Package,
  DollarSign,
  Shield,
  TrendingUp,
  Ship,
  FileText,
} from "lucide-react";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Mission Control | ADAMftd",
  description: "Your trade intelligence command center",
};

const missionCards = [
  {
    id: "find-buyers",
    href: "/find-buyers",
    icon: Search,
    caption: "Commercial Intelligence",
    title: "Find Verified Buyers",
    description:
      "See who is actually importing your product right now — with real shipment evidence, not directories.",
    buttonText: "Find Buyers →",
    gradient: "from-green/7 to-transparent",
    iconBg: "bg-green-dark",
    iconColor: "text-green",
    buttonBg: "bg-green-dark",
    buttonText: "text-green",
    borderHover: "hover:border-green/30",
  },
  {
    id: "find-suppliers",
    href: "/find-buyers?mode=suppliers",
    icon: Package,
    caption: "Sourcing Intelligence",
    title: "Find Verified Suppliers",
    description:
      "Discover who is actually exporting your product — with real shipment data, pricing benchmarks, and corridor analysis.",
    buttonText: "Find Suppliers →",
    gradient: "from-blue/7 to-transparent",
    iconBg: "bg-blue-dark",
    iconColor: "text-blue",
    buttonBg: "bg-blue-dark",
    buttonText: "text-blue",
    borderHover: "hover:border-blue/30",
  },
  {
    id: "benchmark-pricing",
    href: "/benchmark-pricing",
    icon: DollarSign,
    caption: "Pricing Intelligence",
    title: "Benchmark My Pricing",
    description:
      "Compare your unit prices against real transaction data. Find out if your supplier is charging you more than others pay.",
    buttonText: "Run Benchmark →",
    gradient: "from-gold/8 to-transparent",
    iconBg: "bg-gold-dark",
    iconColor: "text-gold-light",
    buttonBg: "bg-gold-dark",
    buttonText: "text-gold-light",
    borderHover: "hover:border-gold/35",
  },
  {
    id: "validate",
    href: "/validate",
    icon: Shield,
    caption: "Risk Intelligence",
    title: "Validate Counterparty",
    description:
      "Before you ship or pay, verify that this company has a real trade history, legitimate activity, and no flags.",
    buttonText: "Validate Now →",
    gradient: "from-blue/7 to-transparent",
    iconBg: "bg-blue-dark",
    iconColor: "text-blue",
    buttonBg: "bg-blue-dark",
    buttonText: "text-blue",
    borderHover: "hover:border-blue/30",
  },
  {
    id: "evaluate-market",
    href: "/evaluate-market",
    icon: TrendingUp,
    caption: "Market Intelligence",
    title: "Evaluate Market Opportunity",
    description:
      "Is this market growing or crowded? Get a commercial read on demand, competition, and timing.",
    buttonText: "Evaluate Now →",
    gradient: "from-red/6 to-transparent",
    iconBg: "bg-red-dark",
    iconColor: "text-red",
    buttonBg: "bg-red-dark",
    buttonText: "text-red",
    borderHover: "hover:border-red/25",
  },
  {
    id: "tariffs",
    href: "/tariffs",
    icon: Ship,
    caption: "Compliance Intelligence",
    title: "Check Tariffs & Entry Rules",
    description:
      "Find the exact duty rate, FTA eligibility, required documents and landed cost before you commit.",
    buttonText: "Check Tariffs →",
    gradient: "from-purple/7 to-transparent",
    iconBg: "bg-purple-dark",
    iconColor: "text-purple",
    buttonBg: "bg-purple-dark",
    buttonText: "text-purple",
    borderHover: "hover:border-purple/30",
    isNew: true,
  },
  {
    id: "market-reports",
    href: "/market-reports",
    icon: FileText,
    caption: "Market Entry Reports",
    title: "Generate Full Market Report",
    description:
      "AI-assembled PDF with pricing, top importers, compliance, events calendar, and price forecasts.",
    buttonText: "Generate Report →",
    gradient: "from-amber/8 to-transparent",
    iconBg: "bg-amber-dark",
    iconColor: "text-amber",
    buttonBg: "bg-amber-dark",
    buttonText: "text-amber",
    borderHover: "hover:border-amber/35",
    isNew: true,
  },
];

export default function MissionControlPage() {
  return (
    <div className="min-h-screen pb-20 md:pb-8">
      {/* Hero Section */}
      <div className="text-center px-8 pt-15 pb-10 relative">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] bg-gradient-radial from-gold/6 to-transparent pointer-events-none" />

        <div className="relative">
          <div className="text-xs font-bold tracking-[2px] uppercase text-gold mb-4">
            ADAMftd · Commercial Decision Engine
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3.5 leading-tight">
            What are you trying
            <br />
            to accomplish today?
          </h1>
          <p className="text-base text-text-secondary max-w-[500px] mx-auto leading-relaxed">
            Select a mission. We'll show you what matters — no searching, no
            sifting.
          </p>
        </div>
      </div>

      {/* Morning Briefing */}
      <div className="mx-8 mb-5 bg-s1 border border-border rounded-xl overflow-hidden">
        <div className="flex items-center gap-2.5 px-5 py-3 bg-s2 border-b border-border text-xs font-semibold uppercase tracking-wide text-text-dim">
          <div className="pulse w-1.75 h-1.75 rounded-full bg-green" />
          Since your last visit · 4 updates
        </div>
        <div className="flex overflow-x-auto gap-px bg-border scrollbar-thin scrollbar-thumb-gold scrollbar-track-s2">
          <Link
            href="/find-buyers"
            className="bg-s1 px-4.5 py-3.5 min-w-[220px] flex-1 cursor-pointer hover:bg-s2 transition-colors"
          >
            <div className="text-xl text-green mb-1.5 leading-none">▲</div>
            <div className="text-sm text-text-primary leading-snug mb-1">
              <strong>BASF SE</strong> increased shipments by 18% this month
            </div>
            <div className="text-xs text-text-dim">
              Buyer you saved · Polypropylene
            </div>
          </Link>
          <Link
            href="/benchmark-pricing"
            className="bg-s1 px-4.5 py-3.5 min-w-[220px] flex-1 cursor-pointer hover:bg-s2 transition-colors"
          >
            <div className="text-xl text-amber mb-1.5 leading-none">△</div>
            <div className="text-sm text-text-primary leading-snug mb-1">
              Freight on <strong>Saudi → Germany</strong> corridor up 6% this week
            </div>
            <div className="text-xs text-text-dim">
              Affects your price benchmark
            </div>
          </Link>
          <Link
            href="/tariffs"
            className="bg-s1 px-4.5 py-3.5 min-w-[220px] flex-1 cursor-pointer hover:bg-s2 transition-colors"
          >
            <div className="text-xl text-red mb-1.5 leading-none">⚠</div>
            <div className="text-sm text-text-primary leading-snug mb-1">
              New EU REACH rule effective <strong>1 Mar 2026</strong>
            </div>
            <div className="text-xs text-text-dim">
              Polypropylene · HS 3902.10
            </div>
          </Link>
          <Link
            href="/market-reports"
            className="bg-s1 px-4.5 py-3.5 min-w-[220px] flex-1 cursor-pointer hover:bg-s2 transition-colors"
          >
            <div className="text-xl text-blue mb-1.5 leading-none">●</div>
            <div className="text-sm text-text-primary leading-snug mb-1">
              Turkey market report ready — <strong>78/100 score</strong>
            </div>
            <div className="text-xs text-text-dim">Generated 2 hours ago</div>
          </Link>
        </div>
      </div>

      {/* Mission Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-8 pb-9 max-w-[1180px] mx-auto">
        {missionCards.map((card) => {
          const Icon = card.icon;

          return (
            <Link key={card.id} href={card.href}>
              <Card
                variant="clickable"
                className={`relative p-6.5 pb-5.5 flex flex-col gap-2.5 transition-all duration-200 ${card.borderHover}`}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none`}
                />

                {/* New badge */}
                {card.isNew && (
                  <div className="absolute top-3 right-3 text-[9px] font-bold tracking-wider bg-gold text-bg rounded-sm px-1.75 py-0.5">
                    NEW
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`relative w-[38px] h-[38px] rounded-lg ${card.iconBg} flex items-center justify-center mb-0.5`}
                >
                  <Icon className={`w-4.5 h-4.5 ${card.iconColor} stroke-[2.5]`} />
                </div>

                {/* Caption */}
                <div className="relative text-xs font-semibold uppercase tracking-wide text-text-dim">
                  {card.caption}
                </div>

                {/* Title */}
                <h3 className="relative font-heading text-lg font-extrabold text-white tracking-tight leading-tight">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="relative text-sm text-text-secondary leading-relaxed flex-1">
                  {card.description}
                </p>

                {/* Button */}
                <button
                  className={`relative mt-1.5 self-start inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.25 rounded-md transition-all ${card.buttonBg} ${card.buttonText} hover:brightness-115`}
                >
                  {card.buttonText}
                </button>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Context Bar */}
      <div className="mx-8 mb-4 bg-s1 border border-border rounded-lg px-5.5 py-3.5 flex items-center gap-6 flex-wrap">
        <div className="text-xs font-semibold uppercase tracking-wide text-text-dim">
          Recent
        </div>
        <div className="flex gap-2 flex-wrap">
          <Link
            href="/find-buyers?q=polypropylene-turkey"
            className="text-sm font-medium bg-s2 border border-border text-text-secondary px-3 py-1.25 rounded-full hover:border-border-light hover:text-text-primary transition-all cursor-pointer"
          >
            Polypropylene · Turkey
          </Link>
          <Link
            href="/find-buyers?q=steel-germany"
            className="text-sm font-medium bg-s2 border border-border text-text-secondary px-3 py-1.25 rounded-full hover:border-border-light hover:text-text-primary transition-all cursor-pointer"
          >
            Steel Coils · Germany
          </Link>
          <Link
            href="/find-buyers?q=textiles-france"
            className="text-sm font-medium bg-s2 border border-border text-text-secondary px-3 py-1.25 rounded-full hover:border-border-light hover:text-text-primary transition-all cursor-pointer"
          >
            Textiles · France
          </Link>
        </div>
        <div className="flex items-center gap-2 ml-auto text-sm text-amber cursor-pointer">
          <div className="pulse w-1.5 h-1.5 rounded-full bg-amber" />
          Freight to Germany up 14% this month
        </div>
      </div>

      {/* Risk Ticker */}
      <div className="mx-8 px-5 py-3 bg-red-dark/40 border border-red/15 rounded-lg flex items-center gap-3.5 text-sm text-text-secondary">
        <div className="pulse w-1.75 h-1.75 rounded-full bg-red flex-shrink-0" />
        <span className="text-red font-semibold">Sanctions update</span>
        <span>
          · 2 corridors flagged this week (Iran–UAE, Russia–Turkey)
        </span>
        <Link
          href="/risk-dashboard"
          className="ml-auto text-blue font-medium hover:underline flex-shrink-0"
        >
          View Risk Dashboard →
        </Link>
      </div>
    </div>
  );
}
