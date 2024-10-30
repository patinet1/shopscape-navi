import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import OrderCard from "./OrderCard";

interface Props {
  onOrderSelect: (orderId: string) => void;
}

const OrderHistory = ({ onOrderSelect }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [timeFilter, setTimeFilter] = useState("all");

  // Mock data - in a real app, this would come from an API
  const orders = [
    {
      id: "ORD-001",
      date: "2024-02-15",
      total: 299.99,
      status: "delivered",
      items: [
        {
          name: "Wireless Headphones",
          image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
          quantity: 1,
        }
      ]
    },
    {
      id: "ORD-002",
      date: "2024-02-10",
      total: 159.99,
      status: "shipped",
      items: [
        {
          name: "Smart Watch",
          image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
          quantity: 1,
        }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search orders..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Orders</SelectItem>
            <SelectItem value="delivered">Delivered</SelectItem>
            <SelectItem value="shipped">Shipped</SelectItem>
            <SelectItem value="processing">Processing</SelectItem>
          </SelectContent>
        </Select>
        <Select value={timeFilter} onValueChange={setTimeFilter}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Time period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Time</SelectItem>
            <SelectItem value="6months">Last 6 Months</SelectItem>
            <SelectItem value="year">Last Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <OrderCard
            key={order.id}
            order={order}
            onSelect={() => onOrderSelect(order.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;