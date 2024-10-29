import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart } from "lucide-react";

const RelatedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Earbuds",
      price: 149.99,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb",
    },
    {
      id: 2,
      name: "Smart Speaker",
      price: 199.99,
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1543512214-318c7553f230",
    },
    {
      id: 3,
      name: "Fitness Tracker",
      price: 99.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Frequently Bought Together</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="group">
            <CardContent className="p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-square object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold">{product.name}</h3>
              <div className="flex items-center space-x-1 my-2">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm">{product.rating}</span>
              </div>
              <p className="font-bold">${product.price}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full" variant="secondary">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;