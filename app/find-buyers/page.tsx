import { Metadata } from "next";
import { Search, MapPin, Package, Globe } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Tag } from "@/components/ui/Tag";
import { Badge } from "@/components/ui/Badge";
import { Metric } from "@/components/ui/Metric";

export const metadata: Metadata = {
  title: "Find Buyers | ADAMftd",
  description: "Discover verified buyers with real shipment data",
};

const buyers = [
  {
    id: 1,
    name: "BASF SE",
    country: "Germany",
    city: "Ludwigshafen",
    website: "basf.com",
    status: "verified",
    shipmentsLastMonth: 127,
    totalShipments: 2847,
    avgShipmentValue: "$127,000",
    lastShipment: "3 days ago",
    products: ["Polypropylene", "Polyethylene", "Chemical compounds"],
    ports: ["Hamburg", "Rotterdam", "Antwerp"],
    reliability: 98,
    paymentTerms: "L/C, 60 days",
    contactAvailable: true,
  },
  {
    id: 2,
    name: "LyondellBasell Industries",
    country: "Netherlands",
    city: "Rotterdam",
    website: "lyondellbasell.com",
    status: "verified",
    shipmentsLastMonth: 94,
    totalShipments: 1923,
    avgShipmentValue: "$98,500",
    lastShipment: "1 week ago",
    products: ["Polypropylene", "Polyethylene"],
    ports: ["Rotterdam", "Hamburg"],
    reliability: 96,
    paymentTerms: "T/T, 45 days",
    contactAvailable: true,
  },
  {
    id: 3,
    name: "SABIC Europe B.V.",
    country: "Netherlands",
    city: "Sittard",
    website: "sabic.com",
    status: "verified",
    shipmentsLastMonth: 86,
    totalShipments: 1654,
    avgShipmentValue: "$142,000",
    lastShipment: "5 days ago",
    products: ["Polypropylene", "Engineering plastics"],
    ports: ["Rotterdam", "Antwerp"],
    reliability: 99,
    paymentTerms: "L/C, 90 days",
    contactAvailable: false,
  },
  {
    id: 4,
    name: "Borealis AG",
    country: "Austria",
    city: "Vienna",
    website: "borealisgroup.com",
    status: "verified",
    shipmentsLastMonth: 73,
    totalShipments: 1432,
    avgShipmentValue: "$156,000",
    lastShipment: "2 days ago",
    products: ["Polypropylene", "Polyethylene", "Circular polymers"],
    ports: ["Hamburg", "Trieste"],
    reliability: 97,
    paymentTerms: "L/C, 60 days",
    contactAvailable: true,
  },
  {
    id: 5,
    name: "Ineos Olefins & Polymers",
    country: "Belgium",
    city: "Antwerp",
    website: "ineos.com",
    status: "review",
    shipmentsLastMonth: 61,
    totalShipments: 987,
    avgShipmentValue: "$89,000",
    lastShipment: "2 weeks ago",
    products: ["Polypropylene"],
    ports: ["Antwerp", "Rotterdam"],
    reliability: 92,
    paymentTerms: "T/T, 30 days",
    contactAvailable: true,
  },
];

