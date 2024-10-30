import { Button } from "@/components/ui/button";
import { CheckCircle2, Download, Truck } from "lucide-react";
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  const orderNumber = "ORD-" + Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <div className="text-center space-y-6 py-8">
      <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto" />
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Order Placed Successfully!</h2>
        <p className="text-muted-foreground">
          Thank you for your purchase. We'll email you an order confirmation with
          details and tracking info.
        </p>
      </div>

      <div className="bg-secondary p-4 rounded-lg space-y-2 max-w-sm mx-auto">
        <p className="font-semibold">Order Number</p>
        <p className="text-lg">{orderNumber}</p>
      </div>

      <div className="flex justify-center gap-4">
        <Button variant="outline" className="gap-2">
          <Truck className="h-4 w-4" />
          Track Order
        </Button>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Download Receipt
        </Button>
      </div>

      <div className="pt-4">
        <Link to="/">
          <Button variant="link">Continue Shopping</Button>
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;