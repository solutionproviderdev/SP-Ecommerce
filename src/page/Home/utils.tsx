export interface Item {
    id: number;
    title: string;
    image: string;
    description?: string;
    price?: string;
  }
  
  // src/constants/data.ts
  import sampleImage from "@/assets/banner/banner1.jpg";
  import sampleImage2 from "@/assets/banner/banner2.jpg";
   
  export const CATEGORIES: Item[] = [
    { id: 1, title: "Full Interior", image: sampleImage },
    { id: 2, title: "Room wise", image: sampleImage },
    { id: 3, title: "Decor Item", image: sampleImage },
    { id: 4, title: "Package wise", image: sampleImage },
    { id: 5, title: "Left Lobby", image: sampleImage },
    { id: 6, title: "Family Living", image: sampleImage },
    { id: 7, title: "Dining Area", image: sampleImage },
    { id: 8, title: "Store Room", image: sampleImage },
    { id: 9, title: "Kitchen", image: sampleImage },
    { id: 10, title: "Formal Living", image: sampleImage },
  ];
  
  export const PRODUCTS: Item[] = [
    { id: 1, title: "Full Interior", image: sampleImage2, description: "750-1650" },
    { id: 2, title: "Room wise", image: sampleImage2, description: "1750-3350" },
    { id: 3, title: "Decor Item", image: sampleImage2, description: "750-1650" },
    { id: 4, title: "Package wise", image: sampleImage2, description: "750-1650" },
    { id: 5, title: "Left Lobby", image: sampleImage2, description: "1750-1650" },
    { id: 6, title: "Family Living", image: sampleImage2, description: "1260-1650" },
    { id: 7, title: "Dining Area", image: sampleImage2, description: "750-1650" },
    { id: 8, title: "Store Room", image: sampleImage2, description: "750-1650" },
    { id: 9, title: "Kitchen", image: sampleImage2, description: "750-1650" },
    { id: 10, title: "Formal Living", image: sampleImage2, description: "750-1650" },
  ];
  


  


// 1. First, let's define our types (types.ts)
export interface CategoryItem {
  id: number;
  title: string;
  slug: string;
  image: string;
  description?: string;
  subcategories?: CategoryItem[];
}


// 2. Create the sample data (data/categories.ts)

