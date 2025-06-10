
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Sparkles, Crown } from "lucide-react";

const TitanRaga = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/brands/titan" className="inline-flex items-center text-business-600 hover:text-business-700 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Titan
        </Link>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👑</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Titan Raga Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exclusively designed for women, featuring elegant designs that complement every woman's unique style
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Heart className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Feminine Elegance</CardTitle>
              <CardDescription>Designs that celebrate the essence of womanhood</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full business-gradient">View Collection</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Sparkles className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Precious Stones</CardTitle>
              <CardDescription>Adorned with beautiful precious and semi-precious stones</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full business-gradient">View Collection</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Crown className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Limited Editions</CardTitle>
              <CardDescription>Exclusive limited edition pieces for the discerning woman</CardDescription>
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

export default TitanRaga;
