import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

interface Props {
  onBack: () => void;
  onConfirm: () => void;
}

const OrderReview = ({ onBack, onConfirm }: Props) => {
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (termsAccepted) {
      onConfirm();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="border rounded-lg p-4 space-y-4">
          <h3 className="font-semibold">Order Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>$699.98</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping</span>
              <span>$15.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Tax</span>
              <span>$71.50</span>
            </div>
            <div className="flex justify-between font-semibold pt-2 border-t">
              <span>Total</span>
              <span>$786.48</span>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-4 space-y-4">
          <h3 className="font-semibold">Shipping Address</h3>
          <div className="text-sm space-y-1">
            <p>John Doe</p>
            <p>123 Main Street</p>
            <p>Apt 4B</p>
            <p>New York, NY 10001</p>
            <p>United States</p>
          </div>
        </div>

        <div className="border rounded-lg p-4 space-y-4">
          <h3 className="font-semibold">Payment Method</h3>
          <div className="text-sm space-y-1">
            <p>Credit Card ending in 3456</p>
            <p>Expiry: 12/25</p>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          checked={termsAccepted}
          onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
          required
        />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none"
        >
          I agree to the Terms and Conditions and Return Policy
        </label>
      </div>

      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button type="submit" disabled={!termsAccepted}>
          Place Order
        </Button>
      </div>
    </form>
  );
};

export default OrderReview;