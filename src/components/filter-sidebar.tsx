import React from "react";
import { Checkbox, CheckboxGroup, Slider, Button, RadioGroup, Radio } from "@heroui/react";
import { Icon } from "@iconify/react";

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({ isOpen, onClose }) => {
  const [priceRange, setPriceRange] = React.useState([1000, 100000]);
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);
  const [selectedRating, setSelectedRating] = React.useState<string>("0");
  
  const categories = [
    "Acietes",
    "Unguentos",
    "Jarabes",
    "Destilados",
  ];
  
  const handleReset = () => {
    setPriceRange([10000, 100000]);
    setSelectedCategories([]);
    setSelectedRating("0");
  };

  return (
    <>
      {/* Mobile filter sidebar */}
      <div 
        className={`fixed inset-0 bg-background/80 backdrop-blur-sm z-50 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      >
        <div 
          className={`fixed inset-y-0 left-0 w-full max-w-xs bg-background p-6 shadow-lg transition-transform duration-300 overflow-y-auto ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Filtros</h2>
            <Button isIconOnly size="sm" variant="light" onPress={onClose}>
              <Icon icon="lucide:x" className="text-lg" />
            </Button>
          </div>
          
          {renderFilterContent()}
          
          <div className="flex gap-3 mt-8">
            <Button color="primary" className="flex-1" onPress={onClose}>
              Aplicar Filtros
            </Button>
            <Button variant="flat" onPress={handleReset}>
              Reset
            </Button>
          </div>
        </div>
      </div>
      
      {/* Desktop filter sidebar */}
      <div className="hidden md:block w-64 flex-shrink-0">
        <div className="sticky top-20">
          <h2 className="text-lg font-semibold mb-6">Filtros</h2>
          {renderFilterContent()}
          <Button 
            variant="light" 
            size="sm" 
            className="mt-6"
            onPress={handleReset}
            startContent={<Icon icon="lucide:refresh-ccw" size={16} />}
          >
            Reset Filters
          </Button>
        </div>
      </div>
    </>
  );
  
  function renderFilterContent() {
    return (
      <div className="space-y-8">
        <div>
          <h3 className="font-medium mb-3">Categorias</h3>
          <CheckboxGroup
            value={selectedCategories}
            onValueChange={setSelectedCategories}
          >
            {categories.map((category) => (
              <Checkbox key={category} value={category}>
                {category}
              </Checkbox>
            ))}
          </CheckboxGroup>
        </div>
        
        <div>
          <h3 className="font-medium mb-3">Rango de Precio</h3>
          <Slider
            label="Precio"
            step={1}
            minValue={0}
            maxValue={200000}
            value={priceRange}
            onChange={setPriceRange as any}
            formatOptions={{ style: "currency", currency: "USD" }}
            className="max-w-full"
          />
        </div>
        
        <div>
          <h3 className="font-medium mb-3">Calificacion</h3>
          <RadioGroup value={selectedRating} onValueChange={setSelectedRating}>
            {[4, 3, 2, 1].map((rating) => (
              <Radio key={rating} value={rating.toString()}>
                <div className="flex items-center">
                  {Array(5).fill(0).map((_, i) => (
                    <Icon 
                      key={i}
                      icon="lucide:star" 
                      className={`text-xs ${i < rating ? "text-warning" : "text-default-300"}`}
                    />
                  ))}
                  <span className="ml-2">& Mas</span>
                </div>
              </Radio>
            ))}
          </RadioGroup>
        </div>
        
        <div>
          <h3 className="font-medium mb-3">Tipo de Productos</h3>
          <CheckboxGroup defaultValue={["all"]}>
            <Checkbox value="all">Todos los Productos</Checkbox>
            <Checkbox value="organic">Organico</Checkbox>
            <Checkbox value="vegan">Vegano</Checkbox>
            <Checkbox value="cruelty-free">Libre de crueldad Animal</Checkbox>
            <Checkbox value="handmade">Artesanal</Checkbox>
          </CheckboxGroup>
        </div>
      </div>
    );
  }
};