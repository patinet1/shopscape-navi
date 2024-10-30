import { useState } from "react";
import { Heart, Share2, Star, ShoppingCart, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductGallery from "@/components/product/ProductGallery";
import ProductOptions from "@/components/product/ProductOptions";
import ProductReviews from "@/components/product/ProductReviews";
import RelatedProducts from "@/components/RelatedProducts";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const { toast } = useToast();

  // Mock product data - in a real app, this would come from an API
  const product = {
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 349.99,
    description: "Experience premium sound quality with our latest wireless headphones...",
    rating: 4.5,
    reviewCount: 128,
    stock: 5,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    ],
    colors: ["Black", "Silver", "Blue"],
    sizes: ["Small", "Medium", "Large"],
    specs: {
      "Battery Life": "Up to 30 hours",
      "Connectivity": "Bluetooth 5.0",
      "Weight": "250g",
    },
  };

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleAddToWishlist = () => {
    toast({
      title: "Added to Wishlist",
      description: `${product.name} has been added to your wishlist.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-8">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <ProductGallery images={product.images} />
          
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-2xl font-bold">{product.name}</h1>
                <Badge variant="secondary" className="bg-yellow-500">Best Seller</Badge>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 text-sm">{product.rating}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
              {product.stock <= 5 && (
                <p className="text-red-500 text-sm">
                  Only {product.stock} left in stock!
                </p>
              )}
            </div>

            <ProductOptions
              colors={product.colors}
              sizes={product.sizes}
              selectedColor={selectedColor}
              selectedSize={selectedSize}
              onColorChange={setSelectedColor}
              onSizeChange={setSelectedSize}
            />

            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-md">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
              <Button onClick={handleAddToCart} className="flex-1">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="icon" onClick={handleAddToWishlist}>
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>

            <Tabs defaultValue="description" className="mt-8">
              <TabsList>
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="shipping">Shipping</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="prose">
                <p>{product.description}</p>
              </TabsContent>
              <TabsContent value="specifications">
                <dl className="space-y-4">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex">
                      <dt className="w-1/3 font-medium">{key}</dt>
                      <dd className="w-2/3">{value}</dd>
                    </div>
                  ))}
                </dl>
              </TabsContent>
              <TabsContent value="shipping">
                <p>Free shipping on orders over $50. Estimated delivery: 3-5 business days.</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <ProductReviews productId={product.id} />
        
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
          <RelatedProducts />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;