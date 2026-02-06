import { Wallet } from "lucide-react";
import { ConnectButton } from "@mysten/dapp-kit-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-premium">
            <span className="text-lg font-bold text-primary-foreground">S</span>
          </div>
          <span className="font-display text-xl font-bold text-foreground">
            SuiCredit
          </span>
        </div>
        <ConnectButton className="gap-2">
          <Wallet className="h-4 w-4" />
          Connect Wallet
        </ConnectButton>
      </div>
    </header>
  );
};

export default Header;
