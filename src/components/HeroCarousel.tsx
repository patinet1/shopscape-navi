import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Button } from "./ui/button";

const HeroCarousel = () => {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      title: "Summer Collection",
      description: "Discover the latest trends",
      cta: "Shop Now",
    },
    {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      title: "Tech Essentials",
      description: "Up to 40% off",
      cta: "View Deals",
    },
  ];

  return (
    <Carousel className="w-full max-w-screen-2xl mx-auto">
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[500px] w-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-xl mb-6">{slide.description}</p>
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                    {slide.cta}
                  </Button>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default HeroCarousel;