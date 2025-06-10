
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, Heart, Palette } from "lucide-react";

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
          <div className="text-6xl mb-4">👜</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mia
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trendy fashion accessories that add the perfect finishing touch to your style statement
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Sparkles className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Fashion Accessories</CardTitle>
              <CardDescription>
                Complete your look with our trendy collection of fashion accessories
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Handbags & purses</li>
                <li>• Fashion jewelry</li>
                <li>• Scarves & wraps</li>
                <li>• Hair accessories</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Heart className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Style & Comfort</CardTitle>
              <CardDescription>
                Designed for the modern woman who values both style and comfort
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Contemporary designs</li>
                <li>• Quality materials</li>
                <li>• Comfortable wear</li>
                <li>• Versatile styling</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Palette className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Trendy Collections</CardTitle>
              <CardDescription>
                Stay ahead of fashion trends with our regularly updated collections
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Seasonal collections</li>
                <li>• Limited editions</li>
                <li>• Color variety</li>
                <li>• Affordable luxury</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Categories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Handbags</h3>
              <p className="text-gray-600 mb-4">
                Stylish handbags that perfectly complement your outfit. From casual totes 
                to elegant evening bags, find the perfect accessory.
              </p>
              <Button className="business-gradient">
                Explore Handbags
              </Button>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Fashion Jewelry</h3>
              <p className="text-gray-600 mb-4">
                Trendy jewelry pieces that add sparkle to your everyday look. 
                Affordable fashion jewelry for every occasion.
              </p>
              <Button className="business-gradient">
                Explore Jewelry
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

export default MiaPage;
