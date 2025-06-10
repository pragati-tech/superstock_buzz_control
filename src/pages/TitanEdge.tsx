
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Zap, Clock, Star } from "lucide-react";

const TitanEdge = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/brands/titan" className="inline-flex items-center text-business-600 hover:text-business-700 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Titan
        </Link>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⌚</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Titan Edge Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The world's slimmest watch collection that combines style with sophistication
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Zap className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Ultra-Slim Design</CardTitle>
              <CardDescription>World's slimmest watches with precision engineering</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full business-gradient">View Models</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Clock className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Swiss Movement</CardTitle>
              <CardDescription>Precision Swiss movement for accurate timekeeping</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full business-gradient">View Models</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Star className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Premium Materials</CardTitle>
              <CardDescription>Crafted with finest materials for lasting elegance</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full business-gradient">View Models</Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TitanEdge;
