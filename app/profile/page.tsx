import { Metadata } from "next";
import { User, Mail, Building, MapPin, Phone, CreditCard, Bell, Shield, LogOut, Edit3, Save } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Badge } from "@/components/ui/Badge";
import { Metric } from "@/components/ui/Metric";
import { Progress } from "@/components/ui/Progress";

export const metadata: Metadata = {
  title: "My Profile | ADAMftd",
  description: "Account settings and preferences",
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen pb-20 md:pb-8">
      {/* Hero Section */}
      <div className="px-8 pt-12 pb-7 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[240px] bg-gradient-radial from-gold/7 to-transparent pointer-events-none" />

        <div className="relative">
          <div className="text-xs font-bold tracking-[2px] uppercase text-gold mb-4">
            Account Settings
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3.5">
            My Profile
          </h1>
          <p className="text-base text-text-secondary max-w-[600px] leading-relaxed">
            Manage your account settings, subscription, and preferences.
          </p>
        </div>
      </div>

      {/* Profile Header */}
      <div className="px-8 mb-6">
        <Card className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex gap-5">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold to-amber flex items-center justify-center text-3xl font-heading font-extrabold text-bg">
                AR
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-2xl font-heading font-extrabold text-white">Ahmet Rıza</h2>
                  <Badge variant="ok">Pro Plan</Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-text-secondary mb-3">
                  <div className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" />
                    ahmet@example.com
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5" />
                    Turkish Exports Ltd.
                  </div>
                </div>
                <div className="text-xs text-text-muted">
                  Member since January 2025 · Last login: 2 hours ago
                </div>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              <Edit3 className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </div>
        </Card>
      </div>

      {/* Usage Stats */}
      <div className="px-8 mb-6">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-text-dim mb-4">
          Usage This Month
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-5">
            <Metric
              label="Buyer Searches"
              value="47"
              subtext="Unlimited on Pro"
            />
          </Card>
          <Card className="p-5">
            <Metric
              label="Company Validations"
              value="18"
              subtext="Unlimited on Pro"
            />
          </Card>
          <Card className="p-5">
            <Metric
              label="Market Reports"
              value="3"
              subtext="10 remaining"
            />
          </Card>
          <Card className="p-5">
            <Metric
              label="Credits Balance"
              value="340"
              subtext="Renews Mar 1"
            />
          </Card>
        </div>
      </div>

      {/* Account Information */}
      <div className="px-8 mb-6">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-text-dim mb-4">
          Account Information
        </h3>
        <Card className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-text-secondary mb-2 block">Full Name</label>
              <Input
                type="text"
                defaultValue="Ahmet Rıza"
                icon={User}
              />
            </div>
            <div>
              <label className="text-sm text-text-secondary mb-2 block">Email Address</label>
              <Input
                type="email"
                defaultValue="ahmet@example.com"
                icon={Mail}
              />
            </div>
            <div>
              <label className="text-sm text-text-secondary mb-2 block">Company Name</label>
              <Input
                type="text"
                defaultValue="Turkish Exports Ltd."
                icon={Building}
              />
            </div>
            <div>
              <label className="text-sm text-text-secondary mb-2 block">Phone Number</label>
              <Input
                type="tel"
                defaultValue="+90 555 123 4567"
                icon={Phone}
              />
            </div>
            <div>
              <label className="text-sm text-text-secondary mb-2 block">Country</label>
              <Select defaultValue="turkey">
                <option value="turkey">Turkey</option>
                <option value="germany">Germany</option>
                <option value="france">France</option>
                <option value="italy">Italy</option>
              </Select>
            </div>
            <div>
              <label className="text-sm text-text-secondary mb-2 block">City</label>
              <Input
                type="text"
                defaultValue="Istanbul"
                icon={MapPin}
              />
            </div>
          </div>

          <div className="flex gap-3 mt-6 pt-6 border-t border-border">
            <Button variant="gold">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
            <Button variant="ghost">Cancel</Button>
          </div>
        </Card>
      </div>

      {/* Subscription */}
      <div className="px-8 mb-6">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-text-dim mb-4">
          Subscription & Billing
        </h3>
        <Card className="p-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h4 className="text-lg font-heading font-bold text-white">Pro Plan</h4>
                <Badge variant="ok">Active</Badge>
              </div>
              <p className="text-sm text-text-secondary mb-3">
                $99/month · Billed monthly · Next payment: March 1, 2026
              </p>
              <div className="text-xs text-text-muted">
                Payment method: •••• •••• •••• 4242 (Visa)
              </div>
            </div>
            <Button variant="ghost" size="sm">Manage Plan</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 pb-6 border-b border-border">
            <div className="p-4 bg-s2 rounded-lg">
              <div className="text-xs text-text-dim uppercase mb-2">Plan Status</div>
              <div className="text-base font-heading font-bold text-green">Active</div>
            </div>
            <div className="p-4 bg-s2 rounded-lg">
              <div className="text-xs text-text-dim uppercase mb-2">Renewal Date</div>
              <div className="text-base font-heading font-bold text-text-primary">Mar 1, 2026</div>
            </div>
            <div className="p-4 bg-s2 rounded-lg">
              <div className="text-xs text-text-dim uppercase mb-2">Next Charge</div>
              <div className="text-base font-heading font-bold text-amber">$99.00</div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button variant="ghost" size="sm">
              <CreditCard className="w-4 h-4 mr-2" />
              Update Payment Method
            </Button>
            <Button variant="ghost" size="sm">View Billing History</Button>
          </div>
        </Card>
      </div>

      {/* Preferences */}
      <div className="px-8 mb-6">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-text-dim mb-4">
          Preferences
        </h3>
        <Card className="p-6">
          <div className="space-y-5">
            <div className="flex items-center justify-between pb-5 border-b border-border">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-blue" />
                <div>
                  <div className="text-sm font-semibold text-text-primary mb-1">
                    Email Notifications
                  </div>
                  <div className="text-xs text-text-muted">
                    Receive updates about shipments, market alerts, and deals
                  </div>
                </div>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="w-11 h-6 bg-s3 rounded-full appearance-none cursor-pointer checked:bg-blue relative before:absolute before:w-5 before:h-5 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 checked:before:left-5 before:transition-all"
              />
            </div>

            <div className="flex items-center justify-between pb-5 border-b border-border">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-green" />
                <div>
                  <div className="text-sm font-semibold text-text-primary mb-1">
                    New Buyer Signals
                  </div>
                  <div className="text-xs text-text-muted">
                    Get notified when saved companies increase shipments
                  </div>
                </div>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="w-11 h-6 bg-s3 rounded-full appearance-none cursor-pointer checked:bg-green relative before:absolute before:w-5 before:h-5 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 checked:before:left-5 before:transition-all"
              />
            </div>

            <div className="flex items-center justify-between pb-5 border-b border-border">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-amber" />
                <div>
                  <div className="text-sm font-semibold text-text-primary mb-1">
                    Risk Alerts
                  </div>
                  <div className="text-xs text-text-muted">
                    Sanctions updates and compliance warnings
                  </div>
                </div>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="w-11 h-6 bg-s3 rounded-full appearance-none cursor-pointer checked:bg-amber relative before:absolute before:w-5 before:h-5 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 checked:before:left-5 before:transition-all"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-text-muted" />
                <div>
                  <div className="text-sm font-semibold text-text-primary mb-1">
                    Marketing Emails
                  </div>
                  <div className="text-xs text-text-muted">
                    Product updates and promotional offers
                  </div>
                </div>
              </div>
              <input
                type="checkbox"
                className="w-11 h-6 bg-s3 rounded-full appearance-none cursor-pointer checked:bg-blue relative before:absolute before:w-5 before:h-5 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 checked:before:left-5 before:transition-all"
              />
            </div>
          </div>
        </Card>
      </div>

      {/* Security */}
      <div className="px-8 mb-6">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-text-dim mb-4">
          Security
        </h3>
        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-green" />
                <div>
                  <div className="text-sm font-semibold text-text-primary mb-1">
                    Two-Factor Authentication
                  </div>
                  <div className="text-xs text-text-muted">
                    Add an extra layer of security to your account
                  </div>
                </div>
              </div>
              <Button variant="green" size="sm">Enable</Button>
            </div>

            <div className="flex items-center justify-between pb-4 border-b border-border">
              <div>
                <div className="text-sm font-semibold text-text-primary mb-1">
                  Change Password
                </div>
                <div className="text-xs text-text-muted">
                  Last changed 45 days ago
                </div>
              </div>
              <Button variant="ghost" size="sm">Update</Button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-text-primary mb-1">
                  Active Sessions
                </div>
                <div className="text-xs text-text-muted">
                  2 active sessions · View all devices
                </div>
              </div>
              <Button variant="ghost" size="sm">Manage</Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Danger Zone */}
      <div className="px-8">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-text-dim mb-4">
          Account Actions
        </h3>
        <Card className="p-6 bg-red-dark/10 border-red/20">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-text-primary mb-1">
                Sign Out
              </div>
              <div className="text-xs text-text-muted">
                End your current session
              </div>
            </div>
            <Button variant="ghost" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
