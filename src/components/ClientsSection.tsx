
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const ClientsSection = () => {
  const businessCategories = [
    {
      title: "Distributor",
      description: "Premium Brand Distribution",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
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
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
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
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
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
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-business-100 to-business-200 px-4 py-2 rounded-full text-business-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Premium Partnerships
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Trusted by
            <span className="bg-gradient-to-r from-business-600 to-business-800 bg-clip-text text-transparent block">
              Premium Brands
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We serve as authorized partners across three key business verticals, delivering excellence 
            in distribution and retail with unmatched commitment to quality and service.
          </p>
        </div>
        
        {/* Business Categories */}
        <div className="space-y-20">
          {businessCategories.map((category, categoryIndex) => (
            <div key={category.title} className="relative">
              {/* Category Header */}
              <div className="text-center mb-12">
                <div className={`inline-block bg-gradient-to-r ${category.gradient} text-white px-6 py-3 rounded-2xl font-bold text-xl mb-4 shadow-lg`}>
                  {category.title}
                </div>
                <p className="text-gray-600 text-lg font-medium">
                  {category.description}
                </p>
              </div>
              
              {/* Brands Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-8">
                {category.brands.map((brand, brandIndex) => (
                  <Link 
                    key={brand.name}
                    to={brand.path}
                    className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
                    style={{ 
                      animationDelay: `${(categoryIndex * 0.2) + (brandIndex * 0.1)}s`,
                      animation: 'fadeInUp 0.8s ease-out forwards'
                    }}
                  >
                    <div className={`bg-gradient-to-br ${category.bgGradient} rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-500 border border-white/50 backdrop-blur-sm relative overflow-hidden`}>
                      {/* Hover effect overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                          {brand.logo}
                        </div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-gray-800">
                          {brand.name}
                        </h4>
                        <p className="text-sm text-gray-600 group-hover:text-gray-700 leading-relaxed">
                          {brand.description}
                        </p>
                        
                        {/* Arrow indicator */}
                        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              {/* Category separator line */}
              {categoryIndex < businessCategories.length - 1 && (
                <div className="flex items-center justify-center mt-16">
                  <div className={`h-1 w-32 bg-gradient-to-r ${category.gradient} rounded-full opacity-30`}></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Bottom CTA Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-white/80 to-business-50/80 backdrop-blur-sm rounded-3xl p-12 border border-white/50 shadow-2xl relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-business-500/5 to-business-700/5 rounded-3xl"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 bg-business-100 px-4 py-2 rounded-full text-business-700 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Partnership Excellence
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-business-800 mb-6 leading-tight">
                Comprehensive Solutions Across 
                <span className="block text-business-600">Diverse Market Segments</span>
              </h3>
              <p className="text-business-700 text-lg max-w-4xl mx-auto leading-relaxed mb-8">
                From premium distribution partnerships to exclusive retail experiences, we deliver 
                comprehensive solutions that ensure brand excellence and customer satisfaction across 
                every touchpoint in the value chain.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-business-600 mb-2">25+</div>
                  <div className="text-business-700 font-medium">Premium Brands</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-business-600 mb-2">3</div>
                  <div className="text-business-700 font-medium">Business Verticals</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-business-600 mb-2">100%</div>
                  <div className="text-business-700 font-medium">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
