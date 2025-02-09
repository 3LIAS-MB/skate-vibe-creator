
import { NavBar } from "@/components/site/nav-bar";
import { ProductCard } from "@/components/site/product-card";

// Dummy data for products
const featuredProducts = [
  {
    id: "1",
    name: "Pro Deck Series X",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1547447134-cd3f5c716030",
    brand: "SkateX",
  },
  {
    id: "2",
    name: "Street Wheels Elite",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1547447134-cd3f5c716030",
    brand: "RollerPro",
  },
  {
    id: "3",
    name: "Premium Trucks V2",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1547447134-cd3f5c716030",
    brand: "TruckMaster",
  },
  {
    id: "4",
    name: "Urban Deck Classic",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1547447134-cd3f5c716030",
    brand: "UrbanSkate",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto mt-16">
          <div className="relative h-[500px] rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-skate-charcoal to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1564982752979-3f7bc974d29a"
              alt="Skateboarding"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center z-20 px-8 sm:px-16">
              <div className="max-w-xl">
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                  Ride with Style
                </h1>
                <p className="text-lg text-gray-200 mb-8">
                  Discover our new collection of premium skateboards and accessories
                </p>
                <Button className="bg-skate-blue hover:bg-skate-charcoal text-white px-8 py-3 rounded-lg text-lg transition-colors">
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-skate-charcoal">Featured Products</h2>
            <Button variant="outline" className="text-skate-blue border-skate-blue hover:bg-skate-blue hover:text-white">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-skate-charcoal mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Decks', 'Wheels', 'Trucks', 'Clothing'].map((category) => (
              <div key={category} className="relative group cursor-pointer overflow-hidden rounded-lg">
                <div className="aspect-square bg-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-skate-charcoal/20 group-hover:bg-skate-charcoal/40 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">{category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
