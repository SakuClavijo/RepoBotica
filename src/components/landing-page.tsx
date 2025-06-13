import React from "react";
import { Button, Card, CardBody, Image, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface LandingPageProps {
  onShopNow: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onShopNow }) => {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <motion.div 
            className="flex-1 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Medicinas naturales para <span className="text-primary">Gente moderna</span>
            </h1>
            <p className="text-default-600 text-lg max-w-lg">
              Descubre nuestro gran portafolio de productos 100% Naturales y locales
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                color="primary" 
                size="lg"
                onPress={onShopNow}
                endContent={<Icon icon="lucide:arrow-right" />}
              >
                Compra
              </Button>
              <Button 
                variant="bordered" 
                size="lg"
              >
                Ver más
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Icon icon="lucide:truck" className="text-primary text-xl" />
                <span className="text-sm">Envio Gratis</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="lucide:leaf" className="text-primary text-xl" />
                <span className="text-sm">100% Organico</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="lucide:shield-check" className="text-primary text-xl" />
                <span className="text-sm">Calidad Garantizada</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <Image
                alt="Apothecary hero"
                className="object-cover rounded-xl w-full max-w-xl mx-auto"
                src="/public/img/Boticalanding.jpeg"
              />
              <div className="absolute -bottom-6 -right-6 bg-content1 p-4 rounded-lg shadow-lg border border-divider hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="bg-success/10 p-2 rounded-full">
                    <Icon icon="lucide:badge-check" className="text-success text-xl" />
                  </div>
                  <div>
                    <p className="font-medium">Certified Organic</p>
                    <p className="text-xs text-default-500">All natural ingredients</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nuestra Categoria de productos</h2>
          <p className="text-default-600 max-w-2xl mx-auto">
            Explora nuestras categorías destacadas y encuentra el remedio perfecto para ti
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                isPressable
                onPress={onShopNow}
                className="overflow-hidden h-[280px] border border-divider"
              >
                <CardBody className="p-0 overflow-hidden">
                  <div className="relative h-full">
                    <Image
                      removeWrapper
                      alt={category.name}
                      className="w-full h-full object-cover"
                      src={category.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                      <div className="text-white">
                        <h3 className="text-xl font-semibold mb-1">{category.name}</h3>
                        <p className="text-white/80 text-sm mb-3">{category.description}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">Explore</span>
                          <Icon icon="lucide:arrow-right" className="text-sm" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section>
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Best Sellers</h2>
            <p className="text-default-600">Nuestras medicinas más Populares</p>
          </div>
          <Button 
            variant="light" 
            color="primary" 
            endContent={<Icon icon="lucide:arrow-right" />}
            onPress={onShopNow}
          >
            Ver todos los productos
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="border border-divider"
                isPressable
                shadow="sm"
              >
                <CardBody className="p-0 overflow-hidden">
                  <div className="relative group">
                    <Image
                      removeWrapper
                      alt={product.name}
                      className="w-full object-cover h-48 group-hover:scale-105 transition-transform duration-300"
                      src={product.image}
                    />
                    {product.badge && (
                      <div className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded-md">
                        {product.badge}
                      </div>
                    )}
                  </div>
                </CardBody>
                <CardBody className="text-center p-4">
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-default-500 text-sm">{product.category}</p>
                  <div className="flex justify-center items-center gap-2 mt-2">
                    <span className="font-semibold">${product.price.toFixed(2)}</span>
                    {product.originalPrice && (
                      <span className="text-default-400 text-sm line-through">${product.originalPrice.toFixed(2)}</span>
                    )}
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-content2 rounded-xl p-8 md:p-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Nuestro compromiso con la calidad</h2>
            <div className="space-y-6">
              <p className="text-default-600">
                En La Botica del Abuelo Ruseel creemos en el poder de la naturaleza para curar y nutrir. Nuestros productos se elaboran con esmero utilizando métodos tradicionales transmitidos de generación en generación.
              </p>
              <div className="space-y-4">
                {commitments.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full mt-1">
                      <Icon icon={item.icon} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-default-500 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button 
                color="primary" 
                variant="flat"
                onPress={onShopNow}
              >
                Aprende acerca de nuestros productos
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              alt="Apothecary process"
              className="rounded-xl w-full"
              src="/public/img/BOTICACAFE.jpg"
            />
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Lo que nuestros clientes dicen.</h2>
          <p className="text-default-600 max-w-2xl mx-auto">
            Descubra por qué la gente confía en nuestros remedios naturales para su viaje hacia el bienestar
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border border-divider h-full">
                <CardBody className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    {Array(5).fill(0).map((_, i) => (
                      <Icon 
                        key={i} 
                        icon="lucide:star" 
                        className="text-warning" 
                      />
                    ))}
                  </div>
                  <p className="text-default-600 mb-6">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <Image
                      alt={testimonial.name}
                      className="rounded-full w-12 h-12 object-cover"
                      src={testimonial.avatar}
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-default-500 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary text-white rounded-xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:max-w-md">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Entra en nuestra Comunidad</h2>
            <p className="mb-0">
Suscríbase a nuestro boletín para recibir ofertas exclusivas, consejos de bienestar y anuncios de nuevos productos.            </p>
          </div>
          <div className="w-full md:w-auto">
            <form className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md text-foreground w-full md:w-auto min-w-[240px] focus:outline-none"
              />
              <Button 
                color="default" 
                variant="solid"
              >
                Subscribete
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

// Data for the landing page
const categories = [
  {
    name: "Essential Oils",
    description: "Pure, therapeutic-grade oils for aromatherapy",
    image: "/public/img/17.jpg"
  },
  {
    name: "Herbal Teas",
    description: "Organic blends for wellness and relaxation",
    image: "/public/img/18.jpg"
  },
  {
    name: "Bath & Body",
    description: "Natural products for skin and self-care",
    image: "/public/img/19.jpg"
  },
  {
    name: "Teas",
    description: "Organic blends for wellness and relaxation",
    image: "/public/img/25.jpg"
  }

];

const bestSellers = [
  {
    id: "bs1",
    name: "Lavender Essential Oil",
    category: "Essential Oils",
    price: 18099,
    image: "/public/img/20.jpg",
    badge: "Best Seller"
  },
  {
    id: "bs2",
    name: "Chamomile Sleep Tincture",
    category: "Tinctures",
    price: 24099,
    originalPrice: 29099,
    image: "/public/img/21.jpg"
  },
  {
    id: "bs3",
    name: "Eucalyptus Bath Salts",
    category: "Bath & Body",
    price: 12099,
    image: "/public/img/22.jpg",
    badge: "New"
  },
  {
    id: "bs4",
    name: "Chamomile Sleep Tincture",
    category: "Tinctures",
    price: 24099,
    originalPrice: 29099,
    image: "/public/img/23.jpg"
  }
];

const commitments = [
  {
    icon: "lucide:leaf",
    title: "Ingredientes 100% orgánicos",
    description: "Sólo obtenemos hierbas y productos botánicos orgánicos de la más alta calidad."
  },
  {
    icon: "lucide:clock",
    title: "Métodos tradicionales",
    description: "Nuestros productos se elaboran con técnicas boticarias probadas a lo largo del tiempo."
  },
  {
    icon: "lucide:recycle",
    title: "Envases sostenibles",
    description: "Utilizamos materiales ecológicos para minimizar nuestro impacto medioambiental."
  },
  {
    icon: "lucide:heart",
    title: "Sin crueldad",
    description: "Ninguno de nuestros productos o ingredientes se prueba en animales."
  }
];

const testimonials = [
  {
    name: "Maria Rodriguez",
    location: "Portland, OR",
    avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=t1",
    text: "El aceite esencial de lavanda ha transformado por completo mi rutina de sueño. Me duermo más rápido y me despierto renovada."
  },
  {
    name: "James Wilson",
    location: "Austin, TX",
    avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=t2",
    text: "He probado muchos remedios naturales para mi ansiedad, pero la tintura de manzanilla de La Botica es, con diferencia, la más eficaz."
  },
  {
    name: "Sarah Johnson",
    location: "Seattle, WA",
    avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=t3",
    text: "La calidad de estos productos es excepcional. Realmente se nota que están hechos con mimo y con los mejores ingredientes."
  }
];