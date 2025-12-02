import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import TrustSection from "@/components/landing/TrustSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import ImpactSection from "@/components/landing/ImpactSection";
import ArchitectureSection from "@/components/landing/ArchitectureSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import WhyHorusSection from "@/components/landing/WhyHorusSection";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrustSection />
        <ProblemSection />
        <SolutionSection />
        <ImpactSection />
        <ArchitectureSection />
        <BenefitsSection />
        <WhyHorusSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
