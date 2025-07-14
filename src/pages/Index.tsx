import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CompatibilitySection from "@/components/CompatibilitySection";
import PricingInsights from "@/components/PricingInsights";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <CompatibilitySection />
      <PricingInsights />
      <Footer />
    </div>
  );
};

export default Index;
