import { Metadata } from "next";
import { Ship, Package, MapPin, Calculator, FileText, CheckCircle, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Metric } from "@/components/ui/Metric";
import { Badge } from "@/components/ui/Badge";
import { Tag } from "@/components/ui/Tag";

export const metadata: Metadata = {
  title: "Tariffs & Entry | ADAMftd",
  description: "Calculate tariffs, duties, and entry requirements",
};

export default function TariffsPage() {
  return (
    <div className="min-h-screen pb-20 md:pb-8">
      {/* Hero Section */}
      <div className="px-8 pt-12 pb-7 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[240px] bg-gradient-radial from-purple/7 to-transparent pointer-events-none" />

        <div className="relative">
          <div className="text-xs font-bold tracking-[2px] uppercase text-purple mb-4">
            Compliance Intelligence
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3.5">
            Check Tariffs & Entry Rules
          </h1>
          <p className="text-base text-text-secondary max-w-[600px] leading-relaxed">
            Find the exact duty rate, FTA eligibility, required documents and landed cost before you commit.
          </p>
        </div>
      </div>

      {/* Calculator Form */}
      <div className="px-8 mb-6">
        <Card className="p-6">
          <div className="text-sm font-semibold uppercase tracking-wide text-text-dim mb-4">
            Tariff Calculator
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-sm text-text-secondary mb-2 block">Product / HS Code</label>
              <Input
                type="text"
                placeholder="e.g., Polypropylene or 3902.10"
                icon={Package}
                defaultValue="3902.10"
              />
            </div>
            <div>
              <label className="text-sm text-text-secondary mb-2 block">Product Description</label>
              <Input
                type="text"
                placeholder="Full product name"
                defaultValue="Polypropylene Granules"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
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
                <option value="eu">European Union</option>
                <option value="uk">United Kingdom</option>
              </Select>
            </div>
            <div>
              <label className="text-sm text-text-secondary mb-2 block">Shipment Value (USD)</label>
              <Input
                type="number"
                placeholder="e.g., 25000"
                defaultValue="25000"
              />
            </div>
          </div>

          <Button variant="accent" className="w-full md:w-auto justify-center">
            <Calculator className="w-4 h-4 mr-2" />
            Calculate Landed Cost
          </Button>
        </Card>
      </div>

      {/* Results */}
      <div className="px-8 mb-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wide text-text-dim mb-1">
                Tariff Calculation Results
              </div>
              <div className="text-xs text-text-muted">
                HS 3902.10 · Saudi Arabia → Turkey
              </div>
            </div>
            <Badge variant="ok">FTA Eligible</Badge>
          </div>

          {/* Cost Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Metric
              label="FOB Value"
              value="$25,000"
              subtext="Product value"
            />
            <Metric
              label="Freight & Insurance"
              value="$1,200"
              subtext="Estimated CIF"
            />
            <Metric
              label="Total Duties"
              value="$0"
              subtext="With FTA certificate"
              className="bg-green-dark/40 p-4 rounded-lg"
            />
            <Metric
              label="Landed Cost"
              value="$26,200"
              subtext="All-in price"
              className="bg-s2 p-4 rounded-lg"
            />
          </div>

          {/* Detailed Breakdown */}
          <div className="space-y-2 mb-6 pb-6 border-b border-border">
            <div className="flex items-center justify-between text-sm p-3 bg-s2 rounded-lg">
              <span className="text-text-secondary">FOB Value</span>
              <span className="text-text-primary font-semibold">$25,000.00</span>
            </div>
            <div className="flex items-center justify-between text-sm p-3 bg-s2 rounded-lg">
              <span className="text-text-secondary">Freight (estimated)</span>
              <span className="text-text-primary font-semibold">$1,000.00</span>
            </div>
            <div className="flex items-center justify-between text-sm p-3 bg-s2 rounded-lg">
              <span className="text-text-secondary">Insurance (0.5%)</span>
              <span className="text-text-primary font-semibold">$125.00</span>
            </div>
            <div className="flex items-center justify-between text-sm p-3 bg-s2 rounded-lg">
              <span className="text-text-secondary">CIF Value</span>
              <span className="text-text-primary font-semibold">$26,125.00</span>
            </div>
            <div className="flex items-center justify-between text-sm p-3 bg-green-dark/40 border border-green/15 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="text-text-secondary">Import Duty (6.5%)</span>
                <Tag variant="green" size="sm">FTA: 0%</Tag>
              </div>
              <span className="text-green font-semibold line-through">$1,698.13</span>
              <span className="text-green font-bold">$0.00</span>
            </div>
            <div className="flex items-center justify-between text-sm p-3 bg-s2 rounded-lg">
              <span className="text-text-secondary">VAT (20%)</span>
              <span className="text-text-primary font-semibold">$5,225.00</span>
            </div>
            <div className="flex items-center justify-between text-sm p-3 bg-s2 rounded-lg">
              <span className="text-text-secondary">Customs Clearance</span>
              <span className="text-text-primary font-semibold">$150.00</span>
            </div>
            <div className="flex items-center justify-between text-base p-4 bg-purple-dark/40 border border-purple/20 rounded-lg font-semibold">
              <span className="text-text-primary">Total Landed Cost</span>
              <span className="text-purple text-xl">$26,275.00</span>
            </div>
          </div>

          {/* Savings */}
          <div className="p-4 bg-green-dark/40 border border-green/15 rounded-lg mb-6">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green flex-shrink-0" />
              <div>
                <div className="text-sm font-semibold text-text-primary mb-1">
                  FTA Benefit: Save $1,698 in import duties
                </div>
                <div className="text-xs text-text-secondary">
                  With Turkey-GCC Free Trade Agreement certificate of origin
                </div>
              </div>
            </div>
          </div>

          {/* Tariff Details */}
          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-text-dim mb-4">
              Tariff Details
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-s2 rounded-lg">
                <div className="text-xs text-text-dim uppercase mb-2">HS Code</div>
                <div className="text-base font-heading font-bold text-text-primary mb-1">3902.10</div>
                <div className="text-xs text-text-muted">Polypropylene in primary forms</div>
              </div>

              <div className="p-4 bg-s2 rounded-lg">
                <div className="text-xs text-text-dim uppercase mb-2">MFN Duty Rate</div>
                <div className="text-base font-heading font-bold text-amber mb-1">6.5%</div>
                <div className="text-xs text-text-muted">Most Favored Nation rate</div>
              </div>

              <div className="p-4 bg-s2 rounded-lg">
                <div className="text-xs text-text-dim uppercase mb-2">FTA Rate</div>
                <div className="text-base font-heading font-bold text-green mb-1">0%</div>
                <div className="text-xs text-text-muted">Turkey-GCC Free Trade Agreement</div>
              </div>

              <div className="p-4 bg-s2 rounded-lg">
                <div className="text-xs text-text-dim uppercase mb-2">Additional Taxes</div>
                <div className="text-base font-heading font-bold text-text-primary mb-1">20% VAT</div>
                <div className="text-xs text-text-muted">Value Added Tax applies</div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Documentation Requirements */}
      <div className="px-8 mb-6">
        <Card className="p-6">
          <div className="text-sm font-semibold uppercase tracking-wide text-text-dim mb-4">
            Required Documentation
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-start gap-3 p-4 bg-s2 rounded-lg">
              <CheckCircle className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-semibold text-text-primary mb-1">Certificate of Origin</div>
                <div className="text-xs text-text-muted">Required for FTA duty-free treatment</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-s2 rounded-lg">
              <CheckCircle className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-semibold text-text-primary mb-1">Commercial Invoice</div>
                <div className="text-xs text-text-muted">Detailed product description and value</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-s2 rounded-lg">
              <CheckCircle className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-semibold text-text-primary mb-1">Packing List</div>
                <div className="text-xs text-text-muted">Weights, dimensions, package count</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-s2 rounded-lg">
              <CheckCircle className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-semibold text-text-primary mb-1">Bill of Lading</div>
                <div className="text-xs text-text-muted">Shipping document from carrier</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-amber-dark/40 border border-amber/15 rounded-lg">
              <AlertTriangle className="w-4 h-4 text-amber flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-semibold text-text-primary mb-1">Material Safety Data Sheet</div>
                <div className="text-xs text-text-muted">Required for chemical products</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-amber-dark/40 border border-amber/15 rounded-lg">
              <AlertTriangle className="w-4 h-4 text-amber flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-semibold text-text-primary mb-1">REACH Compliance</div>
                <div className="text-xs text-text-muted">EU chemical regulation (if re-exporting to EU)</div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Compliance Alerts */}
      <div className="px-8">
        <Card className="p-5 bg-amber-dark/20 border border-amber/20">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-semibold text-text-primary mb-2">
                New REACH Regulation Effective March 1, 2026
              </div>
              <p className="text-xs text-text-secondary mb-3">
                Additional documentation required for chemical imports. Ensure compliance before shipment to avoid delays at customs.
              </p>
              <Button variant="ghost" size="sm">View Regulation Details →</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
