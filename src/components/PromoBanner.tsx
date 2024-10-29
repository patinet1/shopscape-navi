import { Button } from "./ui/button";

const PromoBanner = () => {
  return (
    <div className="bg-accent text-white py-3">
      <div className="container text-center">
        <p className="inline-block mr-4">
          Limited Time Offer: Free Shipping on Orders Over $50!
        </p>
        <Button
          variant="outline"
          className="text-white border-white hover:bg-white hover:text-accent"
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default PromoBanner;