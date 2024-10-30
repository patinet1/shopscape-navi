import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import DeliveryForm from "@/components/checkout/DeliveryForm";
import ShippingOptions from "@/components/checkout/ShippingOptions";
import PaymentForm from "@/components/checkout/PaymentForm";
import OrderReview from "@/components/checkout/OrderReview";
import OrderConfirmation from "@/components/checkout/OrderConfirmation";
import { Steps } from "@/lib/checkout-types";

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState<Steps>("delivery");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const steps: Steps[] = ["delivery", "shipping", "payment", "review"];
  const stepTitles = {
    delivery: "Delivery Information",
    shipping: "Shipping Options",
    payment: "Payment Details",
    review: "Review & Confirm",
  };

  const currentStepIndex = steps.indexOf(currentStep);
  const progress = ((currentStepIndex + 1) / steps.length) * 100;

  const renderStep = () => {
    if (orderPlaced) return <OrderConfirmation />;

    switch (currentStep) {
      case "delivery":
        return <DeliveryForm onNext={() => setCurrentStep("shipping")} />;
      case "shipping":
        return (
          <ShippingOptions
            onBack={() => setCurrentStep("delivery")}
            onNext={() => setCurrentStep("payment")}
          />
        );
      case "payment":
        return (
          <PaymentForm
            onBack={() => setCurrentStep("shipping")}
            onNext={() => setCurrentStep("review")}
          />
        );
      case "review":
        return (
          <OrderReview
            onBack={() => setCurrentStep("payment")}
            onConfirm={() => setOrderPlaced(true)}
          />
        );
    }
  };

  if (orderPlaced) {
    return <OrderConfirmation />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container max-w-3xl py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold">Checkout</h1>
              <Progress value={progress} className="h-2" />
              <div className="flex justify-between text-sm">
                {steps.map((step, index) => (
                  <button
                    key={step}
                    onClick={() => {
                      if (index <= currentStepIndex) {
                        setCurrentStep(step);
                      }
                    }}
                    className={`${
                      index <= currentStepIndex
                        ? "text-primary cursor-pointer"
                        : "text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {stepTitles[step]}
                  </button>
                ))}
              </div>
            </div>
            {renderStep()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;