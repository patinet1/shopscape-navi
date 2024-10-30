import { ArrowLeft, Truck, Package, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Props {
  orderId: string;
  onBack: () => void;
}

const OrderDetails = ({ orderId, onBack }: Props) => {
  // Mock data - in a real app, this would be fetched based on orderId
  const order = {
    id: orderId,
    date: "2024-02-15",
    status: "delivered",
    total: 299.99,
    shipping: 0,
    tax: 24.99,
    items: [
      {
        id: 1,
        name: "Wireless Headphones",
        price: 299.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      }
    ],
    timeline: [
      { status: "Order Placed", date: "2024-02-15", completed: true },
      { status: "Processing", date: "2024-02-15", completed: true },
      { status: "Shipped", date: "2024-02-16", completed: true },
      { status: "Delivered", date: "2024-02-18", completed: true },
    ]
  };

  return (
    <div className="space-y-6">
      <Button variant="ghost" onClick={onBack} className="mb-4">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Orders
      </Button>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        Quantity: {item.quantity}
                      </p>
                      <p className="font-medium">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Delivery Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                {order.timeline.map((event, index) => (
                  <div key={event.status} className="flex items-start mb-4 last:mb-0">
                    <div className="relative">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        event.completed ? 'bg-primary text-primary-foreground' : 'bg-secondary'
                      }`}>
                        {event.completed && <CheckCircle className="h-5 w-5" />}
                      </div>
                      {index < order.timeline.length - 1 && (
                        <div className={`absolute top-8 left-4 w-0.5 h-12 -ml-px ${
                          event.completed ? 'bg-primary' : 'bg-secondary'
                        }`} />
                      )}
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">{event.status}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(event.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${order.shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${order.tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold pt-2 border-t">
                  <span>Total</span>
                  <span>${(order.total + order.shipping + order.tax).toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-2">
            <Button className="w-full" variant="outline">
              <Package className="h-4 w-4 mr-2" />
              Track Package
            </Button>
            <Button className="w-full" variant="outline">
              <Truck className="h-4 w-4 mr-2" />
              Return Items
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;