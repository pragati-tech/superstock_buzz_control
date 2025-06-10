
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Package, Search, Filter } from "lucide-react";

const ProductCatalog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/" className="inline-flex items-center text-business-600 hover:text-business-700 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📦</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Product Catalog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our complete range of premium products from all our partner brands
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Package className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Tanishq Collection</CardTitle>
              <CardDescription>
                Premium jewelry collections including gold, diamond, and precious stones
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/brands/tanishq">
                <Button className="w-full business-gradient">
                  View Tanishq Products
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Package className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Titan Watches</CardTitle>
              <CardDescription>
                Premium timepieces with cutting-edge technology and elegant designs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/brands/titan">
                <Button className="w-full business-gradient">
                  View Titan Products
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Package className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Mia Accessories</CardTitle>
              <CardDescription>
                Trendy fashion accessories for the modern woman
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/brands/mia">
                <Button className="w-full business-gradient">
                  View Mia Products
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Package className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Fastrack Lifestyle</CardTitle>
              <CardDescription>
                Cool and trendy accessories for the energetic youth
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/brands/fastrack">
                <Button className="w-full business-gradient">
                  View Fastrack Products
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Package className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Sonata Timepieces</CardTitle>
              <CardDescription>
                Reliable and affordable watches for everyday wear
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/brands/sonata">
                <Button className="w-full business-gradient">
                  View Sonata Products
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Package className="h-8 w-8 text-business-600 mb-2" />
              <CardTitle>Skinn Fragrances</CardTitle>
              <CardDescription>
                Premium fragrances and personal care products
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/brands/skinn">
                <Button className="w-full business-gradient">
                  View Skinn Products
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Browse by Category</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <Search className="h-12 w-12 text-business-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Search Products</h3>
              <p className="text-gray-600">Find specific products across all brands</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <Filter className="h-12 w-12 text-business-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Filter by Brand</h3>
              <p className="text-gray-600">Browse products by your preferred brand</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <Package className="h-12 w-12 text-business-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">New Arrivals</h3>
              <p className="text-gray-600">Discover the latest product collections</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductCatalog;