export default function FindBuyersPage() {
  return (
    <div className="min-h-screen pb-20 md:pb-8">
      {/* Hero Section */}
      <div className="px-8 pt-12 pb-7 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[240px] bg-gradient-radial from-green/7 to-transparent pointer-events-none" />

        <div className="relative">
          <div className="text-xs font-bold tracking-[2px] uppercase text-green mb-4">
            Commercial Intelligence
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3.5">
            Find Verified Buyers
          </h1>
          <p className="text-base text-text-secondary max-w-[600px] leading-relaxed">
            See who is actually importing your product right now — with real shipment evidence, not directories.
          </p>
        </div>
      </div>

      {/* Search Form */}
      <div className="px-8 mb-6">
        <Card className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <Input
                type="text"
                placeholder="Enter product (e.g., Polypropylene, Steel coils)"
                icon={Package}
                defaultValue="Polypropylene"
              />
            </div>
            <div>
              <Select defaultValue="turkey">
                <option value="">Destination Country</option>
                <option value="turkey">Turkey</option>
                <option value="germany">Germany</option>
                <option value="france">France</option>
                <option value="italy">Italy</option>
                <option value="spain">Spain</option>
              </Select>
            </div>
            <div>
              <Button variant="green" className="w-full justify-center">
                <Search className="w-4 h-4 mr-2" />
                Search Buyers
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border">
            <span className="text-sm text-text-muted">Filters:</span>
            <Select className="text-sm">
              <option value="">Min. shipments/month</option>
              <option value="10">10+</option>
              <option value="50">50+</option>
              <option value="100">100+</option>
            </Select>
            <Select className="text-sm">
              <option value="">Reliability</option>
              <option value="95">95%+</option>
              <option value="90">90%+</option>
            </Select>
            <Select className="text-sm">
              <option value="shipments">Sort: Shipments</option>
              <option value="value">Sort: Value</option>
              <option value="recent">Sort: Most recent</option>
            </Select>
          </div>
        </Card>
      </div>

      {/* Results Summary */}
      <div className="px-8 mb-5">
        <div className="flex items-center justify-between">
          <div className="text-sm text-text-secondary">
            Found <strong className="text-green">847 verified buyers</strong> importing Polypropylene to Turkey · Showing top 5
          </div>
          <div className="flex gap-2">
            <Tag variant="green">Active this month</Tag>
            <Tag variant="gold">High volume</Tag>
          </div>
        </div>
      </div>

      {/* Buyer Cards */}
      <div className="px-8 space-y-4 mb-6">
        {buyers.map((buyer) => (
          <Card key={buyer.id} className="p-6 hover:border-green/30 transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-heading text-xl font-bold text-white">{buyer.name}</h3>
                  <Badge variant={buyer.status === "verified" ? "ok" : "warn"}>
                    {buyer.status === "verified" ? "✓ Verified" : "Under Review"}
                  </Badge>
                  {buyer.reliability >= 95 && (
                    <Tag variant="green" size="sm">
                      {buyer.reliability}% Reliable
                    </Tag>
                  )}
                </div>
                <div className="flex items-center gap-4 text-sm text-text-secondary">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {buyer.city}, {buyer.country}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5" />
                    {buyer.website}
                  </div>
                </div>
              </div>
              <Button variant="green" size="sm">
                {buyer.contactAvailable ? "View Contact" : "Request Contact"}
              </Button>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 pb-4 border-b border-border">
              <Metric
                label="Shipments (30d)"
                value={buyer.shipmentsLastMonth.toString()}
                trend="up"
                trendValue="+18%"
              />
              <Metric
                label="Total Shipments"
                value={buyer.totalShipments.toLocaleString()}
              />
              <Metric
                label="Avg. Shipment Value"
                value={buyer.avgShipmentValue}
              />
              <Metric
                label="Last Shipment"
                value={buyer.lastShipment}
              />
            </div>

            {/* Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-text-dim uppercase text-xs font-semibold mb-2">
                  Products Imported
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {buyer.products.map((product, idx) => (
                    <Tag key={idx} variant="blue" size="sm">
                      {product}
                    </Tag>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-text-dim uppercase text-xs font-semibold mb-2">
                  Main Ports
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {buyer.ports.map((port, idx) => (
                    <Tag key={idx} variant="amber" size="sm">
                      {port}
                    </Tag>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-text-dim uppercase text-xs font-semibold mb-2">
                  Payment Terms
                </div>
                <div className="text-text-secondary">{buyer.paymentTerms}</div>
              </div>
              <div>
                <div className="text-text-dim uppercase text-xs font-semibold mb-2">
                  Quick Actions
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    View Shipments
                  </Button>
                  <Button variant="ghost" size="sm">
                    Full Report
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="px-8 flex items-center justify-center gap-2">
        <Button variant="ghost" size="sm" disabled>
          Previous
        </Button>
        <Button variant="ghost" size="sm" className="bg-s2">
          1
        </Button>
        <Button variant="ghost" size="sm">
          2
        </Button>
        <Button variant="ghost" size="sm">
          3
        </Button>
        <span className="text-text-dim px-2">...</span>
        <Button variant="ghost" size="sm">
          17
        </Button>
        <Button variant="ghost" size="sm">
          Next
        </Button>
      </div>
    </div>
  );
}
