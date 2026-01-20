import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import PricingSection from "@/components/PricingSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import TrustedBySection from "@/components/TrustedBy";
import SeasonalMenuSection from "@/components/SeasonalMenuSection";
import CareProgramSection from "@/components/CareProgramSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustedBySection /> 
      <AboutSection />  
      <ProductsSection />

      <PricingSection />          
      <SeasonalMenuSection />
      <CareProgramSection />      
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
