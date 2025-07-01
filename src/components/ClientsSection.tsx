
import { Link } from "react-router-dom";

const ClientsSection = () => {
  const businessCategories = [
    {
      title: "Distributor",
      description: "Premium Brand Distribution",
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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Premium Brands
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We serve as authorized partners across three key business verticals, delivering excellence in distribution and retail
          </p>
        </div>
        
        <div className="space-y-16">
          {businessCategories.map((category, categoryIndex) => (
            <div key={category.title} className="text-center">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-business-700 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {category.description}
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.brands.map((brand, brandIndex) => (
                  <Link 
                    key={brand.name}
                    to={brand.path}
                    className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (brandIndex * 0.1)}s` }}
                  >
                    <div className="bg-gradient-to-br from-business-50 to-business-100 rounded-2xl p-6 mb-3 group-hover:shadow-lg transition-all duration-300 group-hover:from-business-100 group-hover:to-business-200">
                      <div className="text-3xl mb-3">{brand.logo}</div>
                      <h4 className="font-semibold text-gray-900 text-base mb-1">{brand.name}</h4>
                      <p className="text-sm text-gray-500">{brand.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-business-50 to-business-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-business-800 mb-4">
              Partnership Excellence
            </h3>
            <p className="text-business-700 text-lg max-w-4xl mx-auto">
              From premium distribution partnerships to exclusive retail experiences, we deliver comprehensive solutions across diverse market segments, ensuring brand excellence and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
