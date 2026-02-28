import { Metadata } from "next";
import { Folder, Plus, Package, Building2, DollarSign, Calendar, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Tag } from "@/components/ui/Tag";
import { Progress } from "@/components/ui/Progress";

export const metadata: Metadata = {
  title: "Deal Room | ADAMftd",
  description: "Manage trade deals and documentation",
};

const deals = [
  {
    id: 1,
    title: "Polypropylene Purchase - BASF SE",
    buyer: "BASF SE",
    product: "Polypropylene Granules",
    quantity: "127 tons",
    value: "$127,000",
    status: "negotiation",
    progress: 65,
    dueDate: "Mar 15, 2026",
    lastUpdate: "2 hours ago",
    documents: 8,
    messages: 12,
  },
  {
    id: 2,
    title: "Steel Coils Export - LyondellBasell",
    buyer: "LyondellBasell Industries",
    product: "Steel Coils",
    quantity: "94 tons",
    value: "$98,500",
    status: "awaiting_docs",
    progress: 80,
    dueDate: "Mar 8, 2026",
    lastUpdate: "5 hours ago",
    documents: 12,
    messages: 24,
  },
  {
    id: 3,
    title: "Textiles Order - French Importers Ltd",
    buyer: "French Importers Ltd",
    product: "Cotton Textiles",
    quantity: "2,400 units",
    value: "$64,200",
    status: "in_transit",
    progress: 95,
    dueDate: "Mar 3, 2026",
    lastUpdate: "1 day ago",
    documents: 15,
    messages: 31,
  },
  {
    id: 4,
    title: "Chemical Compounds - Borealis AG",
    buyer: "Borealis AG",
    product: "Chemical Compounds",
    quantity: "156 tons",
    value: "$156,000",
    status: "pending",
    progress: 25,
    dueDate: "Apr 1, 2026",
    lastUpdate: "3 days ago",
    documents: 3,
    messages: 5,
  },
];

export default function DealRoomPage() {
  return (
    <div className="min-h-screen pb-20 md:pb-8">
      {/* Hero Section */}
      <div className="px-8 pt-12 pb-7 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[240px] bg-gradient-radial from-blue/7 to-transparent pointer-events-none" />

        <div className="relative">
          <div className="text-xs font-bold tracking-[2px] uppercase text-blue mb-4">
            Deal Management
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3.5">
            Deal Room
          </h1>
          <p className="text-base text-text-secondary max-w-[600px] leading-relaxed">
            Track active deals, manage documentation, and collaborate with buyers and suppliers.
          </p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="px-8 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-5">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs text-text-dim uppercase">Active Deals</div>
              <Folder className="w-4 h-4 text-blue" />
            </div>
            <div className="text-2xl font-heading font-extrabold text-white">4</div>
          </Card>
          <Card className="p-5">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs text-text-dim uppercase">Total Value</div>
              <DollarSign className="w-4 h-4 text-green" />
            </div>
            <div className="text-2xl font-heading font-extrabold text-green">$445K</div>
          </Card>
          <Card className="p-5">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs text-text-dim uppercase">In Transit</div>
              <Package className="w-4 h-4 text-amber" />
            </div>
            <div className="text-2xl font-heading font-extrabold text-amber">1</div>
          </Card>
          <Card className="p-5">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs text-text-dim uppercase">Due This Week</div>
              <Calendar className="w-4 h-4 text-red" />
            </div>
            <div className="text-2xl font-heading font-extrabold text-red">2</div>
          </Card>
        </div>
      </div>

      {/* Action Bar */}
      <div className="px-8 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Tag variant="blue">All (4)</Tag>
            <Tag variant="amber">In Progress (2)</Tag>
            <Tag variant="green">Awaiting Docs (1)</Tag>
            <Tag variant="gold">In Transit (1)</Tag>
          </div>
          <Button variant="blue">
            <Plus className="w-4 h-4 mr-2" />
            New Deal
          </Button>
        </div>
      </div>

      {/* Deals List */}
      <div className="px-8 space-y-4">
        {deals.map((deal) => (
          <Card key={deal.id} className="p-6 hover:border-blue/30 transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-heading font-bold text-white">{deal.title}</h3>
                  <Badge
                    variant={
                      deal.status === "in_transit"
                        ? "ok"
                        : deal.status === "awaiting_docs"
                        ? "warn"
                        : deal.status === "negotiation"
                        ? "grey"
                        : "blue"
                    }
                  >
                    {deal.status === "in_transit" && (
                      <>
                        <Package className="w-3 h-3 mr-1" />
                        In Transit
                      </>
                    )}
                    {deal.status === "awaiting_docs" && (
                      <>
                        <Clock className="w-3 h-3 mr-1" />
                        Awaiting Docs
                      </>
                    )}
                    {deal.status === "negotiation" && (
                      <>
                        <AlertCircle className="w-3 h-3 mr-1" />
                        Negotiation
                      </>
                    )}
                    {deal.status === "pending" && (
                      <>
                        <Clock className="w-3 h-3 mr-1" />
                        Pending
                      </>
                    )}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-text-secondary mb-3">
                  <div className="flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    {deal.buyer}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Package className="w-3.5 h-3.5" />
                    {deal.product}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5" />
                    {deal.value}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-text-dim mb-1">Due Date</div>
                <div className="text-sm font-semibold text-text-primary mb-1">{deal.dueDate}</div>
                <div className="text-xs text-text-muted">Updated {deal.lastUpdate}</div>
              </div>
            </div>

            {/* Progress */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-text-dim uppercase">Deal Progress</span>
                <span className="text-text-primary font-semibold">{deal.progress}%</span>
              </div>
              <Progress
                value={deal.progress}
                variant={
                  deal.progress >= 80 ? "green" : deal.progress >= 50 ? "amber" : "blue"
                }
              />
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-border">
              <div className="flex items-center gap-4 text-sm text-text-secondary">
                <div>{deal.documents} documents</div>
                <div>·</div>
                <div>{deal.messages} messages</div>
                <div>·</div>
                <div>{deal.quantity}</div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">View Details</Button>
                <Button variant="blue" size="sm">Update Status</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="px-8 mt-6">
        <Card className="p-6 bg-s2">
          <div className="text-sm font-semibold uppercase tracking-wide text-text-dim mb-4">
            Quick Actions
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Button variant="ghost" className="justify-start">
              <Plus className="w-4 h-4 mr-2" />
              Upload Document
            </Button>
            <Button variant="ghost" className="justify-start">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Meeting
            </Button>
            <Button variant="ghost" className="justify-start">
              <CheckCircle className="w-4 h-4 mr-2" />
              Request Approval
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
