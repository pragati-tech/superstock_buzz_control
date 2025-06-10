
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Watch, Zap, Gamepad2 } from "lucide-react";

const FastrackWatches = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/brands/fastrack" className="inline-flex items-center text-business-600 hover:text-business-700 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Fastrack
        </Link>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⌚</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Fastrack Watches Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bold and stylish watches that make a statement for the energetic youth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Watch className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Digital Sports</CardTitle>
              <CardDescription>Feature-packed digital watches for active lifestyles</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full business-gradient">View Collection</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Zap className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Analog Trendy</CardTitle>
              <CardDescription>Stylish analog watches with contemporary designs</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full business-gradient">View Collection</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Gamepad2 className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Gaming Edition</CardTitle>
              <CardDescription>Special edition watches designed for gaming enthusiasts</CardDescription>
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

export default FastrackWatches;
