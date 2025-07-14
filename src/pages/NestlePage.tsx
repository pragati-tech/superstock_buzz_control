
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Coffee, Heart, Award } from "lucide-react";

const NestlePage = () => {
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
            Nestle
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            World's leading food and beverage company bringing quality nutrition to families worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Coffee className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Beverages</CardTitle>
              <CardDescription>
                Premium coffee, tea, and beverage solutions for every taste
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Nescafe coffee range</li>
                <li>• Nestea beverages</li>
                <li>• Hot chocolate mixes</li>
                <li>• Specialty drinks</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Heart className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Nutrition & Health</CardTitle>
              <CardDescription>
                Nutritious food products supporting healthy lifestyles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Baby nutrition</li>
                <li>• Health supplements</li>
                <li>• Dairy products</li>
                <li>• Wellness foods</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NestlePage;
