import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Input, Button, Link, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import { Icon } from "@iconify/react";
import { ProductGrid } from "./components/product-grid";
import { FilterSidebar } from "./components/filter-sidebar";
import { LandingPage } from "./components/landing-page";
import { ChatBot } from "./components/chat-bot";
import { AboutUs } from "./components/about-us";

export default function App() {
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState("landing"); // Add state for page navigation
  const [isChatOpen, setIsChatOpen] = React.useState(false);

  return (
    <div className="max-h-screen bg-background">
      <Navbar maxWidth="xl" isBordered>
        <NavbarBrand>
           <img
                src="/img/logo.svg"
                alt="Logo La Botica del Abuelo Russell"
                className="w-100 h-auto sm:w-24 md:w-28"
            />
        </NavbarBrand>
        
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive={currentPage === "landing"}>
            <Link 
              color={currentPage === "landing" ? "primary" : "foreground"} 
              href="#"
              onPress={() => setCurrentPage("landing")}
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive={currentPage === "shop"}>
            <Link 
              color={currentPage === "shop" ? "primary" : "foreground"} 
              href="#"
              onPress={() => setCurrentPage("shop")}
            >
              Shop
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Collections
            </Link>
          </NavbarItem>
          <NavbarItem isActive={currentPage === "about"}>
            <Link 
              color={currentPage === "about" ? "primary" : "foreground"} 
              href="#"
              onPress={() => setCurrentPage("about")}
            >
              About Us
            </Link>
          </NavbarItem>
        </NavbarContent>
        
        <NavbarContent justify="end">
          <NavbarItem className="hidden md:flex">
            <Input
              classNames={{
                base: "max-w-full sm:max-w-[15rem] h-10",
                mainWrapper: "h-full",
                input: "text-small",
                inputWrapper: "h-full font-normal text-default-500 bg-default-100",
              }}
              placeholder="Search products..."
              size="sm"
              startContent={<Icon icon="lucide:search" className="text-default-400" />}
              type="search"
              value={searchQuery}
              onValueChange={setSearchQuery}
            />
          </NavbarItem>
          <NavbarItem>
            <Button
              isIconOnly
              variant="light"
              aria-label="Cart"
            >
              <div className="relative">
                <Icon icon="lucide:shopping-bag" className="text-default-500 text-xl" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">3</span>
              </div>
            </Button>
          </NavbarItem>
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  isIconOnly
                  variant="light"
                  aria-label="Account"
                >
                  <Icon icon="lucide:user" className="text-default-500 text-xl" />
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu aria-label="User menu">
              <DropdownItem key="profile">Perfil</DropdownItem>
              <DropdownItem key="orders">Ordenes</DropdownItem>
              <DropdownItem key="settings">Configuracion</DropdownItem>
              <DropdownItem key="logout" color="danger">Salir</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentPage === "landing" ? (
          <LandingPage onShopNow={() => setCurrentPage("shop")} />
        ) : currentPage === "about" ? (
          <AboutUs />
        ) : (
          <>
            <div className="flex flex-col mb-8">
              <h1 className="text-3xl font-semibold text-foreground">Remedios Naturales</h1>
              <p className="text-default-500 mt-2">Productos de botica artesanales para el bienestar y la curación</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <FilterSidebar 
                isOpen={isFilterOpen} 
                onClose={() => setIsFilterOpen(false)} 
              />
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                  <Button 
                    className="md:hidden"
                    startContent={<Icon icon="lucide:filter" />}
                    variant="flat"
                    onPress={() => setIsFilterOpen(true)}
                  >
                    Filters
                  </Button>
                  
                  <div className="flex items-center gap-3 ml-auto">
                    <span className="text-small text-default-500">42 products</span>
                    <Dropdown>
                      <DropdownTrigger>
                        <Button 
                          endContent={<Icon icon="lucide:chevron-down" className="text-small" />} 
                          variant="flat"
                          size="sm"
                        >
                          Sort by
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu aria-label="Sort options">
                        <DropdownItem key="newest">Lo mas Nuevo</DropdownItem>
                        <DropdownItem key="price-asc">Precio: Bajo a mas Alto</DropdownItem>
                        <DropdownItem key="price-desc">Precio: Alto a mas Bajo</DropdownItem>
                        <DropdownItem key="popular">Mas Popular</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </div>
                
                <ProductGrid searchQuery={searchQuery} />
              </div>
            </div>
          </>
        )}
      </main>

      {/* Chat Bot */}
      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      
      {/* Chat Bot Trigger Button */}
      <Button
        isIconOnly
        className="fixed bottom-6 right-6 z-50 shadow-lg"
        size="lg"
        color="primary"
        radius="full"
        onPress={() => setIsChatOpen(true)}
      >
        <Icon icon={isChatOpen ? "lucide:x" : "lucide:message-circle"} className="text-xl" />
      </Button>

      <footer className="bg-content1 border-t border-divider py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Boticario</h3>
              <p className="text-default-500 text-sm">Productos de botica artesanales para el bienestar y la curación desde 2025.</p>
              <div className="flex gap-4 mt-4">
                <Button isIconOnly variant="flat" size="sm" aria-label="Instagram">
                  <Icon icon="lucide:instagram" />
                </Button>
                <Button isIconOnly variant="flat" size="sm" aria-label="Facebook">
                  <Icon icon="lucide:facebook" />
                </Button>
                <Button isIconOnly variant="flat" size="sm" aria-label="Twitter">
                  <Icon icon="lucide:twitter" />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Tienda</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" color="foreground">Todos los Productos</Link></li>
                <li><Link href="#" color="foreground">Nuevos Productos</Link></li>
                <li><Link href="#" color="foreground">Los mas vendidos</Link></li>
                <li><Link href="#" color="foreground">Ofertas</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Ayuda</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" color="foreground">Envios y Devoluciones</Link></li>
                <li><Link href="#" color="foreground">FAQ</Link></li>
                <li><Link href="#" color="foreground">Contactanos</Link></li>
                <li><Link href="#" color="foreground">Politica de Privacidad</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-default-500 text-sm mb-4">Suscribete para estar atento a lo ultimo y a nuestras ofertas.</p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Your email" 
                  size="sm"
                  classNames={{
                    inputWrapper: "bg-default-100"
                  }}
                />
                <Button color="primary" size="sm">Suscribete</Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-divider mt-10 pt-6 text-center text-default-500 text-sm">
            © {new Date().getFullYear()} By Paola Romero.
          </div>
        </div>
      </footer>
    </div>
  );
}