
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Admin-only authentication
    setTimeout(() => {
      if (email === "admin@superstockpro.com" && password === "admin123") {
        const user = { name: "Admin User", role: "admin", email };
        localStorage.setItem('user', JSON.stringify(user));
        toast({
          title: "Login Successful",
          description: "Welcome back, Admin!",
        });
        navigate("/admin");
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid admin credentials. Please contact support if you're an authorized administrator.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-business-50 to-business-100">
      <Navigation />
      <div className="flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-900">
              Admin Login
            </CardTitle>
            <p className="text-gray-600">Administrator Access Only</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Admin Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter admin email"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Admin Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full business-gradient hover:opacity-90"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login as Admin"}
              </Button>
            </form>
            
            <div className="mt-6 p-4 bg-gray-50 rounded-lg text-sm">
              <p className="font-medium text-gray-700 mb-2">Admin Access Only:</p>
              <p className="text-gray-600">This portal is restricted to authorized administrators only.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin;
