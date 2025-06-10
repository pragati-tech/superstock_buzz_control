
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, Heart, Flower } from "lucide-react";

const SkinnPage = () => {
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
            Skinn
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium fragrances and personal care products that define your unique signature scent
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Sparkles className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Premium Fragrances</CardTitle>
              <CardDescription>
                Exquisite collection of perfumes and fragrances for every personality
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Eau de parfum</li>
                <li>• Eau de toilette</li>
                <li>• Body sprays</li>
                <li>• Gift sets</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Heart className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Personal Care</CardTitle>
              <CardDescription>
                Complete range of personal care products for your daily routine
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Body lotions</li>
                <li>• Shower gels</li>
                <li>• Deodorants</li>
                <li>• Body care sets</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Flower className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Signature Scents</CardTitle>
              <CardDescription>
                Unique fragrance profiles that create lasting impressions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Floral fragrances</li>
                <li>• Woody scents</li>
                <li>• Fresh & citrus</li>
                <li>• Oriental blends</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular Collections</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Men's Collection</h3>
              <p className="text-gray-600 mb-4">
                Bold and masculine fragrances that embody confidence and sophistication. 
                Perfect for the modern gentleman.
              </p>
              <Button className="business-gradient">
                Explore Men's
              </Button>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Women's Collection</h3>
              <p className="text-gray-600 mb-4">
                Elegant and feminine fragrances that celebrate the essence of womanhood. 
                From subtle to bold, find your perfect scent.
              </p>
              <Button className="business-gradient">
                Explore Women's
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

export default SkinnPage;
