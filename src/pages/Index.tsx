import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BorrowingTermsPanel from "@/components/BorrowingTermsPanel";
import ValuePropsSection from "@/components/ValuePropsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ComparisonTable from "@/components/ComparisonTable";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BorrowingTermsPanel />
        <ValuePropsSection />
        <HowItWorksSection />
        <ComparisonTable />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
