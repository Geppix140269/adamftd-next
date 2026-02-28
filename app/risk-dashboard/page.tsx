import { Metadata } from "next";
import { Shield, AlertTriangle, TrendingUp, MapPin, DollarSign, Package, Clock, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Metric } from "@/components/ui/Metric";
import { Tag } from "@/components/ui/Tag";

export const metadata: Metadata = {
  title: "Risk Dashboard | ADAMftd",
  description: "Trade finance and risk assessment",
};

const risks = [
  {
    id: 1,
    severity: "high",
    type: "Sanctions",
    title: "Iran-UAE Corridor Flagged",
    description: "New sanctions restrictions on Iran trade routes effective Feb 15, 2026",
    affectedRoutes: "Iran → UAE",
    date: "2 days ago",
    action: "Review shipments",
  },
  {
    id: 2,
    severity: "high",
    type: "Sanctions",
    title: "Russia-Turkey Trade Alert",
    description: "Enhanced due diligence required for Russia-origin goods",
    affectedRoutes: "Russia → Turkey",
    date: "5 days ago",
    action: "Verify origin",
  },
  {
    id: 3,
    severity: "medium",
    type: "Freight",
    title: "Germany Corridor Rate Increase",
    description: "Freight rates up 14% this month on Germany → Turkey route",
    affectedRoutes: "Germany → Turkey",
    date: "1 week ago",
    action: "Update pricing",
  },
  {
    id: 4,
    severity: "medium",
    type: "Regulation",
    title: "New REACH Requirements",
    description: "EU chemical regulation updates effective March 1, 2026",
    affectedRoutes: "EU Imports",
    date: "2 weeks ago",
    action: "Review compliance",
  },
  {
    id: 5,
    severity: "low",
    type: "Market",
    title: "Turkey Demand Growth",
    description: "Import volumes up 18% - positive market signal",
    affectedRoutes: "All → Turkey",
    date: "3 weeks ago",
    action: "No action",
  },
];

const watchlist = [
  {
    company: "BASF SE",
    country: "Germany",
    riskScore: 12,
    status: "ok",
    lastCheck: "2 hours ago",
  },
  {
    company: "LyondellBasell",
    country: "Netherlands",
    riskScore: 15,
    status: "ok",
    lastCheck: "5 hours ago",
  },
  {
    company: "Turkish Petrochemicals",
    country: "Turkey",
    riskScore: 28,
    status: "warn",
    lastCheck: "1 day ago",
  },
];

