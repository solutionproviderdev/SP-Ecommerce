


import {  useNavigate, useLocation } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

interface CategoryDetailProps {
  categories: CategoryItem[];
}

interface CategoryItem {
  id: number;
  slug: string;
  title: string;
  image: string;
  description?: string;
  subcategories?: CategoryItem[];
}

const CategoryDetail: React.FC<CategoryDetailProps> = ({ categories }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Split the pathname to get each level of slugs
  const slugs = location.pathname.split('/').filter((segment) => segment);
  // Recursive function to find category by slugs array
  const findCategoryBySlugs = (categories: CategoryItem[], slugs: string[]): CategoryItem | undefined => {
    let currentCategories = categories;
    let currentCategory;
    
    for (const slug of slugs) {
      currentCategory = currentCategories.find((category) => category.slug === slug);
      if (!currentCategory) return undefined;
      currentCategories = currentCategory.subcategories || [];
    }
    
    return currentCategory;
  };
  
  // Find the current category based on the slugs path
  const currentCategory = findCategoryBySlugs(categories, slugs.slice(1)); // Skip "category" in path
  console.log('------------>',currentCategory)

  if (!currentCategory) {
    return <div className="text-6xl bg-red-600">Category not found</div>;
  }

  const handleCategoryClick = (subcategory: CategoryItem) => {
    navigate(`/category/${[...slugs.slice(1), subcategory.slug].join('/')}`);
  };

  return (
    <div className="p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">{currentCategory.title}</h1>
        {currentCategory.description && <p className="text-gray-600">{currentCategory.description}</p>}
      </div>

      {currentCategory.subcategories && currentCategory.subcategories.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentCategory.subcategories.map((subcategory) => (
            <Card 
              key={subcategory.slug}
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleCategoryClick(subcategory)}
            >
              <CardHeader className="p-4">
                {subcategory.image && (
                  <img 
                    src={subcategory.image} 
                    alt={subcategory.title}
                    className="w-full h-48 object-cover rounded-t"
                  />
                )}
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">{subcategory.title}</h3>
                {subcategory.description && (
                  <p className="text-sm text-gray-600 mt-2">{subcategory.description}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-gray-600">No subcategories available</div>
      )}
    </div>
  );
};

export default CategoryDetail;
