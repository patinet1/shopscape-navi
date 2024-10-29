import { Search, ShoppingCart, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <h1 className="text-2xl font-bold">STORE</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-accent">New Arrivals</a>
              <a href="#" className="hover:text-accent">Best Sellers</a>
              <a href="#" className="hover:text-accent">Sale</a>
              <a href="#" className="hover:text-accent">Favorites</a>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex relative">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-64 pr-8"
              />
              <Search className="absolute right-2 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;