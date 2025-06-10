
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Zap, Gamepad2, Headphones } from "lucide-react";

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
          <div className="text-6xl mb-4">🕶️</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Fastrack
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            India's coolest youth lifestyle brand offering trendy watches, sunglasses, and accessories
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Zap className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Youth Lifestyle</CardTitle>
              <CardDescription>
                Bold and trendy accessories designed for the energetic youth
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Trendy watches</li>
                <li>• Stylish sunglasses</li>
                <li>• Cool backpacks</li>
                <li>• Tech accessories</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Gamepad2 className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Cool & Trendy</CardTitle>
              <CardDescription>
                Stay ahead of trends with our constantly evolving product range
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Latest designs</li>
                <li>• Vibrant colors</li>
                <li>• Youth-centric styling</li>
                <li>• Affordable pricing</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Headphones className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Tech Accessories</CardTitle>
              <CardDescription>
                Modern tech accessories that complement your digital lifestyle
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Bluetooth headphones</li>
                <li>• Power banks</li>
                <li>• Phone accessories</li>
                <li>• Gaming gear</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular Categories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Watches</h3>
              <p className="text-gray-600 mb-4">
                Bold and stylish watches that make a statement. From digital sports watches 
                to trendy analog designs for every young personality.
              </p>
              <Link to="/brands/fastrack/watches">
                <Button className="business-gradient">
                  Explore Watches
                </Button>
              </Link>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Sunglasses</h3>
              <p className="text-gray-600 mb-4">
                Cool sunglasses that protect your eyes while keeping you stylish. 
                Various shapes and colors to match your vibe.
              </p>
              <Button className="business-gradient">
                Explore Sunglasses
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
