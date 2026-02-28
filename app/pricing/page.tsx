import { Metadata } from "next";
import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Free vs Pro | ADAMftd",
  description: "Choose the plan that fits your business needs",
};

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for exploring trade opportunities",
    features: [
      { text: "5 buyer searches per month", included: true, limit: "5/month" },
      { text: "Basic market data", included: true, limit: undefined },
      { text: "Company validation", included: true, limit: "3/month" },
      { text: "Export contacts", included: false, limit: undefined },
      { text: "Price benchmarking", included: false, limit: undefined },
      { text: "Market reports", included: false, limit: undefined },
      { text: "Tariff calculations", included: false, limit: undefined },
      { text: "API access", included: false, limit: undefined },
      { text: "Priority support", included: false, limit: undefined },
    ],
    cta: "Get Started Free",
    variant: "ghost" as const,
  },
  {
    name: "Pro",
    price: "$99",
    period: "per month",
    description: "For serious trade professionals",
    badge: "MOST POPULAR",
    featured: true,
    features: [
      { text: "Unlimited buyer searches", included: true, limit: undefined },
      { text: "Advanced market intelligence", included: true, limit: undefined },
      { text: "Unlimited company validation", included: true, limit: undefined },
      { text: "Export full contact details", included: true, limit: undefined },
      { text: "Real-time price benchmarking", included: true, limit: undefined },
      { text: "AI-generated market reports", included: true, limit: undefined },
      { text: "Tariff & compliance tools", included: true, limit: undefined },
      { text: "API access (1000 req/day)", included: true, limit: undefined },
      { text: "Priority email & chat support", included: true, limit: undefined },
    ],
    cta: "Start Pro Trial",
    variant: "gold" as const,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For teams and large organizations",
    features: [
      { text: "Everything in Pro", included: true, limit: undefined },
      { text: "Unlimited team members", included: true, limit: undefined },
      { text: "Custom data integrations", included: true, limit: undefined },
      { text: "Dedicated account manager", included: true, limit: undefined },
      { text: "Custom reports & analytics", included: true, limit: undefined },
      { text: "White-label options", included: true, limit: undefined },
      { text: "SLA guarantees", included: true, limit: undefined },
      { text: "Unlimited API access", included: true, limit: undefined },
      { text: "24/7 phone support", included: true, limit: undefined },
    ],
    cta: "Contact Sales",
    variant: "ghost" as const,
  },
];

