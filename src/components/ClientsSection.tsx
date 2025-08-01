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
    <section id="section2" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Dark Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-business-900/20 via-transparent to-business-800/20"></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-business-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-business-600/10 rounded-full blur-3xl animate-[pulse_3s_ease-in-out_infinite]"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-business-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

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
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-business-500/20 to-business-600/20 backdrop-blur-sm px-6 py-3 rounded-full text-business-300 text-sm font-medium mb-4 shadow-lg border border-business-500/30">
            <Sparkles className="w-5 h-5 animate-spin text-business-400" style={{ animationDuration: '3s' }} />
            <span className="font-semibold">Premium Partnerships</span>
            <Star className="w-4 h-4 text-business-400" />
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-8">
            <span className="bg-gradient-to-r from-white via-business-300 to-white bg-clip-text text-transparent">Trusted by</span>
            <br />
            <span className="bg-gradient-to-r from-business-400 via-business-500 to-business-600 bg-clip-text text-transparent">
              Premium Brands
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
            We serve as authorized partners across three key business verticals, delivering excellence 
            in distribution and retail with <span className="font-semibold text-business-400">unmatched commitment</span> to quality and service.
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
                  <div className={`inline-block bg-gradient-to-r ${category.gradient} text-white px-8 py-4 rounded-2xl font-bold text-2xl mb-2 shadow-2xl ${category.shadowColor} transform hover:scale-105 transition-all duration-300 relative overflow-hidden border border-white/20`}>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center gap-3">
                      <Zap className="w-6 h-6" />
                      {category.title}
                    </span>
                  </div>
                </div>

                {/* Brand Cards */}
                <div className="grid lg:grid-cols-4 gap-8 mb-20">
                  {category.brands.map((brand) => (
                    <Link 
                      key={brand.name}
                      to={brand.path}
                      className="group/card cursor-pointer"
                    > 
                      <div className="bg-gradient-to-br from-gray-800/80 via-gray-900/60 to-black/80 backdrop-blur-sm rounded-3xl p-0 shadow-xl group-hover/card:shadow-2xl group-hover/card:shadow-business-500/25 transition-all duration-700 border border-business-500/30 relative overflow-hidden h-48">
                        <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover/card:opacity-20 transition-all duration-700 rounded-3xl`}></div>
                        <div className="absolute inset-0 -top-10 -left-10 w-20 h-full bg-gradient-to-r from-transparent via-business-400/30 to-transparent rotate-12 transform -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000"></div>

                        {/* Description in top-right corner */}
                        <div className="absolute top-3 right-3 z-20">
                          <p className="text-xs text-gray-400 bg-gray-800/70 backdrop-blur-sm px-2 py-1 rounded-md font-light border border-business-500/20">
                            {brand.description}
                          </p>
                        </div>

                        {/* Centered Image */}
                        <div className="relative z-10 h-full flex items-center justify-center p-8">
                          <div className="transform group-hover/card:scale-110 transition-all duration-500">
                            <img
                              src={brand.img}
                              alt={brand.name}
                              className="h-16 w-auto object-contain drop-shadow-lg mx-auto"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        {/* Hover effect for exploration */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/card:opacity-100 transition-all duration-500 translate-y-4 group-hover/card:translate-y-0 z-20">
                          <div className="flex items-center gap-2 text-business-300 bg-gray-800/80 backdrop-blur-sm px-3 py-1 rounded-full border border-business-500/30">
                            <span className="text-xs font-medium">Explore</span>
                            <ArrowRight className="w-3 h-3 transform group-hover/card:translate-x-1 transition-transform duration-300" />
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
        <div className="mt-20">
          <div className="bg-gradient-to-r from-gray-800/90 via-gray-900/90 to-black/90 backdrop-blur-lg rounded-3xl p-16 border border-business-500/30 shadow-2xl shadow-business-500/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-business-500/10 via-business-600/5 to-business-700/10 rounded-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-business-400/10 to-transparent animate-pulse rounded-3xl"></div>

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-3 bg-business-500/20 backdrop-blur-sm px-6 py-3 rounded-full text-business-300 text-sm font-semibold mb-8 shadow-lg border border-business-500/30">
                <Sparkles className="w-5 h-5 animate-spin text-business-400" style={{ animationDuration: '4s' }} />
                <span>Partnership Excellence</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-white via-business-300 to-white bg-clip-text text-transparent">Comprehensive Solutions Across</span>
                <br />
                <span className="bg-gradient-to-r from-business-400 via-business-500 to-business-600 bg-clip-text text-transparent mt-2 block">Diverse Market Segments</span>
              </h3>
              <p className="text-gray-300 text-xl max-w-5xl mx-auto leading-relaxed mb-12 font-light">
                From premium distribution partnerships to exclusive retail experiences, we deliver 
                comprehensive solutions that ensure brand excellence and customer satisfaction across 
                every touchpoint in the value chain.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
                {[
                  { number: "15+", label: "Premium Brands" },
                  { number: "3", label: "Business Verticals" },
                  { number: "100%", label: "Customer Satisfaction" }
                ].map((stat) => (
                  <div key={stat.label} className="text-center group transform hover:scale-105 transition-all duration-300">  
                    <div className="text-4xl font-bold text-business-400 mb-3 group-hover:text-business-300 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-semibold text-lg tracking-wide">
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
