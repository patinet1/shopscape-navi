import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import type { ShippingOption } from "@/lib/checkout-types";

interface Props {
  onBack: () => void;
  onNext: () => void;
}

const ShippingOptions = ({ onBack, onNext }: Props) => {
  const [selectedOption, setSelectedOption] = useState<string>("standard");

  const shippingOptions: ShippingOption[] = [
    {
      id: "standard",
      name: "Standard Delivery",
      description: "Delivery within 5-7 business days",
      price: 0,
      estimatedDays: "5-7 business days",
    },
    {
      id: "express",
      name: "Express Delivery",
      description: "Delivery within 2-3 business days",
      price: 15,
      estimatedDays: "2-3 business days",
    },
    {
      id: "overnight",
      name: "Overnight Delivery",
      description: "Next business day delivery",
      price: 25,
      estimatedDays: "Next business day",
    },
  ];

  return (
    <div className="space-y-6">
      <RadioGroup
        value={selectedOption}
        onValueChange={setSelectedOption}
        className="space-y-4"
      >
        {shippingOptions.map((option) => (
          <div
            key={option.id}
            className="flex items-center space-x-4 border rounded-lg p-4"
          >
            <RadioGroupItem value={option.id} id={option.id} />
            <div className="flex-1">
              <Label htmlFor={option.id} className="font-semibold">
                {option.name}
              </Label>
              <p className="text-sm text-muted-foreground">
                {option.description}
              </p>
            </div>
            <div className="text-right">
              <p className="font-semibold">
                {option.price === 0 ? "FREE" : `$${option.price}`}
              </p>
              <p className="text-sm text-muted-foreground">
                {option.estimatedDays}
              </p>
            </div>
          </div>
        ))}
      </RadioGroup>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button onClick={onNext}>Continue to Payment</Button>
      </div>
    </div>
  );
};

export default ShippingOptions;