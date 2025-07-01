
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Lightbulb, Zap, Settings } from "lucide-react";

const HavellsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/" className="inline-flex items-center text-business-600 hover:text-business-700 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">💡</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Havells
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading electrical solutions for homes and industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Lightbulb className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Lighting Solutions</CardTitle>
              <CardDescription>
                Energy-efficient lighting for every space
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• LED bulbs & tubes</li>
                <li>• Designer fixtures</li>
                <li>• Smart lighting</li>
                <li>• Industrial lighting</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Zap className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Electrical Appliances</CardTitle>
              <CardDescription>
                Modern electrical appliances for daily use
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Fans & air coolers</li>
                <li>• Water heaters</li>
                <li>• Kitchen appliances</li>
                <li>• Home automation</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Settings className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Electrical Infrastructure</CardTitle>
              <CardDescription>
                Complete electrical infrastructure solutions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Wires & cables</li>
                <li>• Switches & sockets</li>
                <li>• MCBs & distribution</li>
                <li>• Solar solutions</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Link to="/product-catalog">
            <Button size="lg" className="business-gradient hover:opacity-90 transition-all duration-300">
              Access Product Catalog
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HavellsPage;
