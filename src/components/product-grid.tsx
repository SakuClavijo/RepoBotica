import React from "react";
import { Card, CardBody, CardFooter, Button, Image, Tooltip, Pagination } from "@heroui/react";
import { Icon } from "@iconify/react";
import { products } from "../data/products";

interface ProductGridProps {
  searchQuery: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ searchQuery }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 12;
  
  const filteredProducts = React.useMemo(() => {
    return products.filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);
  
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  
  const currentProducts = React.useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredProducts.slice(start, end);
  }, [currentPage, filteredProducts]);

  return (
    <div className="space-y-8">
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <Icon icon="lucide:search-x" className="text-default-300 text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-medium">No products found</h3>
          <p className="text-default-500 mt-2">Try adjusting your search or filters</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product) => (
              <Card 
                key={product.id} 
                className="border border-divider"
                isPressable
                shadow="sm"
              >
                <CardBody className="p-0 overflow-hidden">
                  <div className="relative group">
                    <Image
                      removeWrapper
                      alt={product.name}
                      className="w-full object-cover h-64 group-hover:scale-105 transition-transform duration-300"
                      src={product.image}
                    />
                    {product.isNew && (
                      <div className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded-md">
                        New
                      </div>
                    )}
                    {product.discount > 0 && (
                      <div className="absolute top-2 right-2 bg-danger text-white text-xs px-2 py-1 rounded-md">
                        {product.discount}% OFF
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Tooltip content="Add to wishlist">
                        <Button
                          isIconOnly
                          className="bg-white/80 backdrop-blur-md text-default-700"
                          radius="full"
                          size="sm"
                          variant="flat"
                        >
                          <Icon icon="lucide:heart" className="text-lg" />
                        </Button>
                      </Tooltip>
                    </div>
                  </div>
                </CardBody>
                <CardFooter className="flex flex-col items-start text-left p-4">
                  <div className="text-tiny text-default-500 uppercase">{product.category}</div>
                  <h3 className="font-medium text-medium mt-1">{product.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    {product.originalPrice && product.originalPrice > product.price ? (
                      <>
                        <span className="text-danger font-medium">${product.price.toFixed(2)}</span>
                        <span className="text-default-400 text-small line-through">${product.originalPrice.toFixed(2)}</span>
                      </>
                    ) : (
                      <span className="font-medium">${product.price.toFixed(2)}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <div className="flex">
                      {Array(5).fill(0).map((_, i) => (
                        <Icon 
                          key={i}
                          icon="lucide:star" 
                          className={`text-xs ${i < product.rating ? "text-warning" : "text-default-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-tiny text-default-500">({product.reviewCount})</span>
                  </div>
                  <Button 
                    className="w-full mt-4"
                    color="primary"
                    radius="sm"
                    size="sm"
                    variant="flat"
                    startContent={<Icon icon="lucide:shopping-cart" />}
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <Pagination
                total={totalPages}
                initialPage={1}
                page={currentPage}
                onChange={setCurrentPage}
                showControls
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};