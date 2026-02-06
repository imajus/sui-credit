import { Star, TrendingUp, Layers, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Star,
    title: "Reputation-Based",
    description: "Bring your EVM DeFi history. Lower rates, better terms based on your proven track record.",
    color: "text-tier-standard",
  },
  {
    icon: TrendingUp,
    title: "Fixed Rate Markets",
    description: "No surprise rate changes. Predictable interest costs for confident borrowing.",
    color: "text-success",
  },
  {
    icon: Layers,
    title: "Flexible Collateral",
    description: "Use SUI, USDC, or wETH. Up to 80% LTV for top-tier users with proven reputation.",
    color: "text-primary",
  },
  {
    icon: Shield,
    title: "TEE-Verified Scores",
    description: "Cryptographically proven, tamper-proof reputation powered by Sui Nautilus.",
    color: "gradient-premium-text",
  },
];

const ValuePropsSection = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl mb-4">
            Why Borrow on SuiCredit?
          </h2>
          <p className="text-muted-foreground">
            The first reputation-powered lending protocol on Sui blockchain
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/50">
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute bottom-0 left-1/2 h-24 w-24 -translate-x-1/2 translate-y-1/2 rounded-full bg-primary/20 blur-2xl" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropsSection;
