
import { Card, CardContent } from "@/components/ui/card";
import { Users, MessageSquare, Send } from "lucide-react";

interface AdminStatsProps {
  messageCount: number;
}

const AdminStats = ({ messageCount }: AdminStatsProps) => {
  const clientStats = [
    { name: "Total Clients", value: "156", icon: <Users className="w-6 h-6" /> },
    { name: "Messages Sent", value: messageCount.toString(), icon: <MessageSquare className="w-6 h-6" /> },
    { name: "Active Brands", value: "6", icon: <Send className="w-6 h-6" /> },
  ];

  return (
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
  );
};

export default AdminStats;
