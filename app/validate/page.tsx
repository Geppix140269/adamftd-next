import { Metadata } from "next";
import { Shield, Search, Building2, MapPin, Globe, CheckCircle, AlertTriangle, XCircle, TrendingUp, Package } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { Metric } from "@/components/ui/Metric";
import { Tag } from "@/components/ui/Tag";
import { Progress } from "@/components/ui/Progress";

export const metadata: Metadata = {
  title: "Validate Company | ADAMftd",
  description: "Verify counterparty legitimacy and trade history",
};

export default function ValidatePage() {
  return (
    <div className="min-h-screen pb-20 md:pb-8">
      {/* Hero Section */}
      <div className="px-8 pt-12 pb-7 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[240px] bg-gradient-radial from-blue/7 to-transparent pointer-events-none" />

        <div className="relative">
          <div className="text-xs font-bold tracking-[2px] uppercase text-blue mb-4">
            Risk Intelligence
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3.5">
            Validate Counterparty
          </h1>
          <p className="text-base text-text-secondary max-w-[600px] leading-relaxed">
            Before you ship or pay, verify that this company has a real trade history, legitimate activity, and no flags.
          </p>
        </div>
      </div>

      {/* Search Form */}
      <div className="px-8 mb-6">
        <Card className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-3">
              <Input
                type="text"
                placeholder="Enter company name (e.g., BASF SE)"
                icon={Building2}
                defaultValue="BASF SE"
              />
            </div>
            <div>
              <Button variant="blue" className="w-full justify-center">
                <Search className="w-4 h-4 mr-2" />
                Validate
              </Button>
            </div>
          </div>
          <div className="text-xs text-text-muted mt-3">
            Or search by tax ID, registration number, or website domain
          </div>
        </Card>
      </div>

      {/* Validation Results */}
      <div className="px-8 mb-6">
        <Card className="p-6">
          {/* Company Header */}
          <div className="flex items-start justify-between mb-6 pb-6 border-b border-border">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h2 className="font-heading text-2xl font-extrabold text-white">BASF SE</h2>
                <Badge variant="ok">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Verified
                </Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-text-secondary mb-3">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  Ludwigshafen, Germany
                </div>
                <div className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" />
                  basf.com
                </div>
              </div>
              <div className="text-xs text-text-muted">
                Tax ID: DE 123 456 789 · Est. 1865 · Chemical Manufacturing
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-text-dim uppercase mb-1">Trust Score</div>
              <div className="text-4xl font-heading font-extrabold text-green">98</div>
              <div className="text-xs text-green">Excellent</div>
            </div>
          </div>

          {/* Risk Assessment */}
          <div className="mb-6">
            <div className="text-sm font-semibold uppercase tracking-wide text-text-dim mb-4">
              Risk Assessment
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-4 bg-green-dark border border-green/15">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle className="w-5 h-5 text-green" />
                  <div className="text-sm font-semibold text-text-primary">Trade History</div>
                </div>
                <div className="text-xs text-text-secondary">
                  <strong className="text-green">2,847 verified shipments</strong> in last 12 months
                </div>
              </Card>

              <Card className="p-4 bg-green-dark border border-green/15">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle className="w-5 h-5 text-green" />
                  <div className="text-sm font-semibold text-text-primary">Legal Status</div>
                </div>
                <div className="text-xs text-text-secondary">
                  Active registration · No bankruptcy flags
                </div>
              </Card>

              <Card className="p-4 bg-green-dark border border-green/15">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle className="w-5 h-5 text-green" />
                  <div className="text-sm font-semibold text-text-primary">Sanctions</div>
                </div>
                <div className="text-xs text-text-secondary">
                  No sanctions · Clean compliance record
                </div>
              </Card>
            </div>
          </div>

          {/* Detailed Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 pb-6 border-b border-border">
            <Metric
              label="Total Shipments (12mo)"
              value="2,847"
              trend="up"
              trendValue="+12%"
            />
            <Metric
              label="Avg. Shipment Value"
              value="$127K"
            />
            <Metric
              label="Active Trade Lanes"
              value="23"
            />
            <Metric
              label="Payment Reliability"
              value="99%"
            />
          </div>

          {/* Flags & Warnings */}
          <div className="mb-6">
            <div className="text-sm font-semibold uppercase tracking-wide text-text-dim mb-4">
              Flags & Warnings
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-green-dark/40 border border-green/15 rounded-lg">
                <CheckCircle className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <strong className="text-text-primary">No red flags detected</strong>
                  <div className="text-text-secondary text-xs mt-1">
                    Company passed all 12 verification checks
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-s2 border border-border rounded-lg">
                <AlertTriangle className="w-4 h-4 text-amber flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <strong className="text-text-primary">Minor advisory:</strong>
                  <div className="text-text-secondary text-xs mt-1">
                    Increased freight rates on Germany → Turkey corridor (+14% this month)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trade Activity */}
          <div className="mb-6">
            <div className="text-sm font-semibold uppercase tracking-wide text-text-dim mb-4">
              Recent Trade Activity
            </div>

            <div className="space-y-2">
              {[
                { date: "Feb 24, 2026", product: "Polypropylene", weight: "127 tons", port: "Hamburg → Istanbul", status: "ok" },
                { date: "Feb 18, 2026", product: "Polyethylene", weight: "94 tons", port: "Rotterdam → Izmir", status: "ok" },
                { date: "Feb 12, 2026", product: "Chemical Compounds", weight: "156 tons", port: "Antwerp → Istanbul", status: "ok" },
                { date: "Feb 05, 2026", product: "Polypropylene", weight: "142 tons", port: "Hamburg → Istanbul", status: "ok" },
              ].map((shipment, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-s2 rounded-lg text-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-20 text-text-muted">{shipment.date}</div>
                    <div className="flex items-center gap-2">
                      <Package className="w-3.5 h-3.5 text-blue" />
                      <span className="text-text-primary font-medium">{shipment.product}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-text-secondary">{shipment.weight}</div>
                    <div className="text-text-muted">{shipment.port}</div>
                    <Badge variant="ok" size="sm">✓</Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Products Traded */}
          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-text-dim mb-3">
              Top Products Traded
            </div>
            <div className="flex flex-wrap gap-2">
              <Tag variant="blue">Polypropylene (47%)</Tag>
              <Tag variant="blue">Polyethylene (28%)</Tag>
              <Tag variant="blue">Chemical Compounds (15%)</Tag>
              <Tag variant="blue">Engineering Plastics (7%)</Tag>
              <Tag variant="blue">Other (3%)</Tag>
            </div>
          </div>
        </Card>
      </div>

      {/* Actions */}
      <div className="px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="p-5 bg-s2">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-text-primary mb-1">
                  Download Full Report
                </div>
                <div className="text-xs text-text-muted">
                  Complete due diligence report (PDF)
                </div>
              </div>
              <Button variant="ghost" size="sm">Download</Button>
            </div>
          </Card>

          <Card className="p-5 bg-s2">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-text-primary mb-1">
                  Monitor This Company
                </div>
                <div className="text-xs text-text-muted">
                  Get alerts on shipments and risk changes
                </div>
              </div>
              <Button variant="blue" size="sm">Add to Watchlist</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
