
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Zap, Users, Sparkles } from "lucide-react";
import Fastrackimg from "../assets/brands/Fastrack.png"

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
          <img
            src= {Fastrackimg}
            alt =""
            className="h-20 mx-auto bject-contain drop-shadow-lg mb-2"
            loading="lazy"
          />
          <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-2">
            Fastrack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Fastrack Store was opened in 2018. And we are currently operating 2 stores of Fastrack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Zap className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Youth-Centric Design</CardTitle>
              <CardDescription>
                Bold and vibrant designs that resonate with young energy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Colorful watch designs</li>
                <li>• Trendy accessories</li>
                <li>• Bold patterns</li>
                <li>• Sports-inspired styles</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Users className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Lifestyle Products</CardTitle>
              <CardDescription>
                Complete range of accessories for an active lifestyle
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Watches & smartwatches</li>
                <li>• Sunglasses</li>
                <li>• Bags & backpacks</li>
                <li>• Belts & wallets</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Sparkles className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Affordable Style</CardTitle>
              <CardDescription>
                Trendy fashion accessories at pocket-friendly prices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Value for money</li>    
                <li>• Quality materials</li>
                <li>• Durability tested</li>
                <li>• Style guarantee</li>
              </ul>
            </CardContent>
          </Card>
        </div>  
      </div>
       <footer className="bg-gray-900 text-white py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-8">
          <div className="flex items-center space-x-2 mb-4  ">
            <div className="w-8 h-8 business-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <span className="text-3xl font-bold">SuperStock Pro</span>
          </div>
          <p className="text-center text-gray-400 w-100">
            Your trusted superstockist partner for premium brands. 
            Delivering excellence through innovative solutions and seamless communication.
          </p>
        </div>
          <div className="grid md:grid-cols-2 gap-8 text-center">
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#section2" className="hover:text-white transition-colors">Brands</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
               <li><b>Store 1 : </b>Ground floor, DB Mall, Opp. Railway Station, Gwalior(M.P.)</li>
               <li>0751-4924138, +91-9111006214</li>
               <li><b>Store 2 : </b>Opp. Chetakpuri Petrol Pump, Lashkar, Gwalior(M.P.)</li>
                <li>0751-4033491, +91-911100456</li>
                <li>ktplanuj@yahoo.co.in</li>
              </ul>
            </div>
          </div>
      
        <div className="border-t border-gray-800 mt-4 pt-8 text-gray-400 text-center">
          <p>&copy; 2025 SuperStock Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default FastrackPage;
