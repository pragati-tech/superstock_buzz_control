
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Coffee, MapPin, Clock } from "lucide-react";

const NescafeKiosksPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/" className="inline-flex items-center text-business-600 hover:text-business-700 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">☕</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nescafe Kiosks
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium coffee experience kiosks bringing fresh coffee moments to your day
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Coffee className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Fresh Coffee</CardTitle>
              <CardDescription>
                Freshly brewed coffee made with premium Nescafe products
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Fresh brewed coffee</li>
                <li>• Hot & cold beverages</li>
                <li>• Specialty drinks</li>
                <li>• Quick service</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <MapPin className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Strategic Locations</CardTitle>
              <CardDescription>
                Conveniently located kiosks in high-traffic areas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Shopping centers</li>
                <li>• Office complexes</li>
                <li>• Transit points</li>
                <li>• College campuses</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Clock className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Quick Service</CardTitle>
              <CardDescription>
                Fast and efficient service for busy lifestyles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Quick preparation</li>
                <li>• On-the-go options</li>
                <li>• Consistent quality</li>
                <li>• Affordable pricing</li>
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

export default NescafeKiosksPage;
