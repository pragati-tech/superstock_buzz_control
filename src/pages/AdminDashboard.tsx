
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AdminDashboard = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Message Dashboard
          </h1>
          <p className="text-xl text-gray-600">
            Send WhatsApp broadcasts and view message history
          </p>
        </div>

        <div className="text-center">
          <p className="text-gray-600">Dashboard content will be added here.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
