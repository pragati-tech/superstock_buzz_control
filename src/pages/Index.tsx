
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/ClientsSection";
// import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />
      <HeroSection />
      <ClientsSection />
      <Footer />
    </div>
  );
};

export default Index;
