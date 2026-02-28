export type User = {
  id: string;
  name: string;
  email: string;
  credits: number;
  tier: "free" | "pro";
  avatar?: string;
  initials: string;
};

export type Metric = {
  label: string;
  value: string | number;
  change?: number;
  trend?: "up" | "down" | "neutral";
  format?: "number" | "currency" | "percentage" | "text";
};

export type Tag = {
  label: string;
  variant?: "default" | "gold" | "green" | "red" | "blue" | "amber" | "purple";
};

export type Badge = {
  label: string;
  variant: "ok" | "warn" | "risk" | "grey" | "blue";
};

export type Buyer = {
  id: string;
  rank: number;
  name: string;
  location: string;
  industry: string;
  suppliers: string;
  shipmentsPerYear: number;
  volume: "low" | "medium" | "medium-high" | "high";
  volumePercent: number;
  riskStatus: "ok" | "warn" | "risk";
  tradeProfile?: {
    firstShipment: string;
    mostRecent: string;
    hsCodes: string;
    avgShipmentSize: string;
  };
  supplierRelationships?: {
    primary: string;
    secondary: string;
    tertiary?: string;
    dependencyRisk: "low" | "moderate" | "high";
  };
  opportunitySignal?: {
    switchingProbability: string;
    priceSensitivity: string;
    riskFlag: string;
  };
};

export type Deal = {
  id: string;
  title: string;
  status: "draft" | "active" | "pending" | "completed" | "cancelled";
  value: number;
  currency: string;
  buyer: {
    name: string;
    country: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type Market = {
  id: string;
  country: string;
  flag: string;
  name: string;
  size: string;
  score: number;
  demand: number;
  competition: number;
  timing: number;
};

export type Toast = {
  id: string;
  type: "success" | "error" | "warning" | "info";
  message: string;
  title?: string;
};

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
};
