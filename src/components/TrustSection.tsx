import { ShieldCheck, FileCheck, Eye, TrendingUp, Users } from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "TEE-Verified Scoring",
    description: "Powered by Sui Nautilus",
  },
  {
    icon: FileCheck,
    title: "Audited Smart Contracts",
    description: "Security review completed",
  },
  {
    icon: Eye,
    title: "Transparent Terms",
    description: "No hidden fees or surprises",
  },
];

const TrustSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl mb-4">
            Built on Trust
          </h2>
          <p className="text-muted-foreground">
            Security and transparency at every level
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          {/* Trust Items */}
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            {trustItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                  <item.icon className="h-5 w-5 text-success" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{item.title}</div>
                  <div className="text-sm text-muted-foreground">{item.description}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-12 rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full gradient-premium">
                <TrendingUp className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-foreground">$2.45M</div>
                <div className="text-sm text-muted-foreground">Total Value Locked</div>
              </div>
            </div>
            
            <div className="h-12 w-px bg-border hidden sm:block" />
            
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-tier-standard">
                <Users className="h-6 w-6 text-tier-standard-foreground" />
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-foreground">127</div>
                <div className="text-sm text-muted-foreground">Active Borrowers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
