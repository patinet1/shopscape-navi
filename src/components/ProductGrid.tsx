import { Star } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    id: 2,
    name: "Smart Watch Series 5",
    price: 399.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  // Add more products as needed
];

const ProductGrid = ({ title }: { title: string }) => {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-2xl font-bold mb-8">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </CardContent>
              <CardFooter className="flex flex-col items-start p-4">
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center space-x-1 mb-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">{product.rating}</span>
                </div>
                <p className="font-bold">${product.price}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;