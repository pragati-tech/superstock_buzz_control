
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MessageForm from "@/components/MessageForm";
import MessageHistory from "@/components/MessageHistory";
import { useToast } from "@/hooks/use-toast";

interface MessageHistoryItem {
  id: number;
  content: string;
  recipientType: string;
  timestamp: string;
  sender: string;
  messagesSent?: number;
}

const AdminDashboard = () => {
  const { toast } = useToast();
  const [messages, setMessages] = useState<MessageHistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (message: string, recipientType: string) => {
    setIsLoading(true);
    
    // Simulate message sending for frontend demo
    setTimeout(() => {
      const newMessage: MessageHistoryItem = {
        id: Date.now(),
        content: message,
        recipientType,
        timestamp: new Date().toISOString(),
        sender: "Dashboard User",
        messagesSent: Math.floor(Math.random() * 50) + 10 // Random number for demo
      };
      
      setMessages(prev => [newMessage, ...prev]);
      setIsLoading(false);
      
      toast({
        title: "Message Sent Successfully",
        description: `WhatsApp message sent to ${recipientType === 'all' ? 'All Clients' : recipientType}`,
      });
    }, 2000); // Simulate API call delay
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Message Dashboard
          </h1>
          <p className="text-xl text-gray-600">
            Send WhatsApp broadcasts and view message history
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <MessageForm onSendMessage={handleSendMessage} isLoading={isLoading} />
          <MessageHistory messages={messages} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
