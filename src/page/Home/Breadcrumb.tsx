// import React from 'react';
// import { Link, useParams } from 'react-router-dom';

// const Breadcrumb: React.FC = () => {
//   const { slug, '*': restPath } = useParams<{ slug: string; '*': string }>();
//   const pathSegments = restPath ? [slug, ...restPath.split('/')] : [slug];

//   return (
//     <nav className="mb-4">
//       <ul className="flex space-x-2">
//         {pathSegments.map((segment, index) => {
//           const path = pathSegments.slice(0, index + 1).join('/');
//           return (
//             <li key={segment}>
//               <Link to={`/category/${path}`} className="text-blue-500 hover:underline">
//                 {segment.replace(/-/g, ' ')} {/* Replace hyphens with spaces for better readability */}
//               </Link>
//               {index < pathSegments.length - 1 && <span>/</span>}
//             </li>
//           );
//         })}
//       </ul>
//     </nav>
//   );
// };

// export default Breadcrumb;







import { Link } from 'react-router-dom';

interface BreadcrumbProps {
  items: Array<{
    title: string;
    path: string;
  }>;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 py-4">
      <Link to="/" className="text-gray-600 hover:text-blue-500">
        Home
      </Link>
      {items.map((item, index) => (
        <React.Fragment key={item.path}>
          <span className="text-gray-400">/</span>
          <Link
            to={item.path}
            className={`${
              index === items.length - 1
                ? 'text-blue-600 font-medium'
                : 'text-gray-600 hover:text-blue-500'
            }`}
          >
            {item.title}
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;