export const nestedCategories = [
  {
    id: 1,
    slug: "furniture",
    title: "Furniture",
    type: "category",
    image: "/images/furniture.jpg",
    description: "A range of furniture items for your home.",
    subcategories: [
      {
        id: 11,
        slug: "living-room",
        title: "Living Room",
        type: "subcategory",
        image: "/images/living-room.jpg",
        description: "Furniture for the living room.",
        subcategories: [
          {
            id: 111,
            slug: "sofas",
            title: "Sofas",
            type: "brand",
            image: "/images/sofa.jpg",
            description: "Comfortable sofas for your living room.",
            subcategories: [
              {
                id: 1111,
                slug: "premium-sofa",
                title: "Premium Sofa",
                type: "product",
                image: "/images/premium-sofa.jpg",
                description: "Luxurious and comfortable premium sofa.",
              },
              {
                id: 1112,
                slug: "budget-sofa",
                title: "Budget Sofa",
                type: "product",
                image: "/images/budget-sofa.jpg",
                description: "Affordable yet comfortable sofa.",
              },
            ],
          },
          {
            id: 112,
            slug: "coffee-tables",
            title: "Coffee Tables",
            type: "brand",
            image: "/images/coffee-table.jpg",
            description: "Stylish coffee tables.",
            subcategories: [
              {
                id: 1121,
                slug: "modern-coffee-table",
                title: "Modern Coffee Table",
                type: "product",
                image: "/images/modern-coffee-table.jpg",
                description: "A modern and stylish coffee table.",
              },
              {
                id: 1122,
                slug: "classic-coffee-table",
                title: "Classic Coffee Table",
                type: "product",
                image: "/images/classic-coffee-table.jpg",
                description: "A timeless coffee table design.",
              },
            ],
          },
        ],
      },
      {
        id: 12,
        slug: "bedroom",
        title: "Bedroom",
        type: "subcategory",
        image: "/images/bedroom.jpg",
        description: "Furniture for your bedroom.",
        subcategories: [
          {
            id: 121,
            slug: "beds",
            title: "Beds",
            type: "brand",
            image: "/images/bed.jpg",
            description: "Comfortable beds for a restful sleep.",
            subcategories: [
              {
                id: 1211,
                slug: "king-bed",
                title: "King Bed",
                type: "product",
                image: "/images/king-bed.jpg",
                description: "Spacious king-sized bed.",
              },
              {
                id: 1212,
                slug: "queen-bed",
                title: "Queen Bed",
                type: "product",
                image: "/images/queen-bed.jpg",
                description: "Comfortable queen-sized bed.",
              },
            ],
          },
          {
            id: 122,
            slug: "wardrobes",
            title: "Wardrobes",
            type: "brand",
            image: "/images/wardrobe.jpg",
            description: "Spacious wardrobes for your clothes.",
            subcategories: [
              {
                id: 1221,
                slug: "wooden-wardrobe",
                title: "Wooden Wardrobe",
                type: "product",
                image: "/images/wooden-wardrobe.jpg",
                description: "Elegant wooden wardrobe.",
              },
              {
                id: 1222,
                slug: "modern-wardrobe",
                title: "Modern Wardrobe",
                type: "product",
                image: "/images/modern-wardrobe.jpg",
                description: "Stylish modern wardrobe.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "electronics",
    title: "Electronics",
    type: "category",
    image: "/images/electronics.jpg",
    description: "Latest electronic devices and gadgets.",
    subcategories: [
      {
        id: 21,
        slug: "smartphones",
        title: "Smartphones",
        type: "subcategory",
        image: "/images/smartphone.jpg",
        description: "A variety of smartphones from top brands.",
        subcategories: [
          {
            id: 211,
            slug: "brand-apple",
            title: "Apple",
            type: "brand",
            image: "/images/apple.jpg",
            description: "Apple smartphones.",
            subcategories: [
              {
                id: 2111,
                slug: "iphone-13",
                title: "iPhone 13",
                type: "product",
                image: "/images/iphone-13.jpg",
                description: "Latest iPhone 13 with A15 chip.",
              },
              {
                id: 2112,
                slug: "iphone-12",
                title: "iPhone 12",
                type: "product",
                image: "/images/iphone-12.jpg",
                description: "iPhone 12 with great performance.",
              },
            ],
          },
          {
            id: 212,
            slug: "brand-samsung",
            title: "Samsung",
            type: "brand",
            image: "/images/samsung.jpg",
            description: "Samsung smartphones.",
            subcategories: [
              {
                id: 2121,
                slug: "galaxy-s21",
                title: "Galaxy S21",
                type: "product",
                image: "/images/galaxy-s21.jpg",
                description: "Latest Galaxy S21 with high performance.",
              },
              {
                id: 2122,
                slug: "galaxy-note20",
                title: "Galaxy Note 20",
                type: "product",
                image: "/images/galaxy-note20.jpg",
                description: "Powerful Galaxy Note 20 for professionals.",
              },
            ],
          },
        ],
      },
      {
        id: 22,
        slug: "laptops",
        title: "Laptops",
        type: "subcategory",
        image: "/images/laptop.jpg",
        description: "A wide range of laptops.",
        subcategories: [
          {
            id: 221,
            slug: "brand-dell",
            title: "Dell",
            type: "brand",
            image: "/images/dell.jpg",
            description: "Dell laptops for all purposes.",
            subcategories: [
              {
                id: 2211,
                slug: "dell-inspiron",
                title: "Dell Inspiron",
                type: "product",
                image: "/images/dell-inspiron.jpg",
                description: "Affordable Dell Inspiron series.",
              },
              {
                id: 2212,
                slug: "dell-xps",
                title: "Dell XPS",
                type: "product",
                image: "/images/dell-xps.jpg",
                description: "Premium Dell XPS series.",
              },
            ],
          },
          {
            id: 222,
            slug: "brand-hp",
            title: "HP",
            type: "brand",
            image: "/images/hp.jpg",
            description: "HP laptops for professionals.",
            subcategories: [
              {
                id: 2221,
                slug: "hp-envy",
                title: "HP Envy",
                type: "product",
                image: "/images/hp-envy.jpg",
                description: "High-performance HP Envy series.",
              },
              {
                id: 2222,
                slug: "hp-spectre",
                title: "HP Spectre",
                type: "product",
                image: "/images/hp-spectre.jpg",
                description: "Stylish HP Spectre series.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "kitchen-appliances",
    title: "Kitchen Appliances",
    type: "category",
    image: "/images/kitchen-appliances.jpg",
    description: "Essential appliances for your kitchen.",
    subcategories: [
      {
        id: 31,
        slug: "blenders",
        title: "Blenders",
        type: "subcategory",
        image: "/images/blender.jpg",
        description: "Various types of blenders.",
        subcategories: [
          {
            id: 311,
            slug: "brand-a",
            title: "Brand A",
            type: "brand",
            image: "/images/brand-a.jpg",
            description: "Premium quality blenders.",
            subcategories: [
              {
                id: 3111,
                slug: "model-x",
                title: "Model X",
                type: "product",
                image: "/images/model-x.jpg",
                description: "High-performance blender Model X.",
              },
              {
                id: 3112,
                slug: "model-y",
                title: "Model Y",
                type: "product",
                image: "/images/model-y.jpg",
                description: "Budget-friendly blender Model Y.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    slug: "garden-supplies",
    title: "Garden Supplies",
    type: "category",
    image: "/images/garden-supplies.jpg",
    description: "Everything for your gardening needs.",
    subcategories: [
      {
        id: 41,
        slug: "plants",
        title: "Plants",
        type: "subcategory",
        image: "/images/plants.jpg",
        description: "Variety of plants for your garden.",
        subcategories: [
          {
            id: 411,
            slug: "indoor-plants",
            title: "Indoor Plants",
            type: "brand",
            image: "/images/indoor-plants.jpg",
            description: "Perfect plants for indoor spaces.",
            subcategories: [
              {
                id: 4111,
                slug: "snake-plant",
                title: "Snake Plant",
                type: "product",
                image: "/images/snake-plant.jpg",
                description: "Low-maintenance indoor plant.",
              },
            ],
          },
        ],
      },
    ],
  },
];
