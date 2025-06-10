
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Star, Award, Crown } from "lucide-react";

const TanishqPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/" className="inline-flex items-center text-business-600 hover:text-business-700 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">💎</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tanishq
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            India's most trusted jewelry brand, offering exquisite designs in gold, diamond, and precious stone jewelry
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Crown className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Premium Collections</CardTitle>
              <CardDescription>
                Discover our exclusive range of traditional and contemporary jewelry designs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Gold jewelry collections</li>
                <li>• Diamond jewelry</li>
                <li>• Precious stone jewelry</li>
                <li>• Wedding collections</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Star className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Quality Assurance</CardTitle>
              <CardDescription>
                Every piece is crafted with precision and comes with quality certification
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 916 Hallmarked gold</li>
                <li>• Certified diamonds</li>
                <li>• Quality guarantee</li>
                <li>• Authentic gemstones</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Award className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Heritage & Trust</CardTitle>
              <CardDescription>
                Over decades of trust and excellence in the jewelry industry
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Trusted brand legacy</li>
                <li>• Expert craftsmanship</li>
                <li>• Customer satisfaction</li>
                <li>• Pan-India presence</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Collections</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Bridal Collection</h3>
              <p className="text-gray-600 mb-4">
                Exquisite bridal jewelry sets that make your special day even more memorable. 
                From traditional temple jewelry to contemporary designs.
              </p>
              <Link to="/brands/tanishq/bridal">
                <Button className="business-gradient">
                  Explore Bridal
                </Button>
              </Link>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Diamond Jewelry</h3>
              <p className="text-gray-600 mb-4">
                Stunning diamond jewelry collection featuring rings, necklaces, earrings, 
                and bracelets with certified diamonds.
              </p>
              <Link to="/brands/tanishq/diamonds">
                <Button className="business-gradient">
                  Explore Diamonds
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

export default TanishqPage;
