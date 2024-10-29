import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import ProductGrid from "@/components/ProductGrid";
import PromoBanner from "@/components/PromoBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <PromoBanner />
      <Navbar />
      <main className="flex-grow">
        <HeroCarousel />
        <ProductGrid title="Trending Now" />
        <ProductGrid title="Recommended for You" />
      </main>
      <Footer />
    </div>
  );
};

export default Index;