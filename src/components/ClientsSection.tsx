
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Star, Zap } from "lucide-react";

const ClientsSection = () => {
  const businessCategories = [
    {
      title: "Distributor",
      description: "Premium Brand Distribution",
      gradient: "from-blue-500 via-blue-600 to-indigo-600",
      bgGradient: "from-blue-50/80 via-indigo-50/60 to-cyan-50/80",
      shadowColor: "shadow-blue-500/20",
      brands: [
        { name: "NESTLE", logo: "☕", description: "Coffee & Beverages", path: "/brands/nestle" },
        { name: "REO", logo: "🏠", description: "Home Solutions", path: "/brands/reo" },
        { name: "Havells", logo: "💡", description: "Electrical Solutions", path: "/brands/havells" },
        { name: "Nestle Profer", logo: "🍫", description: "Professional Food", path: "/brands/nestle-profer" },
      ]
    },
    {
      title: "Distributor Superstockists",
      description: "Premium Lifestyle Brands",
      gradient: "from-purple-500 via-purple-600 to-pink-600",
      bgGradient: "from-purple-50/80 via-pink-50/60 to-rose-50/80",
      shadowColor: "shadow-purple-500/20",
      brands: [
        { name: "Titan", logo: "⌚", description: "Luxury Watches", path: "/brands/titan" },
        { name: "Sonata", logo: "⏰", description: "Timepieces", path: "/brands/sonata" },
        { name: "Fastrack", logo: "🕶️", description: "Youth Lifestyle", path: "/brands/fastrack" },
        { name: "Dolycats", logo: "🎯", description: "Fashion Accessories", path: "/brands/dolycats" },
      ]
    },
    {
      title: "Exclusive Stores",
      description: "Premium Retail Experience",
      gradient: "from-emerald-500 via-teal-600 to-green-600",
      bgGradient: "from-emerald-50/80 via-teal-50/60 to-green-50/80",
      shadowColor: "shadow-emerald-500/20",
      brands: [
        { name: "Titan World", logo: "🌟", description: "Premium Watches", path: "/brands/titan-world" },
        { name: "Helios", logo: "⚡", description: "Watch Retail", path: "/brands/helios" },
        { name: "Fastrack Store", logo: "🚀", description: "Youth Store", path: "/brands/fastrack-store" },
        { name: "Nescafe Kiosks", logo: "☕", description: "Coffee Experience", path: "/brands/nescafe-kiosks" },
        { name: "Mia by Tanishq", logo: "💎", description: "Fashion Jewelry", path: "/brands/mia" },
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-pink-400/30 to-orange-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-business-400 to-business-600 rounded-full opacity-20 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-business-100/80 to-business-200/80 backdrop-blur-sm px-6 py-3 rounded-full text-business-700 text-sm font-medium mb-8 shadow-lg border border-business-200/30">
            <Sparkles className="w-5 h-5 animate-spin" style={{ animationDuration: '3s' }} />
            <span className="font-semibold">Premium Partnerships</span>
            <Star className="w-4 h-4" />
          </div>
          <h2 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight tracking-tight">
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">Trusted by</span>
            <span className="bg-gradient-to-r from-business-600 via-business-700 to-business-800 bg-clip-text text-transparent block mt-2 drop-shadow-sm">
              Premium Brands
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-light">
            We serve as authorized partners across three key business verticals, delivering excellence 
            in distribution and retail with <span className="font-semibold text-business-700">unmatched commitment</span> to quality and service.
          </p>
        </div>
        
        {/* Enhanced Business Categories */}
        <div className="space-y-28">
          {businessCategories.map((category, categoryIndex) => (
            <div key={category.title} className="relative group">
              {/* Enhanced Category Header */}
              <div className="text-center mb-16">
                <div className={`inline-block bg-gradient-to-r ${category.gradient} text-white px-8 py-4 rounded-3xl font-bold text-2xl mb-6 shadow-2xl ${category.shadowColor} transform hover:scale-105 transition-all duration-300 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center gap-3">
                    <Zap className="w-6 h-6" />
                    {category.title}
                  </span>
                </div>
                <p className="text-gray-600 text-xl font-medium tracking-wide">
                  {category.description}
                </p>
              </div>
              
              {/* Enhanced Brands Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
                {category.brands.map((brand, brandIndex) => (
                  <Link 
                    key={brand.name}
                    to={brand.path}
                    className="group/card cursor-pointer transform transition-all duration-700 hover:scale-110 hover:z-10 relative"
                    style={{ 
                      animationDelay: `${(categoryIndex * 0.3) + (brandIndex * 0.15)}s`,
                      animation: 'fadeInUp 1s ease-out forwards'
                    }}
                  >
                    <div className={`bg-gradient-to-br ${category.bgGradient} backdrop-blur-sm rounded-3xl p-8 shadow-xl group-hover/card:shadow-2xl ${category.shadowColor} transition-all duration-700 border border-white/50 relative overflow-hidden`}>
                      {/* Enhanced hover effect overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover/card:opacity-15 transition-all duration-700 rounded-3xl`}></div>
                      
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 -top-10 -left-10 w-20 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 transform -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000"></div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <div className="text-5xl mb-6 transform group-hover/card:scale-125 group-hover/card:rotate-12 transition-all duration-500 filter drop-shadow-lg">
                          {brand.logo}
                        </div>
                        <h4 className="font-bold text-gray-900 text-xl mb-3 group-hover/card:text-gray-800 transition-colors duration-300 tracking-wide">
                          {brand.name}
                        </h4>
                        <p className="text-sm text-gray-600 group-hover/card:text-gray-700 leading-relaxed font-medium">
                          {brand.description}
                        </p>
                        
                        {/* Enhanced arrow indicator */}
                        <div className="mt-6 opacity-0 group-hover/card:opacity-100 transition-all duration-500 transform translate-x-4 group-hover/card:translate-x-0">
                          <div className="flex items-center gap-2 text-gray-600">
                            <span className="text-xs font-medium">Explore</span>
                            <ArrowRight className="w-4 h-4 transform group-hover/card:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              {/* Enhanced Category separator */}
              {categoryIndex < businessCategories.length - 1 && (
                <div className="flex items-center justify-center mt-20">
                  <div className={`h-1 w-40 bg-gradient-to-r ${category.gradient} rounded-full opacity-40 shadow-lg`}></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Enhanced Bottom CTA Section */}
        <div className="mt-28">
          <div className="bg-gradient-to-r from-white/90 via-business-50/90 to-white/90 backdrop-blur-lg rounded-3xl p-16 border border-white/60 shadow-2xl relative overflow-hidden">
            {/* Enhanced decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-business-500/8 via-business-600/5 to-business-700/8 rounded-3xl"></div>
            
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse rounded-3xl"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-3 bg-business-100/80 backdrop-blur-sm px-6 py-3 rounded-full text-business-700 text-sm font-semibold mb-8 shadow-lg">
                <Sparkles className="w-5 h-5 animate-spin" style={{ animationDuration: '4s' }} />
                <span>Partnership Excellence</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-business-800 mb-8 leading-tight tracking-tight">
                Comprehensive Solutions Across 
                <span className="block text-business-600 mt-2">Diverse Market Segments</span>
              </h3>
              <p className="text-business-700 text-xl max-w-5xl mx-auto leading-relaxed mb-12 font-light">
                From premium distribution partnerships to exclusive retail experiences, we deliver 
                comprehensive solutions that ensure brand excellence and customer satisfaction across 
                every touchpoint in the value chain.
              </p>
              
              {/* Enhanced Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
                {[
                  { number: "25+", label: "Premium Brands", icon: "⭐" },
                  { number: "3", label: "Business Verticals", icon: "🎯" },
                  { number: "100%", label: "Customer Satisfaction", icon: "💯" }
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center group transform hover:scale-105 transition-all duration-300">
                    <div className="text-6xl mb-2">{stat.icon}</div>
                    <div className="text-4xl font-bold text-business-600 mb-3 group-hover:text-business-700 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-business-700 font-semibold text-lg tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
