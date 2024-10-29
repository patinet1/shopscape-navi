import { useState } from "react";
import { Star, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProductCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="group relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0 aspect-square relative">
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
          alt="Product"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center animate-fade-in">
            <Button variant="secondary" className="mx-2">
              Quick View
            </Button>
            <Button className="mx-2">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        )}
        <Badge className="absolute top-2 left-2" variant="secondary">New</Badge>
      </CardContent>
      <CardFooter className="flex flex-col items-start p-4">
        <h3 className="font-semibold mb-2">Premium Product</h3>
        <div className="flex items-center space-x-1 mb-2">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm">4.5 (128)</span>
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="font-bold">$299.99</p>
          <p className="text-sm text-muted-foreground">Free shipping</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;