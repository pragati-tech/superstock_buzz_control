
import { MessageSquare, Users, Send } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multi-Brand Management",
      description: "Comprehensive inventory management for all your premium brand partnerships including Tanishq, Titan, and Mia."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Real-time Communication",
      description: "Instant updates and notifications to keep all stakeholders informed about inventory status and promotions."
    },
    {
      icon: <Send className="w-8 h-8" />,
      title: "SMS Broadcasting",
      description: "Targeted SMS campaigns to inform clients about new deals, discounts, and important business updates."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-business-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions designed to streamline your business operations and enhance client relationships
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-business-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
