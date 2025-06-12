import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import { Send, Users, MessageSquare } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const AdminDashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [message, setMessage] = useState("");
  const [recipientType, setRecipientType] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [messageHistory, setMessageHistory] = useState<any[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      if (parsedUser.role !== 'admin') {
        navigate('/login');
        return;
      }
      setUser(parsedUser);
    } else {
      navigate('/login');
    }

    // Load message history
    const history = localStorage.getItem('messageHistory');
    if (history) {
      setMessageHistory(JSON.parse(history));
    }
  }, [navigate]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsLoading(true);

    try {
      console.log('Sending SMS via MSG91...');
      
      const { data, error } = await supabase.functions.invoke('send-sms', {
        body: {
          message: message.trim(),
          recipientType
        }
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw error;
      }

      console.log('SMS sent successfully:', data);

      const newMessage = {
        id: Date.now(),
        content: message,
        recipientType,
        timestamp: new Date().toISOString(),
        sender: user?.name || 'Admin',
        messagesSent: data.messagesSent || 0
      };

      const updatedHistory = [newMessage, ...messageHistory];
      setMessageHistory(updatedHistory);
      localStorage.setItem('messageHistory', JSON.stringify(updatedHistory));

      // Also save to user messages for the user dashboard
      const userMessages = JSON.parse(localStorage.getItem('userMessages') || '[]');
      userMessages.unshift(newMessage);
      localStorage.setItem('userMessages', JSON.stringify(userMessages));

      toast({
        title: "SMS Sent Successfully",
        description: `SMS sent to ${data.recipients || 0} recipients via MSG91`,
      });

      setMessage("");
    } catch (error: any) {
      console.error('Error sending SMS:', error);
      toast({
        title: "Failed to Send SMS",
        description: error.message || "An error occurred while sending the SMS",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  const clientStats = [
    { name: "Total Clients", value: "156", icon: <Users className="w-6 h-6" /> },
    { name: "Messages Sent", value: messageHistory.length.toString(), icon: <MessageSquare className="w-6 h-6" /> },
    { name: "Active Brands", value: "6", icon: <Send className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-business-50 to-business-100">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage client communications and broadcast SMS messages via MSG91</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {clientStats.map((stat) => (
            <Card key={stat.name} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                    <p className="text-3xl font-bold text-business-600">{stat.value}</p>
                  </div>
                  <div className="text-business-500">{stat.icon}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Send className="w-5 h-5" />
                <span>Send SMS Broadcast via MSG91</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSendMessage} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="recipients">Recipients</Label>
                  <select
                    value={recipientType}
                    onChange={(e) => setRecipientType(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-business-500"
                  >
                    <option value="all">All Clients</option>
                    <option value="tanishq">Tanishq Clients</option>
                    <option value="titan">Titan Clients</option>
                    <option value="mia">Mia Clients</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your SMS message here..."
                    className="min-h-[120px]"
                    required
                  />
                  <p className="text-sm text-gray-500">
                    {message.length}/160 characters
                  </p>
                </div>
                <Button 
                  type="submit" 
                  className="w-full business-gradient hover:opacity-90"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending via MSG91..." : "Send SMS via MSG91"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Message History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {messageHistory.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">No messages sent yet</p>
                ) : (
                  messageHistory.map((msg) => (
                    <div key={msg.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-sm font-medium text-business-600">
                          To: {msg.recipientType === 'all' ? 'All Clients' : msg.recipientType}
                        </span>
                        <span className="text-xs text-gray-500">
                          {new Date(msg.timestamp).toLocaleString()}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-2">{msg.content}</p>
                      {msg.messagesSent && (
                        <p className="text-xs text-green-600">
                          ✓ Sent to {msg.messagesSent} recipients via MSG91
                        </p>
                      )}
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
