
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Target, Sparkles, Palette } from "lucide-react";

const PolycabPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/" className="inline-flex items-center text-business-600 hover:text-business-700 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🎯</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Polycab
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trendy fashion accessories that define your unique style
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Target className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Fashion Accessories</CardTitle>
              <CardDescription>
                Complete range of fashion accessories for every style
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Fashion jewelry</li>
                <li>• Hair accessories</li>
                <li>• Bags & purses</li>
                <li>• Style essentials</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Sparkles className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Trendy Designs</CardTitle>
              <CardDescription>
                Latest fashion trends with contemporary styling
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Contemporary designs</li>
                <li>• Seasonal collections</li>
                <li>• Trend-focused items</li>
                <li>• Style statements</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Palette className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Style Variety</CardTitle>
              <CardDescription>
                Diverse styles to match every personality and occasion
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Casual wear accessories</li>
                <li>• Formal accessories</li>
                <li>• Party wear items</li>
                <li>• Everyday essentials</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PolycabPage;
