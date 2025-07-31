
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Users, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-r from-business-500/5 via-transparent to-business-600/5"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-business-500/10 rounded-full animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-business-600/15 rounded-lg rotate-45 animate-[float_8s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-business-700/10 rounded-full animate-[float_7s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-business-500/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-business-500/20 rounded-sm animate-[float_5s_ease-in-out_infinite]"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-business-200 rounded-full px-4 py-2 mb-8 animate-fade-in">
          <Zap className="w-4 h-4 text-business-600" />
          <span className="text-sm font-medium text-business-700">Trusted by Premium Brands</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in">
          <span className="bg-gradient-to-r from-gray-900 via-business-600 to-gray-900 bg-clip-text text-transparent">
            Premium
          </span>
          <br />
          <span className="text-business-600 relative">
            SuperStockist
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-business-500 to-business-600 rounded-full animate-[scale-x_1s_ease-out_0.5s_both]"></div>
          </span>
          <br />
          <span className="bg-gradient-to-r from-gray-900 via-business-600 to-gray-900 bg-clip-text text-transparent">
            Solutions
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in font-light">
          Your trusted partner for premium brands like{" "}
          <span className="font-semibold text-business-600">Tanishq</span>,{" "}
          <span className="font-semibold text-business-600">Titan</span>, and{" "}
          <span className="font-semibold text-business-600">Mia</span>.
          <br className="hidden md:block" />
          Delivering excellence through innovative inventory management.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-6 hover:bg-white/80 transition-all duration-300 animate-fade-in group">
            <Package className="w-8 h-8 text-business-600 mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-semibold text-gray-900 mb-2">Smart Inventory</h3>
            <p className="text-sm text-gray-600">Advanced management systems</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-6 hover:bg-white/80 transition-all duration-300 animate-fade-in group">
            <Users className="w-8 h-8 text-business-600 mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-semibold text-gray-900 mb-2">Seamless Communication</h3>
            <p className="text-sm text-gray-600">Real-time collaboration tools</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-6 hover:bg-white/80 transition-all duration-300 animate-fade-in group">
            <Zap className="w-8 h-8 text-business-600 mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-semibold text-gray-900 mb-2">Premium Quality</h3>
            <p className="text-sm text-gray-600">Excellence in every detail</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in">
          <a href="#section2">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-business-500 to-business-600 hover:from-business-600 hover:to-business-700 text-white border-0 px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              Explore Our Solutions
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </a>
        </div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-business-400/20 to-business-600/20 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-business-500/20 to-business-700/20 rounded-full blur-3xl animate-[float_12s_ease-in-out_infinite_reverse]"></div>
    </section>
  );
};

export default HeroSection;
