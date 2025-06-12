
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import AdminStats from "@/components/AdminStats";
import MessageForm from "@/components/MessageForm";
import MessageHistory from "@/components/MessageHistory";
import { supabase } from "@/integrations/supabase/client";

interface MessageHistoryItem {
  id: number;
  content: string;
  recipientType: string;
  timestamp: string;
  sender: string;
  messagesSent?: number;
}

const AdminDashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [messageHistory, setMessageHistory] = useState<MessageHistoryItem[]>([]);
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

  const handleSendMessage = async (message: string, recipientType: string) => {
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

      const newMessage: MessageHistoryItem = {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-business-50 to-business-100">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage client communications and broadcast SMS messages via MSG91</p>
        </div>

        <AdminStats messageCount={messageHistory.length} />

        <div className="grid lg:grid-cols-2 gap-8">
          <MessageForm onSendMessage={handleSendMessage} isLoading={isLoading} />
          <MessageHistory messages={messageHistory} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
