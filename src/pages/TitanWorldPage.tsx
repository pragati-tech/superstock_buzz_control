
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Star, Crown, Award } from "lucide-react";

const TitanWorldPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/" className="inline-flex items-center text-business-600 hover:text-business-700 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌟</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Titan World
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium watch retail experience with exclusive collections and personalized service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Star className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Premium Collections</CardTitle>
              <CardDescription>
                Exclusive watch collections from Titan's finest ranges
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Titan Edge</li>
                <li>• Titan Raga</li>
                <li>• Limited editions</li>
                <li>• Exclusive designs</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Crown className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Premium Service</CardTitle>
              <CardDescription>
                Personalized shopping experience with expert guidance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Personal consultations</li>
                <li>• Custom fittings</li>
                <li>• Watch servicing</li>
                <li>• After-sales support</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Award className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Exclusive Store</CardTitle>
              <CardDescription>
                Elegant retail environment showcasing the best of Titan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Premium ambiance</li>
                <li>• Complete collections</li>
                <li>• Expert staff</li>
                <li>• VIP experience</li>
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

export default TitanWorldPage;
