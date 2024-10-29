import { Minus, Plus, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import RelatedProducts from "@/components/RelatedProducts";

const Cart = () => {
  const [promoCode, setPromoCode] = useState("");
  const [shippingMethod, setShippingMethod] = useState("standard");

  const cartItems = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      quantity: 1,
      color: "Black",
      size: "One Size",
    },
    {
      id: 2,
      name: "Smart Watch Series 5",
      price: 399.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      quantity: 1,
      color: "Silver",
      size: "42mm",
    },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = shippingMethod === "standard" ? 0 : shippingMethod === "express" ? 15 : 25;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container py-8 flex-1">
        <div className="flex items-center gap-2 mb-8">
          <ShoppingBag className="h-6 w-6" />
          <h1 className="text-2xl font-bold">Shopping Cart ({cartItems.length} items)</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-semibold">{item.name}</h3>
                    <Button variant="ghost" size="icon">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary">{item.color}</Badge>
                    <Badge variant="secondary">{item.size}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon">
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span>{item.quantity}</span>
                      <Button variant="outline" size="icon">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="font-semibold">${item.price.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="border rounded-lg p-6 space-y-6 sticky top-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Order Summary</h3>
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="space-y-2">
                  <label className="text-sm">Shipping Method</label>
                  <Select
                    value={shippingMethod}
                    onValueChange={setShippingMethod}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select shipping method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard Delivery (Free)</SelectItem>
                      <SelectItem value="express">Express Delivery ($15)</SelectItem>
                      <SelectItem value="overnight">Overnight Delivery ($25)</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-muted-foreground">
                    Estimated delivery: {
                      shippingMethod === "standard" ? "5-7 business days" :
                      shippingMethod === "express" ? "2-3 business days" :
                      "Next business day"
                    }
                  </p>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <Button variant="outline">Apply</Button>
                </div>
              </div>

              <Button className="w-full" size="lg">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <RelatedProducts />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;