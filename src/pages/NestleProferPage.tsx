
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, ChefHat, Building, Award } from "lucide-react";

const NestleProferPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/" className="inline-flex items-center text-business-600 hover:text-business-700 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🍫</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nestle Profer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional food service solutions for businesses and institutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <ChefHat className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Professional Food</CardTitle>
              <CardDescription>
                High-quality food products for commercial kitchens
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Bulk ingredients</li>
                <li>• Ready-to-cook meals</li>
                <li>• Bakery products</li>
                <li>• Dairy solutions</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Building className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Institutional Supply</CardTitle>
              <CardDescription>
                Large-scale supply for hotels, restaurants, and institutions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Hotel & restaurant supply</li>
                <li>• Catering services</li>
                <li>• Institutional kitchens</li>
                <li>• Bulk packaging</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Award className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Quality Standards</CardTitle>
              <CardDescription>
                Professional-grade quality with consistent standards
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Food safety certified</li>
                <li>• Consistent quality</li>
                <li>• Extended shelf life</li>
                <li>• Professional packaging</li>
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

export default NestleProferPage;
