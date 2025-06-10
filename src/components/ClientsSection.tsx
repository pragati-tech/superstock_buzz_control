
const ClientsSection = () => {
  const clients = [
    { name: "Tanishq", logo: "💎", description: "Premium Jewelry" },
    { name: "Titan", logo: "⌚", description: "Luxury Watches" },
    { name: "Mia", logo: "👜", description: "Fashion Accessories" },
    { name: "Fastrack", logo: "🕶️", description: "Youth Lifestyle" },
    { name: "Sonata", logo: "⏰", description: "Timepieces" },
    { name: "Skinn", logo: "🌟", description: "Fragrances" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Premium Brands
          </h2>
          <p className="text-lg text-gray-600">
            We proudly serve as the authorized superstockist for leading brands
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div 
              key={client.name} 
              className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-br from-business-50 to-business-100 rounded-2xl p-8 mb-4 group-hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-3">{client.logo}</div>
                <h3 className="font-semibold text-gray-900 text-lg">{client.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{client.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