const comparisonFeatures = [
  {
    category: "Search & Discovery",
    features: [
      { name: "Buyer/Supplier searches", free: "5/month", pro: "Unlimited", enterprise: "Unlimited" },
      { name: "Shipment data access", free: "Limited", pro: "Full", enterprise: "Full + Historical" },
      { name: "Trade flow analytics", free: false, pro: true, enterprise: true },
      { name: "Competitor tracking", free: false, pro: "10 companies", enterprise: "Unlimited" },
    ],
  },
  {
    category: "Analysis & Intelligence",
    features: [
      { name: "Price benchmarking", free: false, pro: true, enterprise: true },
      { name: "Market opportunity scores", free: "Basic", pro: "Advanced", enterprise: "Custom" },
      { name: "Risk assessment", free: "Basic", pro: "Full", enterprise: "Full + Alerts" },
      { name: "AI market reports", free: false, pro: "10/month", enterprise: "Unlimited" },
    ],
  },
  {
    category: "Compliance & Finance",
    features: [
      { name: "Tariff calculator", free: false, pro: true, enterprise: true },
      { name: "Trade finance options", free: false, pro: true, enterprise: "Priority" },
      { name: "Customs documentation", free: false, pro: true, enterprise: true },
      { name: "Sanctions screening", free: false, pro: true, enterprise: "Real-time" },
    ],
  },
  {
    category: "Collaboration & Support",
    features: [
      { name: "Team members", free: "1", pro: "5", enterprise: "Unlimited" },
      { name: "Deal room", free: false, pro: true, enterprise: true },
      { name: "Export capabilities", free: false, pro: "CSV", enterprise: "CSV + API" },
      { name: "Support", free: "Email", pro: "Email + Chat", enterprise: "24/7 Phone" },
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen pb-20 md:pb-8">
      {/* Hero */}
      <div className="text-center px-8 pt-12 pb-7 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[240px] bg-gradient-radial from-gold/7 to-transparent pointer-events-none" />

        <div className="relative">
          <div className="text-xs font-bold tracking-[2px] uppercase text-gold mb-4">
            Pricing Plans
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3.5">
            Choose Your Plan
          </h1>
          <p className="text-base text-text-secondary max-w-[600px] mx-auto leading-relaxed mb-9">
            Start free and upgrade when you're ready. All plans include our core trade intelligence features.
          </p>
        </div>
      </div>

      {/* Plan Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[1100px] mx-auto px-8 mb-9">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`relative transition-all duration-200 flex flex-col ${
              plan.featured
                ? "border-gold shadow-[0_0_0_1px_#e8a424,0_16px_48px_rgba(232,164,36,0.12)] md:-translate-y-1"
                : ""
            }`}
          >
            {plan.badge && (
              <div className="absolute -top-2.5 right-4 text-[10px] font-extrabold tracking-wider uppercase bg-gold text-bg px-2.5 py-0.75 rounded-full">
                {plan.badge}
              </div>
            )}

            <div className="p-7 pb-5">
              <div className="font-heading text-xs font-bold tracking-wide uppercase text-text-muted mb-2.5">
                {plan.name}
              </div>
              <div className="font-heading text-[42px] font-extrabold tracking-tighter text-white leading-none mb-1.5">
                {plan.price}
                {plan.price !== "Custom" && (
                  <sup className="text-xl align-super">
                    {plan.price === "$0" ? "" : "/mo"}
                  </sup>
                )}
              </div>
              <div className="text-sm text-text-muted mb-3">
                {plan.period}
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                {plan.description}
              </p>
            </div>

            <div className="h-px bg-border mx-6" />

            <div className="p-6 pt-5 pb-6 flex-1">
              <div className="text-xs font-bold tracking-wide uppercase text-text-dim mb-3.5">
                Features
              </div>
              <div className="space-y-2.5">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm">
                    <div
                      className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5 ${
                        feature.included
                          ? "bg-green-dark text-green"
                          : "bg-s3 text-text-dim"
                      }`}
                    >
                      {feature.included ? (
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      ) : (
                        <X className="w-2.5 h-2.5 stroke-[3]" />
                      )}
                    </div>
                    <span
                      className={
                        feature.included ? "text-text-secondary" : "text-text-dim line-through"
                      }
                    >
                      {feature.text}
                    </span>
                    {feature.limit && (
                      <span className="text-xs text-text-dim ml-auto">
                        {feature.limit}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 pt-0">
              <Button variant={plan.variant} className="w-full justify-center">
                {plan.cta}
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="max-w-[1100px] mx-auto px-8 pb-15">
        <h2 className="font-heading text-2xl font-extrabold text-white text-center mb-5">
          Full Feature Comparison
        </h2>

        <Card>
          {/* Table Header */}
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr] bg-s2 border-b border-border">
            <div className="px-4.5 py-3.5 text-xs font-bold tracking-wide uppercase text-text-secondary">
              Features
            </div>
            <div className="px-4.5 py-3.5 text-xs font-bold tracking-wide uppercase text-text-muted text-center">
              Free
            </div>
            <div className="px-4.5 py-3.5 text-xs font-bold tracking-wide uppercase text-gold-light text-center">
              Pro
            </div>
            <div className="px-4.5 py-3.5 text-xs font-bold tracking-wide uppercase text-text-muted text-center">
              Enterprise
            </div>
          </div>

          {/* Table Body */}
          {comparisonFeatures.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              {/* Section Header */}
              <div className="px-4.5 py-2.25 text-[10px] font-bold tracking-wider uppercase text-text-dim bg-white/[0.02] border-t border-b border-border">
                {section.category}
              </div>

              {/* Section Rows */}
              {section.features.map((feature, featureIdx) => (
                <div
                  key={featureIdx}
                  className="grid grid-cols-[2fr_1fr_1fr_1fr] border-b border-border last:border-b-0 hover:bg-s2 transition-colors"
                >
                  <div className="px-4.5 py-3 text-sm text-text-primary flex items-center">
                    {feature.name}
                  </div>
                  <div className="px-4.5 py-3 text-sm flex items-center justify-center">
                    {typeof feature.free === "boolean" ? (
                      feature.free ? (
                        <Check className="w-3.75 h-3.75 text-green" />
                      ) : (
                        <X className="w-3.75 h-3.75 text-text-dim" />
                      )
                    ) : (
                      <span className="text-amber text-xs">{feature.free}</span>
                    )}
                  </div>
                  <div className="px-4.5 py-3 text-sm flex items-center justify-center">
                    {typeof feature.pro === "boolean" ? (
                      feature.pro ? (
                        <Check className="w-3.75 h-3.75 text-green" />
                      ) : (
                        <X className="w-3.75 h-3.75 text-text-dim" />
                      )
                    ) : (
                      <span className="text-amber text-xs">{feature.pro}</span>
                    )}
                  </div>
                  <div className="px-4.5 py-3 text-sm flex items-center justify-center">
                    {typeof feature.enterprise === "boolean" ? (
                      feature.enterprise ? (
                        <Check className="w-3.75 h-3.75 text-green" />
                      ) : (
                        <X className="w-3.75 h-3.75 text-text-dim" />
                      )
                    ) : (
                      <span className="text-amber text-xs">{feature.enterprise}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}
