
import { ShoppingCart, Menu, Search, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
            <a href="/" className="text-2xl font-bold text-skate-charcoal">
              SKATE<span className="text-skate-blue">SHOP</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1">
                  <span>Categories</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48 bg-white">
                <DropdownMenuItem>
                  <a href="/decks" className="w-full">Decks</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/wheels" className="w-full">Wheels</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/trucks" className="w-full">Trucks</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/clothing" className="w-full">Clothing</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/accessories" className="w-full">Accessories</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="/new-arrivals" className="text-skate-charcoal hover:text-skate-blue transition-colors">
              New Arrivals
            </a>
            <a href="/sale" className="text-skate-charcoal hover:text-skate-blue transition-colors">
              Sale
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-skate-blue text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                2
              </span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
