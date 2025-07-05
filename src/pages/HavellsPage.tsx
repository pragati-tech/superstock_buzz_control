
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Zap, Home, Shield } from "lucide-react";

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
          <div className="text-6xl mb-4">⚡</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Havells
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading electrical equipment company providing innovative solutions for modern homes and businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Zap className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Electrical Solutions</CardTitle>
              <CardDescription>
                Comprehensive range of electrical products and solutions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Switches & sockets</li>
                <li>• Wires & cables</li>
                <li>• Circuit protection</li>
                <li>• Industrial equipment</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Home className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Home Appliances</CardTitle>
              <CardDescription>
                Modern appliances designed for comfortable living
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Fans & air coolers</li>
                <li>• Water heaters</li>
                <li>• Kitchen appliances</li>
                <li>• Lighting solutions</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Shield className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Quality & Safety</CardTitle>
              <CardDescription>
                Commitment to safety standards and reliable performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• ISI certified products</li>
                <li>• Safety standards</li>
                <li>• Warranty support</li>
                <li>• Service network</li>
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
