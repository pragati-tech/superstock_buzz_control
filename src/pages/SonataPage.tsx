
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Star, Users } from "lucide-react";

const SonataPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/" className="inline-flex items-center text-business-600 hover:text-business-700 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⏰</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sonata
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reliable and affordable timepieces that combine functionality with style for everyday wear
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Clock className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Quality Timepieces</CardTitle>
              <CardDescription>
                Reliable watches that stand the test of time with precision and durability
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Analog watches</li>
                <li>• Digital watches</li>
                <li>• Dress watches</li>
                <li>• Casual timepieces</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Star className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Value for Money</CardTitle>
              <CardDescription>
                Premium quality at affordable prices, making luxury accessible to everyone
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Affordable pricing</li>
                <li>• Quality materials</li>
                <li>• Reliable movement</li>
                <li>• Great warranty</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Users className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>For Everyone</CardTitle>
              <CardDescription>
                Diverse collection catering to different age groups and preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Men's collection</li>
                <li>• Women's collection</li>
                <li>• Kids' watches</li>
                <li>• Couple watches</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Collections</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Classic Collection</h3>
              <p className="text-gray-600 mb-4">
                Timeless designs that never go out of style. Perfect for formal occasions 
                and everyday wear with elegant aesthetics.
              </p>
              <Button className="business-gradient">
                Explore Classic
              </Button>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Sports Collection</h3>
              <p className="text-gray-600 mb-4">
                Durable and functional watches designed for active lifestyles. 
                Water-resistant and shock-proof features included.
              </p>
              <Button className="business-gradient">
                Explore Sports
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link to="/login">
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

export default SonataPage;
