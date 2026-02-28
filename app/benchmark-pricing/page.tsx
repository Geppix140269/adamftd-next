import { Metadata } from "next";
import { DollarSign, Package, MapPin, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Metric } from "@/components/ui/Metric";
import { Badge } from "@/components/ui/Badge";
import { Progress } from "@/components/ui/Progress";

export const metadata: Metadata = {
  title: "Benchmark Pricing | ADAMftd",
  description: "Compare your unit prices against real transaction data",
};

export default function BenchmarkPricingPage() {
  return (
    <div className="min-h-screen pb-20 md:pb-8">
      {/* Hero Section */}
      <div className="px-8 pt-12 pb-7 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[240px] bg-gradient-radial from-gold/8 to-transparent pointer-events-none" />

        <div className="relative">
          <div className="text-xs font-bold tracking-[2px] uppercase text-gold mb-4">
            Pricing Intelligence
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3.5">
            Benchmark My Pricing
          </h1>
          <p className="text-base text-text-secondary max-w-[600px] leading-relaxed">
            Compare your unit prices against real transaction data. Find out if your supplier is charging you more than others pay.
          </p>
        </div>
      </div>

      {/* Calculator Form */}
      <div className="px-8 mb-6">
        <Card className="p-6">
          <div className="text-sm font-semibold uppercase tracking-wide text-text-dim mb-4">
            Enter Your Quote Details
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-sm text-text-secondary mb-2 block">Product Name</label>
              <Input
                type="text"
                placeholder="e.g., Polypropylene Granules"
                icon={Package}
                defaultValue="Polypropylene Granules"
              />
            </div>
            <div>
              <label className="text-sm text-text-secondary mb-2 block">HS Code (optional)</label>
              <Input
                type="text"
                placeholder="e.g., 3902.10"
                defaultValue="3902.10"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="text-sm text-text-secondary mb-2 block">Your Unit Price (USD)</label>
              <Input
                type="number"
                placeholder="e.g., 1250"
                icon={DollarSign}
                defaultValue="1250"
              />
            </div>
            <div>
              <label className="text-sm text-text-secondary mb-2 block">Unit Type</label>
              <Select defaultValue="ton">
                <option value="ton">Per Metric Ton</option>
                <option value="kg">Per Kilogram</option>
                <option value="container">Per Container</option>
                <option value="unit">Per Unit</option>
              </Select>
            </div>
            <div>
              <label className="text-sm text-text-secondary mb-2 block">Quantity</label>
              <Input
                type="number"
                placeholder="e.g., 20"
                defaultValue="20"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div>
              <label className="text-sm text-text-secondary mb-2 block">Origin Country</label>
              <Select defaultValue="saudi">
                <option value="">Select origin</option>
                <option value="saudi">Saudi Arabia</option>
                <option value="china">China</option>
                <option value="germany">Germany</option>
                <option value="usa">United States</option>
              </Select>
            </div>
            <div>
              <label className="text-sm text-text-secondary mb-2 block">Destination Country</label>
              <Select defaultValue="turkey">
                <option value="">Select destination</option>
                <option value="turkey">Turkey</option>
                <option value="germany">Germany</option>
                <option value="france">France</option>
              </Select>
            </div>
          </div>

          <Button variant="gold" className="w-full md:w-auto justify-center">
            <DollarSign className="w-4 h-4 mr-2" />
            Run Benchmark Analysis
          </Button>
        </Card>
      </div>

      {/* Results */}
      <div className="px-8 mb-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wide text-text-dim mb-1">
                Benchmark Results
              </div>
              <div className="text-xs text-text-muted">
                Based on 1,247 real transactions in the last 90 days
              </div>
            </div>
            <Badge variant="warn">
              <AlertTriangle className="w-3 h-3 mr-1" />
              Above Market
            </Badge>
          </div>

          {/* Main Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            <Metric
              label="Your Quote"
              value="$1,250"
              subtext="per metric ton"
              className="bg-s2 p-4 rounded-lg"
            />
            <Metric
              label="Market Average"
              value="$1,087"
              subtext="per metric ton"
              className="bg-s2 p-4 rounded-lg"
            />
            <Metric
              label="You're Paying"
              value="+15%"
              trend="up"
              subtext="above market average"
              className="bg-red-dark/40 p-4 rounded-lg border border-red/15"
            />
          </div>

          {/* Price Distribution */}
          <div className="mb-6 pb-6 border-b border-border">
            <div className="text-sm font-semibold uppercase tracking-wide text-text-dim mb-4">
              Price Distribution
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between text-sm mb-1.5">
                  <span className="text-text-secondary">Low (Bottom 25%)</span>
                  <span className="text-green font-semibold">$920 - $1,010</span>
                </div>
                <Progress value={25} variant="green" />
              </div>

              <div>
                <div className="flex items-center justify-between text-sm mb-1.5">
                  <span className="text-text-secondary">Market Average (50%)</span>
                  <span className="text-amber font-semibold">$1,010 - $1,164</span>
                </div>
                <Progress value={50} variant="amber" />
              </div>

              <div>
                <div className="flex items-center justify-between text-sm mb-1.5">
                  <span className="text-text-secondary">High (Top 25%)</span>
                  <span className="text-red font-semibold">$1,164 - $1,380</span>
                </div>
                <Progress value={75} variant="red" />
              </div>

              <div className="mt-4 p-3 bg-amber-dark/40 border border-amber/15 rounded-lg">
                <div className="flex items-center gap-2 text-sm">
                  <AlertTriangle className="w-4 h-4 text-amber flex-shrink-0" />
                  <div>
                    <strong className="text-amber">Your quote ($1,250)</strong> falls in the{" "}
                    <strong className="text-text-primary">top 25%</strong> — you're paying more than 75% of other buyers.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Savings Potential */}
          <div className="mb-6 pb-6 border-b border-border">
            <div className="text-sm font-semibold uppercase tracking-wide text-text-dim mb-4">
              Savings Potential
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-4 bg-s2">
                <div className="text-xs text-text-dim uppercase mb-1">If you match market avg</div>
                <div className="text-2xl font-heading font-bold text-green mb-1">$3,260</div>
                <div className="text-xs text-text-muted">Saved on this shipment (20 tons)</div>
              </Card>
              <Card className="p-4 bg-s2">
                <div className="text-xs text-text-dim uppercase mb-1">Annual savings potential</div>
                <div className="text-2xl font-heading font-bold text-green mb-1">$39,120</div>
                <div className="text-xs text-text-muted">Based on 12 shipments/year</div>
              </Card>
              <Card className="p-4 bg-s2">
                <div className="text-xs text-text-dim uppercase mb-1">Best price found</div>
                <div className="text-2xl font-heading font-bold text-gold-light mb-1">$920</div>
                <div className="text-xs text-text-muted">Saudi Arabia → Turkey, Nov 2025</div>
              </Card>
            </div>
          </div>

          {/* Corridor Analysis */}
          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-text-dim mb-4">
              Price by Corridor (Saudi Arabia → Turkey)
            </div>

            <div className="space-y-3">
              {[
                { month: "Feb 2026", avg: "$1,087", min: "$920", max: "$1,164", trend: "up", change: "+3%" },
                { month: "Jan 2026", avg: "$1,055", min: "$892", max: "$1,142", trend: "up", change: "+2%" },
                { month: "Dec 2025", avg: "$1,034", min: "$885", max: "$1,128", trend: "down", change: "-1%" },
                { month: "Nov 2025", avg: "$1,044", min: "$920", max: "$1,138", trend: "up", change: "+4%" },
              ].map((item) => (
                <div key={item.month} className="flex items-center justify-between p-3 bg-s2 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="text-sm font-medium text-text-primary w-24">{item.month}</div>
                    <div className="flex items-center gap-1.5">
                      {item.trend === "up" ? (
                        <TrendingUp className="w-3.5 h-3.5 text-red" />
                      ) : (
                        <TrendingDown className="w-3.5 h-3.5 text-green" />
                      )}
                      <span className={`text-xs font-semibold ${item.trend === "up" ? "text-red" : "text-green"}`}>
                        {item.change}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div>
                      <span className="text-text-dim">Avg: </span>
                      <span className="text-amber font-semibold">{item.avg}</span>
                    </div>
                    <div>
                      <span className="text-text-dim">Min: </span>
                      <span className="text-green">{item.min}</span>
                    </div>
                    <div>
                      <span className="text-text-dim">Max: </span>
                      <span className="text-red">{item.max}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Actions */}
      <div className="px-8">
        <Card className="p-5 bg-s2">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-text-primary mb-1">
                Want to find suppliers offering better prices?
              </div>
              <div className="text-xs text-text-muted">
                Search verified suppliers and compare their pricing
              </div>
            </div>
            <Button variant="green">Find Suppliers →</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
