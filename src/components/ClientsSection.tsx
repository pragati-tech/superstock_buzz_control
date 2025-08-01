import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Star, Zap } from "lucide-react";

// Distributor
import NestleImg from '../assets/brands/Nestle.png';
import ReoImg from '../assets/brands/Reo.png';
import HavellsImg from '../assets/brands/Havells.png';
import NestleProfImg from '../assets/brands/nestle_profer.png';

// Super Stockists
import TitanImg from '../assets/brands/titan.png';
import SonataImg from '../assets/brands/sonata.png';
import FastrackImg from '../assets/brands/fastrack.png';
import PolycabImg from '../assets/brands/polycab.png';

// Exclusive Stores
import TitanWorldImg from '../assets/brands/titan_world.jpg';
import HeliosImg from '../assets/brands/Helios.png';
import FastrackStoreImg from '../assets/brands/fastrack.png';
import NescafeKiosksImg from '../assets/brands/nescafe.png';
import MiaImg from '../assets/brands/mia.png';

const ClientsSection = () => {
  const businessCategories = [
    {
      title: "Distributor",
      description: "Premium Brand Distribution",
      gradient: "from-[#112438] via-[#0e1d2f] to-[#073f67]",
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
      gradient: "from-[#112438] via-[#0e1d2f] to-[#073f67]",
      bgGradient: "from-blue-50/80 via-indigo-50/60 to-cyan-50/80",
      shadowColor: "shadow-blue-500/20",
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
      gradient: "from-[#112438] via-[#0e1d2f] to-[#073f67]",
      bgGradient: "from-blue-50/80 via-indigo-50/60 to-cyan-50/80",
      shadowColor: "shadow-blue-500/20",  
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
    <section id="section2" className="py-10 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}  

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

      {/* Single subtle glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl  "></div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-business-100/80 to-business-200/80 backdrop-blur-sm px-6 py-3 rounded-full text-business-700 text-sm font-medium mb-4 shadow-lg border border-business-200/30">
            <Sparkles className="w-5 h-4 animate-spin" style={{ animationDuration: '3s' }} />
            <span className="font-semibold">Premium Partnerships</span>
            <Star className="w-4 h-4" />
          </div>
      <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
                <span
          className="inline-block transition-transform duration-300"
          style={{ color: "rgba(14, 45, 80, 1)" }}
        >
          Trusted by
        </span> 
          <span className="block mt-2 drop-shadow-sm mb-5">
            {/* <span className="text-blue-900">Premium</span>{' '} */}
            <span className="bg-gradient-to-r from-business-600 via-business-700 to-business-800 bg-clip-text text-transparent">
             Premium Brands
            </span>
          </span>
        </h2>
        <p className="text-xl md:text-xl max-w-5xl mx-auto leading-relaxed font-500" style={{color: "rgba(19, 44, 73, 0.63)"  }}>
          We serve as authorized partners across three key business verticals, delivering excellence 
          in distribution and retail with <span className="font-semibold text-business-700"style={{color: "rgba(12, 73, 143, 1)"}}>unmatched commitment</span> to quality and service.
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
                <div className="text-center mb-5">
                  <div className={`inline-block bg-gradient-to-r ${category.gradient} text-white px-8 py-2 rounded-xl font-bold text-2xl mb-2 shadow-2xl ${category.shadowColor} transform hover:scale-105 transition-all duration-300 relative overflow-hidden`}>
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
                      <div className={`bg-gradient-to-br ${category.bgGradient} backdrop-blur-sm rounded-3xl p-0 shadow-xl group-hover/card:shadow-2xl ${category.shadowColor} transition-all duration-700 border border-white/50 relative overflow-hidden h-48`}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover/card:opacity-15 transition-all duration-700 rounded-3xl`}></div>
                        <div className="absolute inset-0 -top-10 -left-10 w-20 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 transform -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000"></div>

                        {/* Description in top-right corner */}
                        <div className="absolute top-3 right-3 z-20">
                          <p className="text-xs text-gray-500 bg-white/100 backdrop-blur-sm px-2 py-1 rounded-md font-medium">
                            {brand.description}
                          </p>
                        </div>

                        {/* Centered Image */}
                        <div className="relative z-10 h-full flex items-center justify-center p-16">
                          <div className="transform group-hover/card:scale-110 transition-all duration-500">
                            <img
                              src={brand.img}
                              alt={brand.name}
                              className="h-22 w-auto object-contain drop-shadow-lg mx-auto"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        {/* Hover effect for exploration */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/card:opacity-100 transition-all duration-500 translate-y-4 group-hover/card:translate-y-0 z-20">
                          <div className="flex items-center gap-2 text-gray-600 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
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
        <div>
          <div className="bg-gradient-to-r from-white/90 via-business-50/90 to-white/90 backdrop-blur-lg rounded-3xl p-8 border border-white/60 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-business-500/8 via-business-600/5 to-business-700/8 rounded-3xl"></div>
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
              <p className="text-business-700 text-xl max-w-5xl mx-auto leading-relaxed mb-12 font-300">
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
                  <div
                    key={stat.label}
                    className="text-center group transform hover:scale-105 transition-all duration-300"
                  >
                    <div
                      className="text-4xl font-bold mb-3 transition-colors duration-300"
                      style={{ color: "rgba(14, 45, 80, 1)" }}
                    >
                      {stat.number}
                    </div>
                    <div className="text-business-700 font-semibold text-lg tracking-wide"
                    style={{ color: "rgba(14, 45, 80, 1)" }}
                    >
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
