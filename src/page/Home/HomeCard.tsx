import { ItemCard } from "@/components/shared/ItemCard";
import { SectionHeader } from "@/components/shared/SectionHeader";


interface HomeCardProps {
  items: Item[];
  title: string;
  viewAllLink?: string;
  showAll?: boolean;
}

const HomeCard = ({ items, title, viewAllLink, showAll = false }: HomeCardProps) => {
  const displayItems = showAll ? items : items.slice(0, 5);

  return (
    <div className="py-6 px-4">
      <SectionHeader title={title} viewAllLink={viewAllLink} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {displayItems.map((item, index) => (
          <ItemCard
            key={item.id}
            item={item}
            index={index}
            linkPrefix={title.toLowerCase()}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeCard;