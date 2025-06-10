
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-business-500/10 to-business-700/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Premium <span className="text-business-600">SuperStockist</span>
            <br />
            Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
            Your trusted partner for premium brands like Tanishq, Titan, and Mia. 
            Delivering excellence through innovative inventory management and seamless communication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/login">
              <Button size="lg" className="business-gradient hover:opacity-90 transition-all duration-300 transform hover:scale-105">
                Client Portal
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-business-500 text-business-600 hover:bg-business-50">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
