import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, ArrowDown, ArrowUp, Sparkles, AlertCircle } from "lucide-react";

type TierType = "none" | "standard" | "premium";

interface TermsData {
  apr: { value: string; change?: string };
  maxLtv: { value: string; change?: string };
  reserveRatio: { value: string; change?: string };
  collateral: { value: string };
  withdrawalCycle: { value: string; change?: string };
  minDeposit: { value: string; change?: string };
  protocolFee?: { value: string };
}

const tiersData: Record<TierType, { title: string; score?: number; terms: TermsData }> = {
  none: {
    title: "No Reputa Score Detected",
    terms: {
      apr: { value: "12.5%" },
      maxLtv: { value: "50%" },
      reserveRatio: { value: "25%" },
      collateral: { value: "200%" },
      withdrawalCycle: { value: "7 days" },
      minDeposit: { value: "1,000 SUI" },
    },
  },
  standard: {
    title: "Standard Tier Benefits",
    score: 725,
    terms: {
      apr: { value: "10.0%", change: "-2.5%" },
      maxLtv: { value: "65%", change: "+15%" },
      reserveRatio: { value: "20%", change: "-5%" },
      collateral: { value: "154%" },
      withdrawalCycle: { value: "5 days", change: "↓" },
      minDeposit: { value: "500 SUI", change: "↓" },
    },
  },
  premium: {
    title: "Premium Tier Benefits",
    score: 856,
    terms: {
      apr: { value: "8.0%", change: "-4.5%" },
      maxLtv: { value: "80%", change: "+30%" },
      reserveRatio: { value: "15%", change: "-10%" },
      collateral: { value: "125%" },
      withdrawalCycle: { value: "3 days", change: "↓" },
      minDeposit: { value: "100 SUI", change: "↓" },
      protocolFee: { value: "0.25% (reduced)" },
    },
  },
};

const BorrowingTermsPanel = () => {
  const [currentTier, setCurrentTier] = useState<TierType>("none");
  const data = tiersData[currentTier];

  const getCardStyles = () => {
    switch (currentTier) {
      case "premium":
        return "border-2 border-transparent bg-gradient-to-br from-card via-card to-card relative before:absolute before:inset-0 before:rounded-xl before:p-[2px] before:gradient-premium before:-z-10 glow-premium";
      case "standard":
        return "border-2 border-tier-standard/50 glow-primary";
      default:
        return "border border-border";
    }
  };

  return (
    <section className="py-20" id="terms">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl mb-4">
            Your Borrowing Terms
          </h2>
          <p className="text-muted-foreground">
            See how your Reputa score unlocks better rates and terms
          </p>
        </div>

        {/* Tier Selector */}
        <div className="flex justify-center gap-2 mb-8">
          {(["none", "standard", "premium"] as TierType[]).map((tier) => (
            <button
              key={tier}
              onClick={() => setCurrentTier(tier)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                currentTier === tier
                  ? tier === "premium"
                    ? "gradient-premium text-primary-foreground"
                    : tier === "standard"
                    ? "bg-tier-standard text-tier-standard-foreground"
                    : "bg-secondary text-secondary-foreground"
                  : "bg-muted/30 text-muted-foreground hover:bg-muted/50"
              }`}
            >
              {tier === "none" ? "No Score" : tier === "standard" ? "Score 600-799" : "Score 800+"}
            </button>
          ))}
        </div>

        <Card className={`mx-auto max-w-2xl p-8 card-glass ${getCardStyles()}`}>
          {/* Header */}
          <div className="mb-6 text-center">
            <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Your Borrowing Terms
            </div>
            {data.score ? (
              <div className="flex items-center justify-center gap-2">
                <span className="font-display text-2xl font-bold text-foreground">
                  Reputa Score: {data.score}
                </span>
                {currentTier === "premium" ? (
                  <div className="flex">
                    <Star className="h-5 w-5 fill-star text-star" />
                    <Star className="h-5 w-5 fill-star text-star" />
                  </div>
                ) : (
                  <Star className="h-5 w-5 fill-tier-standard text-tier-standard" />
                )}
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <AlertCircle className="h-5 w-5" />
                <span className="font-medium">No Reputa Score Detected</span>
              </div>
            )}
            <div className={`mt-2 text-sm font-medium ${
              currentTier === "premium" 
                ? "gradient-premium-text" 
                : currentTier === "standard"
                ? "text-tier-standard"
                : "text-muted-foreground"
            }`}>
              {data.title}
            </div>
          </div>

          {/* Terms Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            <TermItem
              label="APR"
              value={data.terms.apr.value}
              change={data.terms.apr.change}
              isImprovement={!!data.terms.apr.change}
              tier={currentTier}
            />
            <TermItem
              label="Max LTV"
              value={data.terms.maxLtv.value}
              change={data.terms.maxLtv.change}
              isImprovement={!!data.terms.maxLtv.change}
              isIncrease
              tier={currentTier}
            />
            <TermItem
              label="Reserve Ratio"
              value={data.terms.reserveRatio.value}
              change={data.terms.reserveRatio.change}
              isImprovement={!!data.terms.reserveRatio.change}
              tier={currentTier}
            />
            <TermItem
              label="Collateral Required"
              value={data.terms.collateral.value}
              tier={currentTier}
            />
            <TermItem
              label="Withdrawal Cycle"
              value={data.terms.withdrawalCycle.value}
              change={data.terms.withdrawalCycle.change}
              isImprovement={!!data.terms.withdrawalCycle.change}
              tier={currentTier}
            />
            <TermItem
              label="Minimum Deposit"
              value={data.terms.minDeposit.value}
              change={data.terms.minDeposit.change}
              isImprovement={!!data.terms.minDeposit.change}
              tier={currentTier}
            />
            {data.terms.protocolFee && (
              <div className="sm:col-span-2">
                <TermItem
                  label="Protocol Fee"
                  value={data.terms.protocolFee.value}
                  isImprovement
                  tier={currentTier}
                />
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            {currentTier === "none" ? (
              <>
                <Button variant="hero" size="lg">
                  <Sparkles className="h-4 w-4" />
                  Get Your Reputa Score
                </Button>
                <Button variant="outline" size="lg">
                  Borrow Now
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" size="lg">
                  View Score Details
                </Button>
                <Button variant={currentTier === "premium" ? "hero" : "default"} size="lg">
                  Borrow Now
                </Button>
              </>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};

interface TermItemProps {
  label: string;
  value: string;
  change?: string;
  isImprovement?: boolean;
  isIncrease?: boolean;
  tier: TierType;
}

const TermItem = ({ label, value, change, isImprovement, isIncrease, tier }: TermItemProps) => {
  return (
    <div className="flex items-center justify-between rounded-lg bg-muted/20 px-4 py-3">
      <span className="text-sm text-muted-foreground">{label}</span>
      <div className="flex items-center gap-2">
        <span className="font-semibold text-foreground">{value}</span>
        {change && isImprovement && (
          <span className={`flex items-center text-xs font-medium ${
            tier === "premium" ? "gradient-premium-text" : "text-success"
          }`}>
            {isIncrease ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
            {change !== "↓" && change}
          </span>
        )}
      </div>
    </div>
  );
};

export default BorrowingTermsPanel;
