import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-tier-standard/10 blur-3xl" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl mb-6">
            Ready to Unlock{" "}
            <span className="gradient-premium-text">Better Terms</span>?
          </h2>
          
          <p className="mx-auto max-w-xl text-lg text-muted-foreground mb-10">
            Your DeFi reputation shouldn't start from zero every time you switch chains.
            Bring your history to Sui and get the rates you deserve.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="hero" size="xl">
              <Sparkles className="h-5 w-5" />
              Get Reputa Score
            </Button>
            <Button variant="hero-outline" size="xl">
              Start Borrowing
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
