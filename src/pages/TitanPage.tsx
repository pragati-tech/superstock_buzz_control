
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Zap, Shield } from "lucide-react";

const TitanPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/" className="inline-flex items-center text-business-600 hover:text-business-700 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⌚</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Titan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            India's leading watch brand, combining precision engineering with elegant design for over three decades
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Clock className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Premium Timepieces</CardTitle>
              <CardDescription>
                Discover our extensive range of watches for every occasion and style
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Luxury watch collections</li>
                <li>• Smart watches</li>
                <li>• Sports watches</li>
                <li>• Classic designs</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Zap className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Innovation & Technology</CardTitle>
              <CardDescription>
                Cutting-edge technology meets traditional craftsmanship
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Swiss movement</li>
                <li>• Smart features</li>
                <li>• Water resistance</li>
                <li>• Precision engineering</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Shield className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Quality & Warranty</CardTitle>
              <CardDescription>
                Comprehensive warranty and after-sales service support
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 2-year warranty</li>
                <li>• Authorized service centers</li>
                <li>• Quality testing</li>
                <li>• Customer support</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular Collections</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Titan Edge</h3>
              <p className="text-gray-600 mb-4">
                Ultra-slim watches that redefine elegance. The world's slimmest watch collection 
                that combines style with sophistication.
              </p>
              <Link to="/brands/titan/edge">
                <Button className="business-gradient">
                  Explore Edge
                </Button>
              </Link>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Titan Raga</h3>
              <p className="text-gray-600 mb-4">
                Exclusively designed for women, featuring elegant designs that complement 
                every woman's unique style and personality.
              </p>
              <Link to="/brands/titan/raga">
                <Button className="business-gradient">
                  Explore Raga
                </Button>
              </Link>
            </div>
          </div>
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

export default TitanPage;
