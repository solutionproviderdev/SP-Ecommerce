
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

interface CategoryDetailProps {
  categories: CategoryItem[];
}

interface CategoryItem {
  id: number;
  title: string;
  image: string;
  description?: string;
  parentId?: number;
  subcategories?: CategoryItem[];
}

// Utility function for finding a category by ID

const CategoryDetail: React.FC<CategoryDetailProps> = ({ categories }) => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const currentCategoryId = parseInt(categoryId || '0');

  console.log('currentCategoryId:', currentCategoryId,'categories',categories);
  const findCategoryById = (categories: CategoryItem[], id: number): CategoryItem | undefined => {
    for (const category of categories) {
      if (category.id == id) {
        return category;
      }
      if (category.subcategories) {
        const found = findCategoryById(category.subcategories, id);
        if (found) {
          return found;
        }
      }
    }
    return undefined;
  };

  // Log to confirm routing params and data structure

  // Use the recursive function to find the current category
  const currentCategory = findCategoryById(categories, currentCategoryId);

  // Handle fallback for missing categories
  if (!currentCategory) {
    return <div className="text-6xl bg-red-600">Category not found</div>;
  }

  // Function to handle navigation to subcategories
  const handleCategoryClick = (subcategory: CategoryItem) => {
    navigate(`/category/${subcategory.id}`);
  };

  return (
    <div className="p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">{currentCategory.title}</h1>
        {currentCategory.description && (
          <p className="text-gray-600">{currentCategory.description}</p>
        )}
      </div>

      {currentCategory.subcategories && currentCategory.subcategories.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentCategory.subcategories.map((subcategory) => (
            <Card 
              key={subcategory.id}
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
                  <p className="text-sm text-gray-600 mt-2">
                    {subcategory.description}
                  </p>
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






// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { CategoryItem } from '@/types'; // Ensure this is defined or import the correct type
// import { nestedcategories } from '@/data/nestedcategories';
// import Breadcrumb from '../Home/Breadcrumb';

// const CategoryDetail: React.FC<{ categories: CategoryItem[] }> = ({ categories }) => {
//   const { slug, '*': restPath } = useParams<{ slug: string; '*': string }>();
//   const navigate = useNavigate();

//   // Split the rest of the path to navigate deeper levels
//   const pathSegments = restPath ? restPath.split('/') : [];

//   const findCategoryBySlugPath = (categories: CategoryItem[], segments: string[]): CategoryItem | undefined => {
//     if (segments.length === 0) return undefined;
//     const [currentSlug, ...remainingSegments] = segments;

//     for (const category of categories) {
//       if (category.slug === currentSlug) {
//         if (remainingSegments.length === 0) {
//           return category;
//         }
//         if (category.subcategories) {
//           return findCategoryBySlugPath(category.subcategories, remainingSegments);
//         }
//       }
//     }
//     return undefined;
//   };

//   const currentCategory = findCategoryBySlugPath(categories, [slug, ...pathSegments]);

//   if (!currentCategory) {
//     return <div>Category not found</div>;
//   }

//   return (
//     <div className="p-4">
//             <Breadcrumb />
//       <h1 className="text-2xl font-bold mb-2">{currentCategory.title}</h1>
//       <p className="text-gray-600">{currentCategory.description}</p>
//       {/* Render subcategories or products */}
//       {currentCategory.subcategories && currentCategory.subcategories.length > 0 ? (
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {currentCategory.subcategories.map((subcategory) => (
//             <div key={subcategory.slug} onClick={() => navigate(`/category/${slug}/${subcategory.slug}`)}>
//               <h3>{subcategory.title}</h3>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div>No further items available</div>
//       )}
//     </div>
//   );
// };

// export default CategoryDetail;
