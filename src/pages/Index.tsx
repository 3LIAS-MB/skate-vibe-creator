
import { NavBar } from "@/components/site/nav-bar";
import { ProductCard } from "@/components/site/product-card";
import { Button } from "@/components/ui/button";

// Dummy data for products
const featuredProducts = [
  {
    id: "1",
    name: "Street Legend Deck",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1547447134-cd3f5c716030",
    brand: "Urban Skate Co.",
  },
  {
    id: "2",
    name: "Pro Series Wheels",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1547447134-cd3f5c716030",
    brand: "Street Kings",
  },
  {
    id: "3",
    name: "Premium Trucks V2",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1547447134-cd3f5c716030",
    brand: "Master Ride",
  },
  {
    id: "4",
    name: "Urban Classic Deck",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1547447134-cd3f5c716030",
    brand: "City Skaters",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-skate-black">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1564982752979-3f7bc974d29a"
            alt="Skateboarding"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-skate-black/80 to-transparent" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
                BACK TO SCHOOL
              </h1>
              <p className="text-xl text-skate-gold mb-8 animate-fade-in delay-100">
                Get ready for the new season with our latest collection
              </p>
              <Button 
                className="bg-skate-gold hover:bg-skate-rustic text-skate-black px-8 py-6 text-lg font-bold transition-colors animate-fade-in delay-200"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {['REMERAS', 'PANTALONES', 'ACCESORIOS', 'SKATES'].map((category, index) => (
            <div key={category} className="group relative overflow-hidden rounded-lg">
              <div className="aspect-[4/5] relative">
                <img 
                  src={`https://images.unsplash.com/photo-${1547447134 + index}-cd3f5c716030`}
                  alt={category}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-skate-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-xl font-bold">{category}</h3>
                  <Button 
                    variant="link" 
                    className="text-skate-gold hover:text-white transition-colors mt-2"
                  >
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Featured Products</h2>
          <Button 
            variant="outline" 
            className="border-skate-gold text-skate-gold hover:bg-skate-gold hover:text-skate-black"
          >
            View All
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative bg-skate-wood rounded-lg overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
                alt="Promo"
                className="w-full h-full object-cover opacity-50"
              />
            </div>
            <div className="relative py-16 px-8 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-skate-gold mb-4">
                6 CUOTAS SIN INTERÉS
              </h2>
              <p className="text-white text-lg mb-8">
                En todos los productos de la tienda
              </p>
              <Button className="bg-skate-gold hover:bg-skate-rustic text-skate-black font-bold">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
