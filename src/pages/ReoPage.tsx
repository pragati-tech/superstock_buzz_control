
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, Wrench, Shield } from "lucide-react";

const ReoPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/" className="inline-flex items-center text-business-600 hover:text-business-700 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🏠</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            REO
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete home solutions for modern living needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Home className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Home Appliances</CardTitle>
              <CardDescription>
                Modern appliances for comfortable living
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Kitchen appliances</li>
                <li>• Home automation</li>
                <li>• Cleaning solutions</li>
                <li>• Storage systems</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Wrench className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Installation Services</CardTitle>
              <CardDescription>
                Professional installation and maintenance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Expert installation</li>
                <li>• Regular maintenance</li>
                <li>• Technical support</li>
                <li>• Warranty service</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Shield className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Quality Products</CardTitle>
              <CardDescription>
                Reliable products with comprehensive warranty
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Durable materials</li>
                <li>• Energy efficient</li>
                <li>• Modern design</li>
                <li>• Competitive pricing</li>
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

export default ReoPage;
