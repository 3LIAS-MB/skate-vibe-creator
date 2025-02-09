
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  brand: string;
}

export const ProductCard = ({ id, name, price, image, brand }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-skate-blue font-medium">{brand}</p>
        <h3 className="text-lg font-semibold text-skate-charcoal mt-1">{name}</h3>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-lg font-bold text-skate-charcoal">${price}</p>
          <Button 
            variant="default" 
            size="sm"
            className="bg-skate-blue hover:bg-skate-charcoal transition-colors"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};
