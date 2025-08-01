
import { Button } from "@/components/ui/button";
import { ArrowRight, Store, MapPin, Wrench, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-15 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-business-500/10 to-business-700/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Premium <span className="text-business-600">SuperStockist</span> Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-5xl mx-auto animate-fade-in">
            Your trusted partner for premium brands like Tanishq, Titan, and Mia. 
            Delivering excellence through innovative inventory management and seamless communication.
          </p>
          <div className="flex justify-center animate-fade-in">
            <a href="#section2">
            <Button variant="outline" size="lg" className="border-business-500 text-business-600 hover:bg-business-50 mt-5">
              Learn More
            </Button>
          </a>
        </div>
      </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
