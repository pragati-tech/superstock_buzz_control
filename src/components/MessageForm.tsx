
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

interface MessageFormProps {
  onSendMessage: (message: string, recipientType: string) => Promise<void>;
  isLoading: boolean;
}

const MessageForm = ({ onSendMessage, isLoading }: MessageFormProps) => {
  const [message, setMessage] = useState("");
  const [recipientType, setRecipientType] = useState("all");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    await onSendMessage(message, recipientType);
    setMessage("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Send className="w-5 h-5" />
          <span>Send SMS Broadcast via MSG91</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="recipients">Recipients</Label>
            <select
              value={recipientType}
              onChange={(e) => setRecipientType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-business-500"
            >
              <option value="all">All Clients</option>
              <optgroup label="Brand Categories">
                <option value="tanishq">Tanishq Clients</option>
                <option value="titan">Titan Clients</option>
                <option value="mia">Mia Clients</option>
              </optgroup>
              <optgroup label="Business Categories">
                <option value="distributor">Distributor (NESTLE, REO, Havells, Nestle Profer)</option>
                <option value="super-stockists">Distributor Superstockists (Titan, Sonata, Fastrack, Dolycats)</option>
                <option value="stockists">Exclusive Stores (Titan World, Helios, Fastrack Store, Nescafe Kiosks, Mia by Tanishq)</option>
              </optgroup>
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
  );
};

export default MessageForm;
