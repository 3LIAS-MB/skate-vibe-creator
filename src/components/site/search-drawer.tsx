
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const SearchDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Focus the input when opening
      setTimeout(() => {
        document.getElementById("search-input")?.focus();
      }, 100);
    }
  };

  return (
    <>
      <Button variant="ghost" size="icon" onClick={toggleDrawer}>
        <Search className="h-5 w-5" />
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
            <h2 className="text-xl font-bold text-skate-charcoal dark:text-white">Búsqueda</h2>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="space-y-6">
            {/* Search Input */}
            <div>
              <Input
                id="search-input"
                type="search"
                placeholder="¿Qué estás buscando?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Filters Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-skate-charcoal dark:text-white">Filtros</h3>
              
              {/* Price Range */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-skate-charcoal dark:text-white">Rango de Precio</h4>
                <div className="flex gap-4">
                  <Input type="number" placeholder="Min" className="w-24" />
                  <Input type="number" placeholder="Max" className="w-24" />
                </div>
              </div>

              {/* Categories */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-skate-charcoal dark:text-white">Categorías</h4>
                <div className="space-y-2">
                  {["Skates", "Ropa", "Accesorios"].map((category) => (
                    <label key={category} className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-skate-charcoal dark:text-white">Marcas</h4>
                <div className="space-y-2">
                  {["Nike SB", "Vans", "Element", "Santa Cruz"].map((brand) => (
                    <label key={brand} className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
