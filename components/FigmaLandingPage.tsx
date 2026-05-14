import Footer from "@/components/layout/Footer";
import FabWhatsapp from "@/components/layout/FabWhatsapp";
import Navbar from "@/components/layout/Navbar";
import GlassFilters from "@/components/effects/GlassFilters";
import HeroSection from "@/components/sections/HeroSection";
import ProblemsSection from "@/components/sections/ProblemsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ComplianceSection from "@/components/sections/ComplianceSection";
import TargetSection from "@/components/sections/TargetSection";
import AccordionSection from "@/components/sections/AccordionSection";
import IntelligenceSection from "@/components/sections/IntelligenceSection";
import CTAFormSection from "@/components/sections/CTAFormSection";

export default function FigmaLandingPage() {
  return (
    <>
      <div className="landing-page">
        <GlassFilters />
        <ProblemsSection />
        <ProcessSection />
        <FeaturesSection />
        <ComplianceSection />
        <TargetSection />
        <AccordionSection />
        <IntelligenceSection />
        <CTAFormSection />
        <HeroSection />
        <Navbar />
        <FabWhatsapp />
      </div>
      <Footer />
    </>
  );
}
