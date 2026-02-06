import { UserCheck, Eye, Wallet, CreditCard, RefreshCw } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserCheck,
    title: "Get Your Reputa Score",
    description: "Connect EVM address, answer questionnaire, receive verified score on Sui blockchain.",
  },
  {
    number: "02",
    icon: Eye,
    title: "See Your Custom Terms",
    description: "Higher scores unlock better APR, LTV ratios, and lower fees tailored to you.",
  },
  {
    number: "03",
    icon: Wallet,
    title: "Deposit Collateral",
    description: "Add SUI, USDC, or wETH as collateral to your personalized market.",
  },
  {
    number: "04",
    icon: CreditCard,
    title: "Borrow Against Reputation",
    description: "Withdraw funds up to your LTV with fixed, predictable interest rates.",
  },
  {
    number: "05",
    icon: RefreshCw,
    title: "Repay & Build More",
    description: "On-time repayment improves your Sui-native reputation for even better terms.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl mb-4">
            How SuiCredit Works
          </h2>
          <p className="text-muted-foreground">
            Start borrowing in five simple steps
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-primary via-tier-standard to-transparent hidden md:block" />
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative flex gap-6 group">
                  {/* Step number circle */}
                  <div className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border-2 border-border bg-card transition-all duration-300 group-hover:border-primary group-hover:glow-primary">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="font-mono text-xs text-primary">{step.number}</span>
                      <h3 className="font-display text-xl font-semibold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