export default function RiskDashboardPage() {
  return (
    <div className="min-h-screen pb-20 md:pb-8">
      {/* Hero Section */}
      <div className="px-8 pt-12 pb-7 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[240px] bg-gradient-radial from-blue/7 to-transparent pointer-events-none" />

        <div className="relative">
          <div className="text-xs font-bold tracking-[2px] uppercase text-blue mb-4">
            Trade Finance & Risk
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3.5">
            Risk Dashboard
          </h1>
          <p className="text-base text-text-secondary max-w-[600px] leading-relaxed">
            Monitor sanctions, compliance alerts, freight volatility, and counterparty risk in real-time.
          </p>
        </div>
      </div>

      {/* Risk Overview */}
      <div className="px-8 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-5 bg-red-dark/20 border border-red/20">
            <Metric
              label="High Priority Alerts"
              value="2"
              icon={AlertTriangle}
              iconColor="text-red"
            />
          </Card>
          <Card className="p-5 bg-amber-dark/20 border border-amber/20">
            <Metric
              label="Medium Priority"
              value="2"
              icon={AlertTriangle}
              iconColor="text-amber"
            />
          </Card>
          <Card className="p-5 bg-green-dark/20 border border-green/20">
            <Metric
              label="Companies Monitored"
              value="3"
              icon={Shield}
              iconColor="text-green"
            />
          </Card>
          <Card className="p-5">
            <Metric
              label="Last Risk Scan"
              value="2h ago"
              icon={Clock}
              iconColor="text-text-muted"
            />
          </Card>
        </div>
      </div>

      {/* Active Alerts */}
      <div className="px-8 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-heading font-bold text-white">Active Risk Alerts</h2>
          <div className="flex gap-2">
            <Tag variant="red" size="sm">2 High</Tag>
            <Tag variant="amber" size="sm">2 Medium</Tag>
            <Tag variant="green" size="sm">1 Low</Tag>
          </div>
        </div>

        <div className="space-y-3">
          {risks.map((risk) => (
            <Card
              key={risk.id}
              className={`p-5 ${
                risk.severity === "high"
                  ? "bg-red-dark/20 border-red/20"
                  : risk.severity === "medium"
                  ? "bg-amber-dark/20 border-amber/20"
                  : "bg-green-dark/20 border-green/20"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge
                      variant={
                        risk.severity === "high"
                          ? "risk"
                          : risk.severity === "medium"
                          ? "warn"
                          : "ok"
                      }
                    >
                      {risk.severity === "high" ? "⚠ High" : risk.severity === "medium" ? "△ Medium" : "✓ Low"}
                    </Badge>
                    <Tag
                      variant={
                        risk.type === "Sanctions"
                          ? "red"
                          : risk.type === "Freight"
                          ? "amber"
                          : risk.type === "Regulation"
                          ? "blue"
                          : "green"
                      }
                      size="sm"
                    >
                      {risk.type}
                    </Tag>
                    <span className="text-xs text-text-muted">{risk.date}</span>
                  </div>
                  <h3 className="text-base font-semibold text-text-primary mb-1">{risk.title}</h3>
                  <p className="text-sm text-text-secondary mb-2">{risk.description}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1.5 text-text-muted">
                      <MapPin className="w-3.5 h-3.5" />
                      {risk.affectedRoutes}
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  {risk.action} →
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Watchlist */}
      <div className="px-8 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-heading font-bold text-white">Company Watchlist</h2>
          <Button variant="blue" size="sm">Add Company</Button>
        </div>

        <Card className="p-6">
          <div className="space-y-3">
            {watchlist.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 bg-s2 rounded-lg hover:bg-s3 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="text-sm font-semibold text-text-primary">{item.company}</h4>
                      <Badge variant={item.status === "ok" ? "ok" : "warn"}>
                        {item.status === "ok" ? "✓ OK" : "△ Review"}
                      </Badge>
                    </div>
                    <div className="text-xs text-text-muted">
                      {item.country} · Last checked {item.lastCheck}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-xs text-text-dim mb-1">Risk Score</div>
                    <div
                      className={`text-xl font-heading font-bold ${
                        item.riskScore < 20 ? "text-green" : item.riskScore < 40 ? "text-amber" : "text-red"
                      }`}
                    >
                      {item.riskScore}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">View Details</Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Trade Finance */}
      <div className="px-8">
        <h2 className="text-lg font-heading font-bold text-white mb-4">Trade Finance Options</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-dark flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-blue" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-text-primary mb-1">
                  Letter of Credit (L/C)
                </h3>
                <p className="text-sm text-text-secondary mb-3">
                  Bank-guaranteed payment for international shipments. Reduce risk for both buyer and seller.
                </p>
                <div className="flex items-center gap-4 text-xs text-text-muted mb-3">
                  <span>• Processing: 5-7 days</span>
                  <span>• Fee: 0.75-1.5%</span>
                </div>
                <Button variant="blue" size="sm">Request L/C Quote</Button>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-green-dark flex items-center justify-center">
                <Package className="w-5 h-5 text-green" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-text-primary mb-1">
                  Trade Credit Insurance
                </h3>
                <p className="text-sm text-text-secondary mb-3">
                  Protect against buyer non-payment and political risks. Coverage up to 90% of invoice value.
                </p>
                <div className="flex items-center gap-4 text-xs text-text-muted mb-3">
                  <span>• Coverage: Up to 90%</span>
                  <span>• Premium: 0.2-0.6%</span>
                </div>
                <Button variant="green" size="sm">Get Insurance Quote</Button>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-dark flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-amber" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-text-primary mb-1">
                  Supply Chain Finance
                </h3>
                <p className="text-sm text-text-secondary mb-3">
                  Early payment programs to improve cash flow. Finance approved invoices at competitive rates.
                </p>
                <div className="flex items-center gap-4 text-xs text-text-muted mb-3">
                  <span>• Rate: from 4.5% APR</span>
                  <span>• Funding: 1-2 days</span>
                </div>
                <Button variant="gold" size="sm">Explore Financing</Button>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-purple-dark flex items-center justify-center">
                <Shield className="w-5 h-5 text-purple" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-text-primary mb-1">
                  Escrow Services
                </h3>
                <p className="text-sm text-text-secondary mb-3">
                  Neutral third-party holds payment until shipment conditions are met. Ideal for new relationships.
                </p>
                <div className="flex items-center gap-4 text-xs text-text-muted mb-3">
                  <span>• Fee: 1-2% flat</span>
                  <span>• Release: 24-48 hours</span>
                </div>
                <Button variant="accent" size="sm">Setup Escrow</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
