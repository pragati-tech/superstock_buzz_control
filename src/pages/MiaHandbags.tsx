
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingBag, Heart, Star } from "lucide-react";

const MiaHandbags = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/brands/mia" className="inline-flex items-center text-business-600 hover:text-business-700 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Mia
        </Link>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👜</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mia Handbags Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stylish handbags that perfectly complement your outfit for every occasion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <ShoppingBag className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Casual Totes</CardTitle>
              <CardDescription>Perfect for everyday use with spacious compartments</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full business-gradient">View Collection</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Heart className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Evening Bags</CardTitle>
              <CardDescription>Elegant bags perfect for special occasions and events</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full business-gradient">View Collection</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Star className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Office Collection</CardTitle>
              <CardDescription>Professional bags that combine style with functionality</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full business-gradient">View Collection</Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MiaHandbags;
