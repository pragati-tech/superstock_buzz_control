
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Gem, Sparkles, Award } from "lucide-react";

const TanishqDiamonds = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/brands/tanishq" className="inline-flex items-center text-business-600 hover:text-business-700 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Tanishq
        </Link>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">💎</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tanishq Diamond Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stunning diamond jewelry collection featuring certified diamonds in elegant designs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Gem className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Diamond Rings</CardTitle>
              <CardDescription>Elegant diamond rings for engagements and special occasions</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full business-gradient">View Collection</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Sparkles className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Diamond Necklaces</CardTitle>
              <CardDescription>Stunning diamond necklaces that add sparkle to any outfit</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full business-gradient">View Collection</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Award className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Certified Diamonds</CardTitle>
              <CardDescription>All diamonds come with certification for authenticity and quality</CardDescription>
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

export default TanishqDiamonds;
