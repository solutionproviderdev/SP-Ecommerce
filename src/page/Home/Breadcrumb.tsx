import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Breadcrumb: React.FC = () => {
  const { slug, '*': restPath } = useParams<{ slug: string; '*': string }>();
  const pathSegments = restPath ? [slug, ...restPath.split('/')] : [slug];

  return (
    <nav className="mb-4">
      <ul className="flex space-x-2">
        {pathSegments.map((segment, index) => {
          const path = pathSegments.slice(0, index + 1).join('/');
          return (
            <li key={segment}>
              <Link to={`/category/${path}`} className="text-blue-500 hover:underline">
                {segment.replace(/-/g, ' ')} {/* Replace hyphens with spaces for better readability */}
              </Link>
              {index < pathSegments.length - 1 && <span>/</span>}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
