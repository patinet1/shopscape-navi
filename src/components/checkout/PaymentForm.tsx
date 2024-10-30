import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { CreditCard, Paypal } from "lucide-react";

interface Props {
  onBack: () => void;
  onNext: () => void;
}

const PaymentForm = ({ onBack, onNext }: Props) => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [savePayment, setSavePayment] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <RadioGroup
        value={paymentMethod}
        onValueChange={setPaymentMethod}
        className="space-y-4"
      >
        <div className="space-y-4">
          <div className="flex items-center space-x-4 border rounded-lg p-4">
            <RadioGroupItem value="card" id="card" />
            <Label htmlFor="card" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Credit/Debit Card
            </Label>
          </div>

          {paymentMethod === "card" && (
            <div className="ml-8 space-y-4">
              <div>
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input id="cardNumber" required placeholder="1234 5678 9012 3456" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <Label htmlFor="expiry">Expiration Date</Label>
                  <Input id="expiry" required placeholder="MM/YY" />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" required placeholder="123" />
                </div>
              </div>
              <div>
                <Label htmlFor="nameOnCard">Name on Card</Label>
                <Input id="nameOnCard" required />
              </div>
            </div>
          )}

          <div className="flex items-center space-x-4 border rounded-lg p-4">
            <RadioGroupItem value="paypal" id="paypal" />
            <Label htmlFor="paypal" className="flex items-center gap-2">
              <Paypal className="h-4 w-4" />
              PayPal
            </Label>
          </div>
        </div>
      </RadioGroup>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="savePayment"
          checked={savePayment}
          onCheckedChange={(checked) => setSavePayment(checked as boolean)}
        />
        <label
          htmlFor="savePayment"
          className="text-sm font-medium leading-none"
        >
          Save payment method for future purchases
        </label>
      </div>

      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button type="submit">Review Order</Button>
      </div>
    </form>
  );
};

export default PaymentForm;