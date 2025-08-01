
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Zap, Clock, Store } from "lucide-react";
import Heliosimg from "../assets/brands/Helios.png"

const HeliosPage = () => {  
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
            src= {Heliosimg}
            alt =""
            className="h-20 mx-auto bject-contain drop-shadow-lg mb-2"
            loading="lazy"
          />
          <h1 className="text-xl md:text-4xl font-bold text-gray-900 mb-4">
            Helios
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Helios store was opened in 2018 and in this we provide international brands like Movado, Seiko, Tissot, Fossile and many more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Clock className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Watch Collections</CardTitle>
              <CardDescription>
                Curated selection of premium timepieces
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Luxury watches</li>
                <li>• Sports watches</li>
                <li>• Classic timepieces</li>
                <li>• Limited editions</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Zap className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Expert Service</CardTitle>
              <CardDescription>
                Professional watch services and maintenance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Watch repairs</li>
                <li>• Battery replacement</li>
                <li>• Strap changes</li>
                <li>• Maintenance service</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Store className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Retail Experience</CardTitle>
              <CardDescription>
                Premium shopping environment with expert guidance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Personal consultations</li>
                <li>• Product demonstrations</li>
                <li>• Gift wrapping</li>
                <li>• Warranty support</li>
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
               <li>Ground floor, DB Mall, Opp. Railway Station, Gwalior(M.P.)</li>
               <li>0751-4924138, +91-9111006214</li>
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

export default HeliosPage;
