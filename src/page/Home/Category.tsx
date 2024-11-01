
import sampleImage from "../../assets/banner/banner1.jpg";
import HomeCard from "@/page/Home/HomeCard";

const Category = () => {
  const items = [
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

  // View All button handler
  const handleViewAll = () => {
    console.log("View All clicked");
  };

  return (
    <HomeCard
      title='Category'
      items={items}
      onViewAll={handleViewAll}
    />
  );
};

export default Category;
