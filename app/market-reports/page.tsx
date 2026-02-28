import { Metadata } from "next";
import { FileText, Package, MapPin, Download, Clock, CheckCircle, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Badge } from "@/components/ui/Badge";
import { Tag } from "@/components/ui/Tag";

export const metadata: Metadata = {
  title: "Market Reports | ADAMftd",
  description: "AI-generated market intelligence reports",
};

const reports = [
  {
    id: 1,
    title: "Polypropylene Market Analysis - Turkey",
    product: "Polypropylene",
    market: "Turkey",
    score: 78,
    status: "ready",
    createdAt: "2 hours ago",
    pages: 24,
    sections: ["Market Size", "Top Importers", "Pricing Trends", "Tariffs", "Entry Requirements"],
  },
  {
    id: 2,
    title: "Steel Coils Market Analysis - Germany",
    product: "Steel Coils",
    market: "Germany",
    score: 82,
    status: "ready",
    createdAt: "1 day ago",
    pages: 28,
    sections: ["Market Size", "Top Importers", "Pricing Trends", "Competition", "Regulations"],
  },
  {
    id: 3,
    title: "Textiles Market Analysis - France",
    product: "Textiles",
    market: "France",
    score: 65,
    status: "ready",
    createdAt: "3 days ago",
    pages: 22,
    sections: ["Market Size", "Top Importers", "Pricing Trends", "Sustainability Requirements"],
  },
];

export default function MarketReportsPage() {
  return (
    <div className="min-h-screen pb-20 md:pb-8">
      {/* Hero Section */}
      <div className="px-8 pt-12 pb-7 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[240px] bg-gradient-radial from-amber/8 to-transparent pointer-events-none" />

        <div className="relative">
          <div className="text-xs font-bold tracking-[2px] uppercase text-amber mb-4">
            Market Entry Reports
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3.5">
            Generate Full Market Report
          </h1>
          <p className="text-base text-text-secondary max-w-[600px] leading-relaxed">
            AI-assembled PDF with pricing, top importers, compliance, events calendar, and price forecasts.
          </p>
        </div>
      </div>

      {/* Report Generator */}
      <div className="px-8 mb-6">
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-amber" />
            <div className="text-sm font-semibold uppercase tracking-wide text-text-dim">
              AI Report Generator
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="text-sm text-text-secondary mb-2 block">Product</label>
              <Input
                type="text"
                placeholder="e.g., Polypropylene"
                icon={Package}
              />
            </div>
            <div>
              <label className="text-sm text-text-secondary mb-2 block">Target Market</label>
              <Select>
                <option value="">Select market</option>
                <option value="turkey">Turkey</option>
                <option value="germany">Germany</option>
                <option value="france">France</option>
                <option value="italy">Italy</option>
                <option value="spain">Spain</option>
              </Select>
            </div>
            <div>
              <label className="text-sm text-text-secondary mb-2 block">Report Type</label>
              <Select defaultValue="comprehensive">
                <option value="comprehensive">Comprehensive (24+ pages)</option>
                <option value="summary">Executive Summary (8-10 pages)</option>
                <option value="pricing">Pricing Focus</option>
                <option value="compliance">Compliance Focus</option>
              </Select>
            </div>
          </div>

          <div className="mb-5">
            <label className="text-sm text-text-secondary mb-2 block">Include Sections (optional)</label>
            <div className="flex flex-wrap gap-2">
              <Tag variant="amber" size="sm">Market Size & Trends</Tag>
              <Tag variant="amber" size="sm">Top 20 Importers</Tag>
              <Tag variant="amber" size="sm">Price Benchmarks</Tag>
              <Tag variant="amber" size="sm">Tariffs & Duties</Tag>
              <Tag variant="amber" size="sm">Entry Requirements</Tag>
              <Tag variant="amber" size="sm">Trade Events Calendar</Tag>
              <Tag variant="amber" size="sm">6-Month Price Forecast</Tag>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="gold" className="justify-center">
              <Sparkles className="w-4 h-4 mr-2" />
              Generate Report (5 credits)
            </Button>
            <div className="text-xs text-text-muted">
              Estimated time: 2-3 minutes · PDF format
            </div>
          </div>
        </Card>
      </div>

      {/* Sample Report Preview */}
      <div className="px-8 mb-6">
        <Card className="p-6 bg-amber-dark/10 border border-amber/20">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-lg font-heading font-bold text-white">Sample Report Preview</h3>
                <Badge variant="warn">New</Badge>
              </div>
              <p className="text-sm text-text-secondary">
                Polypropylene Market Analysis - Turkey · 24 pages
              </p>
            </div>
            <div className="text-right">
              <div className="text-xs text-text-dim uppercase mb-1">Market Score</div>
              <div className="text-3xl font-heading font-extrabold text-amber">78</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            <div className="p-3 bg-s2 rounded-lg">
              <div className="text-xs text-text-dim mb-1">Market Size</div>
              <div className="text-base font-heading font-bold text-text-primary">$524M</div>
            </div>
            <div className="p-3 bg-s2 rounded-lg">
              <div className="text-xs text-text-dim mb-1">Growth Rate</div>
              <div className="text-base font-heading font-bold text-green">+18% YoY</div>
            </div>
            <div className="p-3 bg-s2 rounded-lg">
              <div className="text-xs text-text-dim mb-1">Avg. Price</div>
              <div className="text-base font-heading font-bold text-amber">$1,087/ton</div>
            </div>
            <div className="p-3 bg-s2 rounded-lg">
              <div className="text-xs text-text-dim mb-1">Top Importers</div>
              <div className="text-base font-heading font-bold text-text-primary">847</div>
            </div>
          </div>

          <div className="text-sm font-semibold text-text-dim uppercase mb-3">Report Sections:</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
            {[
              "Executive Summary",
              "Market Size & Growth Analysis",
              "Top 20 Importers with Contact Details",
              "Price Benchmarks & Historical Trends",
              "Tariff Rates & FTA Opportunities",
              "Import Requirements & Documentation",
              "Competitive Landscape",
              "6-Month Price Forecast",
            ].map((section, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-text-secondary">
                <CheckCircle className="w-3.5 h-3.5 text-green flex-shrink-0" />
                {section}
              </div>
            ))}
          </div>

          <Button variant="ghost" size="sm">
            <FileText className="w-4 h-4 mr-2" />
            View Sample PDF
          </Button>
        </Card>
      </div>

      {/* Report History */}
      <div className="px-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-heading font-bold text-white">Your Reports</h2>
          <div className="text-sm text-text-muted">3 reports generated</div>
        </div>

        <div className="space-y-3">
          {reports.map((report) => (
            <Card key={report.id} className="p-5 hover:border-amber/30 transition-all">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-base font-heading font-bold text-white">{report.title}</h3>
                    <Badge variant="ok">Ready</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-text-secondary">
                    <div className="flex items-center gap-1.5">
                      <Package className="w-3.5 h-3.5" />
                      {report.product}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {report.market}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {report.createdAt}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-xs text-text-dim mb-1">Score</div>
                    <div className="text-2xl font-heading font-extrabold text-amber">{report.score}</div>
                  </div>
                  <Button variant="gold" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-text-muted">
                <span>{report.pages} pages</span>
                <span>·</span>
                <span>{report.sections.length} sections</span>
                <span>·</span>
                <span className="text-text-secondary">{report.sections.join(" · ")}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
