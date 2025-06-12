export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  discount: number;
  tags: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Botanitas",
    category: "Essential Oils",
    price: 18000,
    image: "/src/img/3.jpg",
    rating: 4.8,
    reviewCount: 124,
    isNew: false,
    discount: 0,
    tags: ["organic", "vegan"]
  },
  {
    id: "2",
    name: "Botanitas Multivitaminico",
    category: "Tinctures",
    price: 24099,
    originalPrice: 29.99,
    image: "/src/img/4.jpg",
    rating: 4.7,
    reviewCount: 89,
    isNew: false,
    discount: 15,
    tags: ["organic", "vegan", "handmade"]
  },
  {
    id: "3",
    name: "Botanitas y Citrato de Magnecio",
    category: "Bath & Body",
    price: 12099,
    image: "/src/img/5.jpg",
    rating: 4.5,
    reviewCount: 56,
    isNew: true,
    discount: 0,
    tags: ["organic", "vegan", "handmade"]
  },
  {
    id: "4",
    name: "Botanitas Canela",
    category: "Aromatherapy",
    price: 32099,
    image: "/src/img/6.jpg",
    rating: 4.9,
    reviewCount: 203,
    isNew: false,
    discount: 0,
    tags: ["cruelty-free"]
  },
  {
    id: "5",
    name: "Botanitas Citrato de Magnesio",
    category: "Herbal Teas",
    price: 14099,
    originalPrice: 19.99,
    image: "src/img/7.jpg",
    rating: 4.6,
    reviewCount: 78,
    isNew: false,
    discount: 25,
    tags: ["organic", "vegan"]
  },
  {
    id: "6",
    name: "TotusMiel",
    category: "Salves",
    price: 16099,
    image: "src/img/8.jpg",
    rating: 4.7,
    reviewCount: 42,
    isNew: false,
    discount: 0,
    tags: ["organic", "handmade"]
  },
  {
    id: "7",
    name: "Ortiga",
    category: "Bath & Body",
    price: 22099,
    image: "/src/img/9.jpg",
    rating: 4.4,
    reviewCount: 36,
    isNew: true,
    discount: 0,
    tags: ["organic", "vegan", "handmade"]
  },
  {
    id: "8",
    name: "FitoBronk",
    category: "Essential Oils",
    price: 15099,
    originalPrice: 19099,
    image: "/src/img/10.jpg",
    rating: 4.8,
    reviewCount: 112,
    isNew: false,
    discount: 20,
    tags: ["organic", "vegan"]
  },
  {
    id: "9",
    name: "Letodron",
    category: "Aromatherapy",
    price: 45099,
    image: "/src/img/11.jpg",
    rating: 4.9,
    reviewCount: 87,
    isNew: true,
    discount: 0,
    tags: ["cruelty-free"]
  },
  {
    id: "10",
    name: "Extracto de Valeriana",
    category: "Herbal Teas",
    price: 12099,
    image: "/src/img/12.jpg",
    rating: 4.5,
    reviewCount: 64,
    isNew: false,
    discount: 0,
    tags: ["organic", "vegan"]
  },
  {
    id: "11",
    name: "Calendula",
    category: "Salves",
    price: 18099,
    originalPrice: 22099,
    image: "/src/img/13.jpg",
    rating: 4.7,
    reviewCount: 53,
    isNew: false,
    discount: 15,
    tags: ["organic", "handmade"]
  },
  {
    id: "12",
    name: "Totumo",
    category: "Tinctures",
    price: 26099,
    image: "/src/img/14.jpg",
    rating: 4.6,
    reviewCount: 41,
    isNew: false,
    discount: 0,
    tags: ["organic", "vegan", "handmade"]
  },
  {
    id: "13",
    name: "Zarcynat",
    category: "Bath & Body",
    price: 19099,
    image: "/src/img/15.jpg",
    rating: 4.8,
    reviewCount: 29,
    isNew: true,
    discount: 0,
    tags: ["organic", "vegan", "handmade"]
  },
  // {
  //   id: "14",
  //   name: "Quanta",
  //   category: "Essential Oils",
  //   price: 28.99,
  //   originalPrice: 34.99,
  //   image: "/src/img/16.jpg",
  //   rating: 4.9,
  //   reviewCount: 76,
  //   isNew: false,
  //   discount: 15,
  //   tags: ["organic", "vegan"]
  // },
  // {
  //   id: "15",
  //   name: "Sleep Well Pillow Mist",
  //   category: "Aromatherapy",
  //   price: 16.99,
  //   image: "https://img.heroui.chat/image/food?w=600&h=600&u=15",
  //   rating: 4.7,
  //   reviewCount: 58,
  //   isNew: false,
  //   discount: 0,
  //   tags: ["organic", "cruelty-free"]
  // },
  // {
  //   id: "16",
  //   name: "Digestive Support Tea",
  //   category: "Herbal Teas",
  //   price: 13.99,
  //   image: "https://img.heroui.chat/image/food?w=600&h=600&u=16",
  //   rating: 4.5,
  //   reviewCount: 47,
  //   isNew: false,
  //   discount: 0,
  //   tags: ["organic", "vegan"]
  // },
  // {
  //   id: "17",
  //   name: "Beeswax Lip Balm Set",
  //   category: "Bath & Body",
  //   price: 9.99,
  //   originalPrice: 12.99,
  //   image: "https://img.heroui.chat/image/food?w=600&h=600&u=17",
  //   rating: 4.6,
  //   reviewCount: 83,
  //   isNew: false,
  //   discount: 20,
  //   tags: ["organic", "handmade"]
  // },
  // {
  //   id: "18",
  //   name: "Anxiety Relief Tincture",
  //   category: "Tinctures",
  //   price: 29.99,
  //   image: "https://img.heroui.chat/image/food?w=600&h=600&u=18",
  //   rating: 4.8,
  //   reviewCount: 62,
  //   isNew: true,
  //   discount: 0,
  //   tags: ["organic", "vegan", "handmade"]
  // }
];
