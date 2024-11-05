import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  viewAllLink?: string;
}
export interface Item {
    id: number;
    title: string;
    image: string;
    description?: string;
    index?: number;
  }
export const SectionHeader = ({ title, viewAllLink }: SectionHeaderProps) => {
  return (
    <div className="flex justify-between p-2">
      <div className="text-xl font-semibold">{title}</div>
      {viewAllLink && (
        <Link to={viewAllLink}>
          <div className="text-blue-400 flex items-center hover:text-blue-500">
            view all <ArrowRight size={16} strokeWidth={1.25} />
          </div>
        </Link>
      )}
    </div>
  );
};