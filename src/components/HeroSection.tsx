import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Percent } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-tier-standard/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
            <span className="text-sm text-muted-foreground">Powered by Sui Blockchain</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="mb-6 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Undercollateralized Credit
            <br />
            <span className="gradient-text">Powered by Your Reputation</span>
          </h1>
          
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Unlock better borrowing terms on Sui with your DeFi reputation. 
            Lower rates, higher LTV, and flexible collateral options.
          </p>
          
          {/* Stats */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-8">
            <div className="text-center">
              <div className="font-display text-3xl font-bold gradient-premium-text md:text-4xl">$2.45M</div>
              <div className="text-sm text-muted-foreground">Total Credit Extended</div>
            </div>
            <div className="h-12 w-px bg-border hidden sm:block" />
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-foreground md:text-4xl">127</div>
              <div className="text-sm text-muted-foreground">Active Borrowers</div>
            </div>
            <div className="h-12 w-px bg-border hidden sm:block" />
            <div className="text-center">
              <div className="font-display text-3xl font-bold text-primary md:text-4xl">8%</div>
              <div className="text-sm text-muted-foreground">Best APR Available</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              Check Your Borrowing Terms
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
              Learn More
            </Button>
          </div>
          
          {/* Feature Pills */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/30 px-4 py-2">
              <Star className="h-4 w-4 text-tier-standard" />
              <span className="text-sm text-foreground">Reputation-Based Rates</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/30 px-4 py-2">
              <Shield className="h-4 w-4 text-success" />
              <span className="text-sm text-foreground">Fixed Interest Terms</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/30 px-4 py-2">
              <Percent className="h-4 w-4 text-primary" />
              <span className="text-sm text-foreground">Up to 80% LTV</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
