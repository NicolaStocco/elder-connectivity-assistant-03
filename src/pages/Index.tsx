
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ChallengeSection from "@/components/ChallengeSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import HealthcareIntegration from "@/components/HealthcareIntegration"

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <ChallengeSection />
      <HealthcareIntegration />
      <SolutionSection />
      <HowItWorksSection />
      <PricingSection />
      <AboutSection />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
