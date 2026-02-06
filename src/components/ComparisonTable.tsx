import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const comparisonData = [
  { term: "APR", noScore: "12.5%", score700: "10.0%", score850: "8.0%" },
  { term: "Max LTV", noScore: "50%", score700: "65%", score850: "80%" },
  { term: "Collateral", noScore: "200%", score700: "154%", score850: "125%" },
  { term: "Min Deposit", noScore: "1,000 SUI", score700: "500 SUI", score850: "100 SUI" },
  { term: "Withdrawal", noScore: "7 days", score700: "5 days", score850: "3 days" },
];

const ComparisonTable = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl mb-4">
            See What Your Score Unlocks
          </h2>
          <p className="text-muted-foreground">
            Compare benefits across different reputation tiers
          </p>
        </div>

        <Card className="mx-auto max-w-4xl overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">
                    Term
                  </th>
                  <th className="px-6 py-4 text-center">
                    <div className="text-sm font-medium text-muted-foreground">No Score</div>
                    <div className="text-xs text-muted-foreground/70">Base Terms</div>
                  </th>
                  <th className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-tier-standard" />
                      <span className="text-sm font-medium text-tier-standard">Score 700</span>
                    </div>
                    <div className="text-xs text-muted-foreground/70">Standard</div>
                  </th>
                  <th className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="h-2 w-2 rounded-full gradient-premium" />
                      <span className="text-sm font-medium gradient-premium-text">Score 850</span>
                    </div>
                    <div className="text-xs text-muted-foreground/70">Premium</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b border-border/50 transition-colors hover:bg-muted/10 ${
                      index === comparisonData.length - 1 ? "border-b-0" : ""
                    }`}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-foreground">
                      {row.term}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-muted-foreground">
                      {row.noScore}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-tier-standard">
                        <Check className="h-3 w-3" />
                        {row.score700}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center gap-1 text-sm font-medium gradient-premium-text">
                        <Check className="h-3 w-3" />
                        {row.score850}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="border-t border-border p-6 text-center">
            <Button variant="hero" size="lg">
              Calculate My Terms
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ComparisonTable;
