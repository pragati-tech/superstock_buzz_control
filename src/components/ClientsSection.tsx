import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Star, Zap } from "lucide-react";

// Distributor
import NestleImg from '../assets/brands/Nestle.png';
import ReoImg from '../assets/brands/Reo.png';
import HavellsImg from '../assets/brands/Havells.png';
import NestleProfImg from '../assets/brands/Nestle_Prof.png';

// Super Stockists
import TitanImg from '../assets/brands/Titan.png';
import SonataImg from '../assets/brands/Sonata.png';
import FastrackImg from '../assets/brands/Fastrack.png';
import PolycabImg from '../assets/brands/Polycab.png';

// Exclusive Stores
import TitanWorldImg from '../assets/brands/Titan_World.png';
import HeliosImg from '../assets/brands/Helios.png';
import FastrackStoreImg from '../assets/brands/Fastrack_store.png';
import NescafeKiosksImg from '../assets/brands/Nescafe.png';
import MiaImg from '../assets/brands/Mia_by_tanishq.png';

const ClientsSection = () => {
  const businessCategories = [
    {
      title: "Distributor",
      description: "Premium Brand Distribution",
      gradient: "from-blue-500 via-blue-600 to-indigo-600",
      bgGradient: "from-blue-50/80 via-indigo-50/60 to-cyan-50/80",
      shadowColor: "shadow-blue-500/20",
      brands: [
        { name: "NESTLE", img: NestleImg, description: "Since 1985", path: "/brands/nestle" },
        { name: "REO", img: ReoImg, description: "Since 2014", path: "/brands/reo" },
        { name: "Havells", img: HavellsImg, description: "Since 2014", path: "/brands/havells" },
        { name: "Nestle Professional", img: NestleProfImg, description: "Since 2018", path: "/brands/nestle-profer" },
      ]
    },
    {
      title: "Super Stockists",
      description: "Premium Lifestyle Brands",
      gradient: "from-purple-500 via-purple-600 to-pink-600",
      bgGradient: "from-purple-50/80 via-pink-50/60 to-rose-50/80",
      shadowColor: "shadow-purple-500/20",
      brands: [
        { name: "Titan", img: TitanImg, description: "Since 1995", path: "/brands/titan" },
        { name: "Sonata", img: SonataImg, description: "Since 1998", path: "/brands/sonata" },
        { name: "Fastrack", img: FastrackImg, description: "Since 1999", path: "/brands/fastrack" },
        { name: "Polycab", img: PolycabImg, description: "Since 2025", path: "/brands/polycab" },
      ]
    },
    {
      title: "Exclusive Stores",
      description: "Premium Retail Experience",
      gradient: "from-emerald-500 via-teal-600 to-green-600",
      bgGradient: "from-emerald-50/80 via-teal-50/60 to-green-50/80",
      shadowColor: "shadow-emerald-500/20",
      brands: [
        { name: "Titan World", img: TitanWorldImg, description: "Since 2008-2018", path: "/brands/titan-world" },
        { name: "Helios", img: HeliosImg, description: "Since 2018", path: "/brands/helios" },
        { name: "Fastrack Store", img: FastrackStoreImg, description: "Since 2018", path: "/brands/fastrack-store" },
        { name: "Nescafe Kiosks", img: NescafeKiosksImg, description: "Since 2023", path: "/brands/nescafe-kiosks" },
        { name: "Mia by Tanishq", img: MiaImg, description: "Since 2024", path: "/brands/mia" },
      ]
    }
  ];

  return (
    <section id="section2" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Single subtle glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-business-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-business-500/10 backdrop-blur-sm px-4 py-2 rounded-full text-business-400 text-sm font-medium mb-6 border border-business-500/20">
            <Sparkles className="w-4 h-4" />
            <span>Premium Partnerships</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Trusted by 
            <span className="bg-gradient-to-r from-business-400 to-business-500 bg-clip-text text-transparent"> Premium Brands</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Authorized partners across three key business verticals, delivering excellence 
            in distribution and retail with <span className="text-business-400 font-medium">unmatched commitment</span>.
          </p>
        </div>

        {/* Business Categories with Unique IDs */}
        <div>
          {businessCategories.map((category, categoryIndex) => {
            const sectionId =
              category.title === "Distributor"
                ? "distributor-section"
                : category.title === "Super Stockists"
                ? "super-stockist-section"
                : "exclusive-stores-section";

            return (
              <div key={category.title} id={sectionId} className="relative group">
                <div className="text-center mb-8">
                  <div className={`inline-block bg-gradient-to-r ${category.gradient} text-white px-6 py-3 rounded-xl font-semibold text-xl shadow-lg hover:scale-105 transition-all duration-300`}>
                    <span className="flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      {category.title}
                    </span>
                  </div>
                </div>

                {/* Brand Cards */}
                <div className="grid lg:grid-cols-4 gap-6 mb-16">
                  {category.brands.map((brand) => (
                    <Link 
                      key={brand.name}
                      to={brand.path}
                      className="group/card cursor-pointer"
                    > 
                      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700/50 hover:border-business-500/30 relative overflow-hidden h-40 flex flex-col">
                        {/* Description in top-right corner */}
                        <div className="absolute top-3 right-3 z-20">
                          <p className="text-xs text-gray-500 bg-gray-700/50 px-2 py-1 rounded-md">
                            {brand.description}
                          </p>
                        </div>

                        {/* Centered Image */}
                        <div className="flex-1 flex items-center justify-center">
                          <div className="transform group-hover/card:scale-110 transition-all duration-300">
                            <img
                              src={brand.img}
                              alt={brand.name}
                              className="h-12 w-auto object-contain opacity-90 group-hover/card:opacity-100"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        {/* Hover effect for exploration */}
                        <div className="opacity-0 group-hover/card:opacity-100 transition-all duration-300 text-center">
                          <div className="flex items-center justify-center gap-1 text-business-400 text-sm">
                            <span>Explore</span>
                            <ArrowRight className="w-3 h-3" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Section */}
        <div className="mt-16">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/50 relative">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-business-500/10 px-4 py-2 rounded-full text-business-400 text-sm font-medium mb-6 border border-business-500/20">
                <Sparkles className="w-4 h-4" />
                <span>Partnership Excellence</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Comprehensive Solutions Across
                <span className="block bg-gradient-to-r from-business-400 to-business-500 bg-clip-text text-transparent">Diverse Market Segments</span>
              </h3>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed mb-10">
                From premium distribution partnerships to exclusive retail experiences, we deliver 
                comprehensive solutions that ensure brand excellence and customer satisfaction.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { number: "25+", label: "Premium Brands" },
                  { number: "3", label: "Business Verticals" },
                  { number: "100%", label: "Customer Satisfaction" }
                ].map((stat) => (
                  <div key={stat.label} className="text-center">  
                    <div className="text-3xl font-bold text-business-400 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 font-medium">
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
