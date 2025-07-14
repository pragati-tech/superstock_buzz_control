
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Rocket, Gamepad2, Store } from "lucide-react";

const FastrackStorePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/" className="inline-flex items-center text-business-600 hover:text-business-700 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Fastrack Store
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exclusive youth lifestyle store featuring the coolest accessories and gadgets
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Rocket className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Youth Store</CardTitle>
              <CardDescription>
                Dedicated retail space for young and trendy customers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Youth-focused design</li>
                <li>• Interactive displays</li>
                <li>• Try-before-buy</li>
                <li>• Latest collections</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Gamepad2 className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Complete Range</CardTitle>
              <CardDescription>
                Full collection of Fastrack products under one roof
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Watches & smartwatches</li>
                <li>• Sunglasses & eyewear</li>
                <li>• Bags & backpacks</li>
                <li>• Tech accessories</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Store className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Store Experience</CardTitle>
              <CardDescription>
                Vibrant shopping experience tailored for youth
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Modern store design</li>
                <li>• Friendly staff</li>
                <li>• Gift options</li>
                <li>• Easy exchanges</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FastrackStorePage;
