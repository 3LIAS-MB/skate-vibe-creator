
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => setIsOpen(true)}
        className="relative"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <span className="absolute -top-1 -right-1 bg-skate-blue text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
          2
        </span>
      </Button>

      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full md:w-[30%] bg-white dark:bg-skate-coffee z-50 transform transition-transform duration-300 ease-out shadow-xl",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-skate-charcoal dark:text-white">Carrito de Compras</h2>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="space-y-4">
            {/* Example Cart Item */}
            <div className="flex items-center space-x-4 border-b border-gray-200 pb-4">
              <img
                src="https://images.unsplash.com/photo-1547447134-cd3f5c716030"
                alt="Product"
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-skate-charcoal dark:text-white">Street Legend Deck</h3>
                <p className="text-sm text-gray-500">Cantidad: 1</p>
                <p className="text-sm font-bold text-skate-charcoal dark:text-white">$59.99</p>
              </div>
              <Button variant="ghost" size="icon">
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Example Cart Item */}
            <div className="flex items-center space-x-4 border-b border-gray-200 pb-4">
              <img
                src="https://images.unsplash.com/photo-1547447134-cd3f5c716030"
                alt="Product"
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-skate-charcoal dark:text-white">Pro Series Wheels</h3>
                <p className="text-sm text-gray-500">Cantidad: 1</p>
                <p className="text-sm font-bold text-skate-charcoal dark:text-white">$34.99</p>
              </div>
              <Button variant="ghost" size="icon">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="mt-6 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-semibold text-skate-charcoal dark:text-white">$94.98</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Envío</span>
              <span className="font-semibold text-skate-charcoal dark:text-white">Calculado al finalizar</span>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <span className="text-skate-charcoal dark:text-white">Total</span>
              <span className="text-skate-charcoal dark:text-white">$94.98</span>
            </div>
          </div>

          {/* Checkout Button */}
          <Button className="w-full mt-6 bg-skate-blue hover:bg-skate-blue/90">
            Finalizar Compra
          </Button>
        </div>
      </div>
    </>
  );
};
