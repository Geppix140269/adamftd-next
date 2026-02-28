import { Metadata } from "next";
import { TrendingUp, Package, MapPin, Search, TrendingDown, Users, DollarSign, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Badge } from "@/components/ui/Badge";
import { Metric } from "@/components/ui/Metric";
import { Tag } from "@/components/ui/Tag";
import { Progress } from "@/components/ui/Progress";

export const metadata: Metadata = {
  title: "Evaluate Market | ADAMftd",
  description: "Market opportunity analysis and competitive intelligence",
};

export default function EvaluateMarketPage() {
  return (
    <div className="min-h-screen pb-20 md:pb-8">
      {/* Hero Section */}
      <div className="px-8 pt-12 pb-7 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[240px] bg-gradient-radial from-red/6 to-transparent pointer-events-none" />

        <div className="relative">
          <div className="text-xs font-bold tracking-[2px] uppercase text-red mb-4">
            Market Intelligence
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3.5">
            Evaluate Market Opportunity
          </h1>
          <p className="text-base text-text-secondary max-w-[600px] leading-relaxed">
            Is this market growing or crowded? Get a commercial read on demand, competition, and timing.
          </p>
        </div>
      </div>

      {/* Search Form */}
      <div className="px-8 mb-6">
        <Card className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Input
                type="text"
                placeholder="Product (e.g., Polypropylene)"
                icon={Package}
                defaultValue="Polypropylene"
              />
            </div>
            <div>
              <Select defaultValue="turkey">
                <option value="">Target Market</option>
                <option value="turkey">Turkey</option>
                <option value="germany">Germany</option>
                <option value="france">France</option>
                <option value="italy">Italy</option>
              </Select>
            </div>
            <div>
              <Button variant="accent" className="w-full justify-center">
                <Search className="w-4 h-4 mr-2" />
                Analyze Market
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Market Score */}
      <div className="px-8 mb-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wide text-text-dim mb-2">
                Market Opportunity Score
              </div>
              <div className="text-xs text-text-muted">
                Polypropylene in Turkey · Updated Feb 28, 2026
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-heading font-extrabold text-green mb-1">78</div>
              <Badge variant="ok">Strong Opportunity</Badge>
            </div>
          </div>

          <Progress value={78} variant="green" className="mb-6" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-s2 rounded-lg">
              <div className="text-2xl font-heading font-bold text-green mb-1">A</div>
              <div className="text-xs text-text-dim uppercase">Demand Growth</div>
            </div>
            <div className="text-center p-4 bg-s2 rounded-lg">
              <div className="text-2xl font-heading font-bold text-green mb-1">B+</div>
              <div className="text-xs text-text-dim uppercase">Market Size</div>
            </div>
            <div className="text-center p-4 bg-s2 rounded-lg">
              <div className="text-2xl font-heading font-bold text-amber mb-1">B</div>
              <div className="text-xs text-text-dim uppercase">Competition</div>
            </div>
            <div className="text-center p-4 bg-s2 rounded-lg">
              <div className="text-2xl font-heading font-bold text-green mb-1">A-</div>
              <div className="text-xs text-text-dim uppercase">Entry Barriers</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Key Metrics */}
      <div className="px-8 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-5">
            <Metric
              label="Annual Import Volume"
              value="427K"
              subtext="metric tons"
              trend="up"
              trendValue="+18%"
            />
          </Card>
          <Card className="p-5">
            <Metric
              label="Market Value"
              value="$524M"
              subtext="USD annually"
              trend="up"
              trendValue="+12%"
            />
          </Card>
          <Card className="p-5">
            <Metric
              label="Active Importers"
              value="847"
              subtext="verified companies"
            />
          </Card>
          <Card className="p-5">
            <Metric
              label="Avg. Unit Price"
              value="$1,087"
              subtext="per metric ton"
              trend="up"
              trendValue="+3%"
            />
          </Card>
        </div>
      </div>

      {/* Market Analysis */}
      <div className="px-8 mb-6">
        <Card className="p-6">
          <div className="text-sm font-semibold uppercase tracking-wide text-text-dim mb-5">
            Market Analysis
          </div>

          <div className="space-y-6">
            {/* Demand Trend */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green" />
                  <h3 className="text-base font-semibold text-text-primary">Demand Trend</h3>
                  <Badge variant="ok" size="sm">Growing</Badge>
                </div>
                <div className="text-sm text-green font-semibold">+18% YoY</div>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mb-3">
                Import volumes have grown consistently over the past 12 months, driven by strong domestic manufacturing demand and capacity expansion in the automotive and packaging sectors.
              </p>
              <div className="flex gap-2">
                <Tag variant="green" size="sm">Automotive +24%</Tag>
                <Tag variant="green" size="sm">Packaging +16%</Tag>
                <Tag variant="amber" size="sm">Construction +8%</Tag>
              </div>
            </div>

            {/* Competition */}
            <div className="pt-5 border-t border-border">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-amber" />
                  <h3 className="text-base font-semibold text-text-primary">Competition Level</h3>
                  <Badge variant="warn" size="sm">Moderate</Badge>
                </div>
                <div className="text-sm text-text-secondary">847 active importers</div>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mb-3">
                Market has moderate competition with top 10 importers controlling 42% of volume. Room for new entrants, especially in specialty grades and regional distribution.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-3 bg-s2 rounded-lg">
                  <div className="text-xs text-text-dim mb-1">Top 10 Share</div>
                  <div className="text-lg font-heading font-bold text-amber">42%</div>
                </div>
                <div className="p-3 bg-s2 rounded-lg">
                  <div className="text-xs text-text-dim mb-1">New Entrants (12mo)</div>
                  <div className="text-lg font-heading font-bold text-text-primary">127</div>
                </div>
                <div className="p-3 bg-s2 rounded-lg">
                  <div className="text-xs text-text-dim mb-1">Market Fragmentation</div>
                  <div className="text-lg font-heading font-bold text-green">High</div>
                </div>
              </div>
            </div>

            {/* Price Trends */}
            <div className="pt-5 border-t border-border">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-gold" />
                  <h3 className="text-base font-semibold text-text-primary">Price Dynamics</h3>
                  <Badge variant="grey" size="sm">Stable</Badge>
                </div>
                <div className="text-sm text-text-secondary">+3% in last 6 months</div>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mb-3">
                Prices remain relatively stable with slight upward trend due to raw material costs. Strong demand is supporting price levels despite supply increases.
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-muted">Current average</span>
                  <span className="text-amber font-semibold">$1,087 / ton</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-muted">6-month range</span>
                  <span className="text-text-secondary">$1,034 - $1,164</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-muted">Volatility</span>
                  <span className="text-green">Low (±6%)</span>
                </div>
              </div>
            </div>

            {/* Entry Barriers */}
            <div className="pt-5 border-t border-border">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-blue" />
                  <h3 className="text-base font-semibold text-text-primary">Entry Barriers</h3>
                  <Badge variant="ok" size="sm">Favorable</Badge>
                </div>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mb-3">
                Relatively low barriers to entry. Standard import requirements, no major regulatory hurdles. Good logistics infrastructure and multiple port options.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2 p-3 bg-green-dark/40 border border-green/15 rounded-lg">
                  <div className="w-1.5 h-1.5 rounded-full bg-green mt-1.5 flex-shrink-0" />
                  <div className="text-sm text-text-secondary">
                    Standard tariff: 6.5% (with FTA: 0%)
                  </div>
                </div>
                <div className="flex items-start gap-2 p-3 bg-green-dark/40 border border-green/15 rounded-lg">
                  <div className="w-1.5 h-1.5 rounded-full bg-green mt-1.5 flex-shrink-0" />
                  <div className="text-sm text-text-secondary">
                    No import licensing required
                  </div>
                </div>
                <div className="flex items-start gap-2 p-3 bg-green-dark/40 border border-green/15 rounded-lg">
                  <div className="w-1.5 h-1.5 rounded-full bg-green mt-1.5 flex-shrink-0" />
                  <div className="text-sm text-text-secondary">
                    Multiple ports with good infrastructure
                  </div>
                </div>
                <div className="flex items-start gap-2 p-3 bg-green-dark/40 border border-green/15 rounded-lg">
                  <div className="w-1.5 h-1.5 rounded-full bg-green mt-1.5 flex-shrink-0" />
                  <div className="text-sm text-text-secondary">
                    Established supplier base in nearby regions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Recommendations */}
      <div className="px-8 mb-6">
        <Card className="p-6 bg-green-dark/20 border border-green/20">
          <div className="flex items-start gap-3">
            <TrendingUp className="w-5 h-5 text-green flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-base font-semibold text-text-primary mb-2">
                Market Entry Recommendation: <span className="text-green">Favorable</span>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mb-3">
                This market shows strong growth momentum with manageable competition and low entry barriers. Consider entering now while demand is accelerating and before market becomes more crowded.
              </p>
              <div className="flex gap-2">
                <Button variant="green" size="sm">Find Buyers in Turkey</Button>
                <Button variant="ghost" size="sm">Download Full Report</Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Top Competitors */}
      <div className="px-8">
        <Card className="p-6">
          <div className="text-sm font-semibold uppercase tracking-wide text-text-dim mb-4">
            Top Competitors in This Market
          </div>

          <div className="space-y-2">
            {[
              { name: "BASF SE", volume: "24,500 tons/year", share: "5.7%", trend: "up" },
              { name: "LyondellBasell", volume: "18,200 tons/year", share: "4.3%", trend: "up" },
              { name: "SABIC Europe", volume: "15,800 tons/year", share: "3.7%", trend: "stable" },
              { name: "Borealis AG", volume: "14,100 tons/year", share: "3.3%", trend: "up" },
            ].map((competitor, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-s2 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-s3 flex items-center justify-center text-xs font-bold text-text-dim">
                    {idx + 1}
                  </div>
                  <div className="text-sm font-medium text-text-primary">{competitor.name}</div>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div className="text-text-secondary">{competitor.volume}</div>
                  <div className="text-amber font-semibold w-16 text-right">{competitor.share}</div>
                  <div className="w-16">
                    {competitor.trend === "up" ? (
                      <Badge variant="ok" size="sm">↑ Growing</Badge>
                    ) : (
                      <Badge variant="grey" size="sm">→ Stable</Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
