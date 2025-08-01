
import { Button } from "@/components/ui/button";
import { ArrowRight, Store, MapPin, Wrench, Users } from "lucide-react";

const HeroSection = () => {
  return (
        <section className="relative min-h-[92vh] max-h-[80vh] flex items-center justify-center overflow-hidden bg-gray-900 shadow-2xl border border-gray-800">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-business-900/20 via-transparent to-business-800/20"></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-business-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-business-600/10 rounded-full blur-3xl animate-[pulse_3s_ease-in-out_infinite]"></div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Main Heading with Gradient */}
        <h1 className="text-3xl md:text-7xl lg:text-7xl font-bold mb-4 animate-fade-in">
          <span className="bg-gradient-to-r from-white via-business-300 to-white bg-clip-text text-transparent">
            Premium
          </span>
          <br />
          <span className="bg-gradient-to-r from-business-100 via-business-500 to-business-600 bg-clip-text text-transparent">
            SuperStockist Pro
          </span>
          <br />
        </h1>

        {/* Enhanced Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed animate-fade-in font-light">
          Expert kiosk and store setup solutions for <span className="text-business-400 font-bold">25+ premium brands</span>. 
          <br className="hidden md:block" />
          From <span className="text-business-400 font-medium">Tanishq</span> and <span className="text-business-400 font-medium">Titan</span> to <span className="text-business-400 font-medium">Nescafe</span> and <span className="text-business-400 font-medium">Havells</span> - we bring brands to life with strategic retail setups.
        </p>

        {/* Visual Summary Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-3xl mx-auto">
          <div className="flex flex-col items-center group animate-fade-in">
            <div className="w-16 h-16 bg-gradient-to-br from-business-500/20 to-business-600/20 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 border border-business-500/30">
              <Store className="w-8 h-8 text-business-400" />
            </div>
            <span className="text-sm text-gray-400 font-medium">Store Setup</span>
          </div>
          
          <div className="flex flex-col items-center group animate-fade-in">
            <div className="w-16 h-16 bg-gradient-to-br from-business-500/20 to-business-600/20 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 border border-business-500/30">
              <MapPin className="w-8 h-8 text-business-400" />
            </div>
            <span className="text-sm text-gray-400 font-medium">Strategic Locations</span>
          </div>
          
          <div className="flex flex-col items-center group animate-fade-in">
            <div className="w-16 h-16 bg-gradient-to-br from-business-500/20 to-business-600/20 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 border border-business-500/30">
              <Wrench className="w-8 h-8 text-business-400" />
            </div>
            <span className="text-sm text-gray-400 font-medium">Expert Installation</span>
          </div>
          
          <div className="flex flex-col items-center group animate-fade-in">
            <div className="w-16 h-16 bg-gradient-to-br from-business-500/20 to-business-600/20 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 border border-business-500/30">
              <Users className="w-8 h-8 text-business-400" />
            </div>
            <span className="text-sm text-gray-400 font-medium">25+ Brands</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in">
          <a href="#section2">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-business-500 to-business-600 hover:from-business-600 hover:to-business-700 text-white border-0 px-8 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-business-500/25 transition-all duration-300 transform hover:scale-105 group"
            >
              Explore Premium Brands
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </a>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
