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
  


  // Sample data structure (data/categories.ts)
// export const nestedcategories = [
//     {
//       id: 1,
//       title: "Board",
//       image: "/images/board.jpg",
//       description: "Various types of boards",
//       subcategories: [
//         {
//           id: 11,
//           title: "Wood-Chip",
//           image: "/images/woodchip.jpg",
//           description: "Wood chip boards",
//           parentId: 1,
//           subcategories: [
//             {
//               id: 111,
//               title: "Imported",
//               image: "/images/imported.jpg",
//               description: "Imported wood chip boards",
//               parentId: 11,
//               subcategories: [
//                 {
//                   id: 1111,
//                   title: "Brand A",
//                   image: "/images/branda.jpg",
//                   description: "Premium imported boards",
//                   parentId: 111
//                 },
//                 {
//                   id: 1112,
//                   title: "Brand B",
//                   image: "/images/brandb.jpg",
//                   description: "Standard imported boards",
//                   parentId: 111
//                 }
//               ]
//             },
//             {
//               id: 112,
//               title: "Local",
//               image: "/images/local.jpg",
//               description: "Locally manufactured wood chip boards",
//               parentId: 11
//             }
//           ]
//         },
//         {
//           id: 12,
//           title: "MDF",
//           image: "/images/mdf.jpg",
//           description: "Medium-density fiberboard",
//           parentId: 1
//         }
//       ]
//     }
//   ];



export const nestedcategories: CategoryItem[] = [
    {
      id: 1,
      slug: "board",
      title: "Board",
      type: "category",
      image: "/images/board.jpg",
      description: "Various types of boards",
      subcategories: [
        {
          id: 11,
          slug: "wood-chip",
          title: "Wood-Chip",
          type: "subcategory",
          image: "/images/woodchip.jpg",
          description: "Wood chip boards",
          subcategories: [
            {
              id: 111,
              slug: "brand-a",
              title: "Brand A",
              type: "brand",
              image: "/images/branda.jpg",
              description: "Premium imported boards",
              subcategories: [
                {
                  id: 1111,
                  slug: "product-1",
                  title: "Product 1",
                  type: "product",
                  image: "/images/product1.jpg",
                  description: "High-quality wood chip board from Brand A",
                },
                {
                  id: 1112,
                  slug: "product-2",
                  title: "Product 2",
                  type: "product",
                  image: "/images/product2.jpg",
                  description: "Affordable wood chip board from Brand A",
                }
              ]
            },
            {
              id: 112,
              slug: "brand-b",
              title: "Brand B",
              type: "brand",
              image: "/images/brandb.jpg",
              description: "Standard imported boards",
              subcategories: [
                {
                  id: 1121,
                  slug: "product-3",
                  title: "Product 3",
                  type: "product",
                  image: "/images/product3.jpg",
                  description: "Standard wood chip board from Brand B",
                },
                {
                  id: 1122,
                  slug: "product-4",
                  title: "Product 4",
                  type: "product",
                  image: "/images/product4.jpg",
                  description: "Eco-friendly wood chip board from Brand B",
                }
              ]
            }
          ]
        },
        {
          id: 12,
          slug: "mdf",
          title: "MDF",
          type: "subcategory",
          image: "/images/mdf.jpg",
          description: "Medium-density fiberboard",
          subcategories: [
            {
              id: 121,
              slug: "brand-c",
              title: "Brand C",
              type: "brand",
              image: "/images/brandc.jpg",
              description: "High-quality MDF boards",
              subcategories: [
                {
                  id: 1211,
                  slug: "product-5",
                  title: "Product 5",
                  type: "product",
                  image: "/images/product5.jpg",
                  description: "Premium MDF board from Brand C",
                },
                {
                  id: 1212,
                  slug: "product-6",
                  title: "Product 6",
                  type: "product",
                  image: "/images/product6.jpg",
                  description: "Budget-friendly MDF board from Brand C",
                }
              ]
            },
            {
              id: 122,
              slug: "brand-d",
              title: "Brand D",
              type: "brand",
              image: "/images/brandd.jpg",
              description: "Reliable MDF boards",
              subcategories: [
                {
                  id: 1221,
                  slug: "product-7",
                  title: "Product 7",
                  type: "product",
                  image: "/images/product7.jpg",
                  description: "Versatile MDF board from Brand D",
                },
                {
                  id: 1222,
                  slug: "product-8",
                  title: "Product 8",
                  type: "product",
                  image: "/images/product8.jpg",
                  description: "Compact MDF board from Brand D",
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      slug: "furniture",
      title: "Furniture",
      type: "category",
      image: "/images/furniture.jpg",
      description: "Wide range of furniture items",
      subcategories: [
        {
          id: 21,
          slug: "living-room",
          title: "Living Room",
          type: "subcategory",
          image: "/images/livingroom.jpg",
          description: "Furniture for living rooms",
          subcategories: [
            {
              id: 211,
              slug: "brand-e",
              title: "Brand E",
              type: "brand",
              image: "/images/brande.jpg",
              description: "Luxury living room furniture",
              subcategories: [
                {
                  id: 2111,
                  slug: "product-9",
                  title: "Product 9",
                  type: "product",
                  image: "/images/product9.jpg",
                  description: "Sofa set by Brand E",
                },
                {
                  id: 2112,
                  slug: "product-10",
                  title: "Product 10",
                  type: "product",
                  image: "/images/product10.jpg",
                  description: "Coffee table by Brand E",
                }
              ]
            },
            {
              id: 212,
              slug: "brand-f",
              title: "Brand F",
              type: "brand",
              image: "/images/brandf.jpg",
              description: "Affordable living room furniture",
              subcategories: [
                {
                  id: 2121,
                  slug: "product-11",
                  title: "Product 11",
                  type: "product",
                  image: "/images/product11.jpg",
                  description: "Recliner by Brand F",
                },
                {
                  id: 2122,
                  slug: "product-12",
                  title: "Product 12",
                  type: "product",
                  image: "/images/product12.jpg",
                  description: "TV stand by Brand F",
                }
              ]
            }
          ]
        },
        {
          id: 22,
          slug: "bedroom",
          title: "Bedroom",
          type: "subcategory",
          image: "/images/bedroom.jpg",
          description: "Furniture for bedrooms",
          subcategories: [
            {
              id: 221,
              slug: "brand-g",
              title: "Brand G",
              type: "brand",
              image: "/images/brandg.jpg",
              description: "Elegant bedroom furniture",
              subcategories: [
                {
                  id: 2211,
                  slug: "product-13",
                  title: "Product 13",
                  type: "product",
                  image: "/images/product13.jpg",
                  description: "King-size bed by Brand G",
                },
                {
                  id: 2212,
                  slug: "product-14",
                  title: "Product 14",
                  type: "product",
                  image: "/images/product14.jpg",
                  description: "Wardrobe by Brand G",
                }
              ]
            }
          ]
        }
      ]
    }
  ];
  