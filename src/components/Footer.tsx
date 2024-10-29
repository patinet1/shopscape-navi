import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent">Our Story</a></li>
              <li><a href="#" className="hover:text-accent">Careers</a></li>
              <li><a href="#" className="hover:text-accent">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent">Contact Us</a></li>
              <li><a href="#" className="hover:text-accent">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-accent">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent">Gift Cards</a></li>
              <li><a href="#" className="hover:text-accent">Size Guide</a></li>
              <li><a href="#" className="hover:text-accent">Store Locator</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent"><Facebook /></a>
              <a href="#" className="hover:text-accent"><Instagram /></a>
              <a href="#" className="hover:text-accent"><Twitter /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center text-sm">
          <p>&copy; 2024 STORE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;