import { ChevronRight, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface OrderProps {
  order: {
    id: string;
    date: string;
    total: number;
    status: string;
    items: Array<{
      name: string;
      image: string;
      quantity: number;
    }>;
  };
  onSelect: () => void;
}

const OrderCard = ({ order, onSelect }: OrderProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-500";
      case "shipped":
        return "bg-blue-500";
      case "processing":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <img
                src={order.items[0].image}
                alt={order.items[0].name}
                className="w-16 h-16 object-cover rounded-md"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">{order.id}</h3>
                <Badge className={getStatusColor(order.status)}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Ordered on {new Date(order.date).toLocaleDateString()}
              </p>
              <p className="text-sm mt-1">
                {order.items.length} {order.items.length === 1 ? "item" : "items"} •{" "}
                ${order.total.toFixed(2)}
              </p>
            </div>
          </div>
          
          <div className="flex gap-2 w-full md:w-auto">
            <Button variant="outline" className="flex-1 md:flex-none">
              <Package className="h-4 w-4 mr-2" />
              Track
            </Button>
            <Button onClick={onSelect} className="flex-1 md:flex-none">
              View Details
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderCard;