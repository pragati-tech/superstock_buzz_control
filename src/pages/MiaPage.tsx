
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, Heart, Star } from "lucide-react";

const MiaPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/" className="inline-flex items-center text-business-600 hover:text-business-700 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mia
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trendy fashion accessories and lifestyle products for the modern woman
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Sparkles className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Fashion Accessories</CardTitle>
              <CardDescription>
                Stylish handbags, wallets, and accessories for every occasion
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Designer handbags</li>
                <li>• Elegant wallets</li>
                <li>• Fashion jewelry</li>
                <li>• Lifestyle accessories</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Heart className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Premium Quality</CardTitle>
              <CardDescription>
                High-quality materials and craftsmanship in every product
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Premium leather</li>
                <li>• Durable materials</li>
                <li>• Expert craftsmanship</li>
                <li>• Stylish designs</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Star className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Trendy Collections</CardTitle>
              <CardDescription>
                Latest fashion trends and seasonal collections
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Seasonal collections</li>
                <li>• Limited editions</li>
                <li>• Fashion-forward designs</li>
                <li>• Color variety</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MiaPage;
