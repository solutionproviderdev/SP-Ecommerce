
import React from "react";
import sampleImage from "../../assets/banner/banner2.jpg";
import HomeCard from "@/page/Home/HomeCard";

const Product = () => {
  const items = [
    { id: 1, title: "Full Interior", image: sampleImage, description: "750-1650" },
    { id: 2, title: "Room wise", image: sampleImage, description: "1750-3350" },
    { id: 3, title: "Decor Item", image: sampleImage, description: "750-1650" },
    { id: 4, title: "Package wise", image: sampleImage, description: "750-1650" },
    { id: 5, title: "Left Lobby", image: sampleImage, description: "1750-1650" },
    { id: 6, title: "Family Living", image: sampleImage, description: "1260-1650" },
    { id: 7, title: "Dining Area", image: sampleImage, description: "750-1650" },
    { id: 8, title: "Store Room", image: sampleImage, description: "750-1650" },
    { id: 9, title: "Kitchen", image: sampleImage, description: "750-1650" },
    { id: 10, title: "Formal Living", image: sampleImage, description: "750-1650" },
  ];

  // View All button handler
  const handleViewAll = () => {
    console.log("View All clicked");
  };

  return (
    <HomeCard
      title='Products'
      items={items}
      onViewAll={handleViewAll}
    />
  );
};

export default Product;
