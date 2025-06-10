
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { MessageSquare, User, Mail } from "lucide-react";

const UserDashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      if (parsedUser.role !== 'user') {
        navigate('/login');
        return;
      }
      setUser(parsedUser);
    } else {
      navigate('/login');
    }

    // Load messages
    const userMessages = localStorage.getItem('userMessages');
    if (userMessages) {
      setMessages(JSON.parse(userMessages));
    }
  }, [navigate]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-business-50 to-business-100">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Client Dashboard</h1>
          <p className="text-gray-600">Welcome back! Stay updated with the latest news and offers</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Account Status</p>
                  <p className="text-xl font-bold text-green-600">Active</p>
                </div>
                <User className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">New Messages</p>
                  <p className="text-xl font-bold text-business-600">{messages.length}</p>
                </div>
                <MessageSquare className="w-8 h-8 text-business-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Client Type</p>
                  <p className="text-xl font-bold text-business-600">Premium</p>
                </div>
                <Mail className="w-8 h-8 text-business-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5" />
                <span>Recent Messages</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {messages.length === 0 ? (
                  <div className="text-center py-8">
                    <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">No messages yet</p>
                    <p className="text-sm text-gray-400">You'll receive updates and notifications here</p>
                  </div>
                ) : (
                  messages.map((msg) => (
                    <div key={msg.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-sm font-medium text-business-600">
                          From: {msg.sender}
                        </span>
                        <span className="text-xs text-gray-500">
                          {new Date(msg.timestamp).toLocaleString()}
                        </span>
                      </div>
                      <p className="text-gray-700">{msg.content}</p>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Brands</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Tanishq", logo: "💎", status: "Active" },
                  { name: "Titan", logo: "⌚", status: "Active" },
                  { name: "Mia", logo: "👜", status: "Active" },
                  { name: "Fastrack", logo: "🕶️", status: "Pending" },
                ].map((brand) => (
                  <div key={brand.name} className="border border-gray-200 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">{brand.logo}</div>
                    <h3 className="font-medium text-gray-900">{brand.name}</h3>
                    <p className={`text-sm ${brand.status === 'Active' ? 'text-green-600' : 'text-yellow-600'}`}>
                      {brand.status}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
