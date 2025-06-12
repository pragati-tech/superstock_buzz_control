
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MessageHistoryItem {
  id: number;
  content: string;
  recipientType: string;
  timestamp: string;
  sender: string;
  messagesSent?: number;
}

interface MessageHistoryProps {
  messages: MessageHistoryItem[];
}

const MessageHistory = ({ messages }: MessageHistoryProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Message History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {messages.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No messages sent yet</p>
          ) : (
            messages.map((msg) => (
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
  );
};

export default MessageHistory;
