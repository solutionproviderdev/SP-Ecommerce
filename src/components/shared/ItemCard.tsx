import { Item } from "@/page/Home/utils";
import { useState } from "react";
import { Link } from "react-router-dom";
 
interface ItemCardProps {
  item: Item;
  index: number;
  linkPrefix: string;
}

export const ItemCard = ({ item, index, linkPrefix }: ItemCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
console.log('subcategory route--->',item.id, linkPrefix)
  return (
    <Link
      to={`/${linkPrefix}/${item.id}`}
      className={`relative bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group ${
        isHovered ? "bg-blue-50" : "bg-white"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`z-50 absolute inset-0 bg-blue-300 bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <span
          className={`text-blue-600 text-lg font-semibold transform ${
            isHovered ? "scale-100" : "scale-0"
          } transition-transform duration-300 ease-out`}
        >
          Click Here
        </span>
      </div>
      {item.image && (
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-28 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      )}
      <div className="p-2 text-center">
        <h3 className="text-lg text-gray-800 font-medium">{item.title}</h3>
        {item.description && (
          <p className="text-sm text-gray-500 mt-1">{item.description}</p>
        )}
      </div>
    </Link>
  );
};
