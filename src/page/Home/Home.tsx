// import Slider from "./Slider";
// import Product from "./Product";
// import HomeCard from "./HomeCard";
// import sampleImage from "../../assets/banner/banner1.jpg";
// import sampleImage2 from "../../assets/banner/banner2.jpg";
// import { ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useState } from "react";


// const Home = () => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   const items = [
//     { id: 1, title: "Full Interior", image: sampleImage },
//     { id: 2, title: "Room wise", image: sampleImage },
//     { id: 3, title: "Decor Item", image: sampleImage },
//     { id: 4, title: "Package wise", image: sampleImage },
//     { id: 5, title: "Left Lobby", image: sampleImage },
//   ];
//   const items2 = [
//     { id: 1, title: "Full Interior", image: sampleImage2 },
//     { id: 2, title: "Room wise", image: sampleImage2 },
//     { id: 3, title: "Decor Item", image: sampleImage2 },
//     { id: 4, title: "Package wise", image: sampleImage2 },
//     { id: 5, title: "Left Lobby", image: sampleImage2 },
//   ];

//   return (
//     <div className="p-2">
//       <Slider />
//       <div className="py-6 px-4">
//         <div className="flex justify-between p-2">
//           <div className="text-xl">Category </div>
//           <Link to="/category">
//             <div className="text-blue-400 flex items-center">
//               view all <ArrowRight size={16} strokeWidth={1.25} />
//             </div>
//           </Link>
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//           {items.map((item, index) => (
//             <Link
//               to={`category/${item.index}`}
//               key={index}
//               className={`relative bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group ${
//                 hoveredIndex === index ? "bg-blue-50" : "bg-white"
//               }`}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               <div
//                 className={`z-50 absolute inset-0 bg-blue-300 bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
//                   hoveredIndex === index ? "opacity-100" : "opacity-0"
//                 }`}
//               >
//                 <span
//                   className={`text-blue-600 text-lg font-semibold transform ${
//                     hoveredIndex === index ? "scale-100" : "scale-0"
//                   } transition-transform duration-300 ease-out`}
//                 >
//                   Click Here
//                 </span>
//               </div>
//               {item?.image && (
//                 <img
//                   src={item.image}
//                   alt={item?.title || "Image"}
//                   className="w-full h-28 object-cover transform group-hover:scale-105 transition-transform duration-300"
//                 />
//               )}
//               <div className="p-2 text-center">
//                 {item?.title && (
//                   <h3 className="text-lg text-gray-800 font-medium">
//                     {item?.title}
//                   </h3>
//                 )}
//                 {item?.description && (
//                   <p className="text-sm text-gray-500 mt-1">
//                     {item?.description}
//                   </p>
//                 )}
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>

//       <div className="py-6 px-4">
//         <div className="flex justify-between p-2">
//           <div className="text-xl">Product </div>
//           <Link to="/product">
//             <div className="text-blue-400 flex items-center">
//               view all <ArrowRight size={16} strokeWidth={1.25} />
//             </div>
//           </Link>
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//           {items2.map((item2, index) => (
//             <Link
//               to={`category/${item2.index}`}
//               key={index}
//               className={`relative bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group ${
//                 hoveredIndex === index ? "bg-blue-50" : "bg-white"
//               }`}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               <div
//                 className={`z-50 absolute inset-0 bg-blue-300 bg-opacity-50 flex item2s-center justify-center transition-opacity duration-300 ${
//                   hoveredIndex === index ? "opacity-100" : "opacity-0"
//                 }`}
//               >
//                 <span
//                   className={`text-blue-600 text-lg font-semibold transform ${
//                     hoveredIndex === index ? "scale-100" : "scale-0"
//                   } transition-transform duration-300 ease-out`}
//                 >
//                   Click Here
//                 </span>
//               </div>
//               {item2?.image && (
//                 <img
//                   src={item2.image}
//                   alt={item2?.title || "Image"}
//                   className="w-full h-28 object-cover transform group-hover:scale-105 transition-transform duration-300"
//                 />
//               )}
//               <div className="p-2 text-center">
//                 {item2?.title && (
//                   <h3 className="text-lg text-gray-800 font-medium">
//                     {item2?.title}
//                   </h3>
//                 )}
//                 {item2?.description && (
//                   <p className="text-sm text-gray-500 mt-1">
//                     {item2?.description}
//                   </p>
//                 )}
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;




import Slider from "./Slider";
import HomeCard from "./HomeCard";
import sampleImage from "../../assets/banner/banner1.jpg";
import sampleImage2 from "../../assets/banner/banner2.jpg";

const Home = () => {
  const categories = [
    { id: 1, title: "Full Interior", image: sampleImage },
    { id: 2, title: "Room wise", image: sampleImage },
    { id: 3, title: "Decor Item", image: sampleImage },
    { id: 4, title: "Package wise", image: sampleImage },
    { id: 5, title: "Left Lobby", image: sampleImage },
  ];

  const products = [
    { id: 1, title: "Full Interior", image: sampleImage2, description: "750-1650" },
    { id: 2, title: "Room wise", image: sampleImage2, description: "1750-3350" },
    { id: 3, title: "Decor Item", image: sampleImage2, description: "750-1650" },
    { id: 4, title: "Package wise", image: sampleImage2, description: "750-1650" },
    { id: 5, title: "Left Lobby", image: sampleImage2, description: "1750-1650" },
  ];

  return (
    <div className="p-2">
      <Slider />
      <HomeCard
        title="Category"
        // items={categories}
        items={categories}
        viewAllLink="/category"
      />
      <HomeCard
        title="Product"
        // items={products}
        items={products}
        viewAllLink="/product"
      />
    </div>
  );
};

export default Home;