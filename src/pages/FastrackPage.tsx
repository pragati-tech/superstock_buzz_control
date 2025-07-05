
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Zap, Users, Sparkles } from "lucide-react";

const FastrackPage = () => {
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
            Fastrack
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cool and trendy lifestyle accessories designed for the energetic youth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Zap className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Youth-Centric Design</CardTitle>
              <CardDescription>
                Bold and vibrant designs that resonate with young energy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Colorful watch designs</li>
                <li>• Trendy accessories</li>
                <li>• Bold patterns</li>
                <li>• Sports-inspired styles</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Users className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Lifestyle Products</CardTitle>
              <CardDescription>
                Complete range of accessories for an active lifestyle
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Watches & smartwatches</li>
                <li>• Sunglasses</li>
                <li>• Bags & backpacks</li>
                <li>• Belts & wallets</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Sparkles className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Affordable Style</CardTitle>
              <CardDescription>
                Trendy fashion accessories at pocket-friendly prices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Value for money</li>
                <li>• Quality materials</li>
                <li>• Durability tested</li>
                <li>• Style guarantee</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular Collections</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Fastrack Watches</h3>
              <p className="text-gray-600 mb-4">
                Explore our dynamic collection of watches designed for the young and energetic. 
                From digital sports watches to trendy analog designs.
              </p>
              <Link to="/brands/fastrack/watches">
                <Button className="business-gradient">
                  Explore Watches
                </Button>
              </Link>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Accessories Range</h3>
              <p className="text-gray-600 mb-4">
                Complete your style with our range of sunglasses, bags, belts, 
                and other trendy accessories perfect for the modern youth.
              </p>
              <Button className="business-gradient">
                Explore Accessories
              </Button>
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

export default FastrackPage;
