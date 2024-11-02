
import Materials from "@/page/material/Materials";
import { Link, Outlet, useParams } from "react-router-dom";

const categories = ["Boards", "Surface", "Edging"];

const MaterialsLayout = () => {
  const { id } = useParams();  // `id` is the route parameter indicating the selected category (like 'Boards')
  return (
    <div className="min-h-[450px] bg-background">
      <main className="container mx-auto px-4">
        {/* All Materials Header */}

        <div className="flex gap-2">
          {/* Sidebar */}
           <aside className="hidden md:block w-2/12 shrink-0 border-r-2 pr-1 max-h-screen sticky top-[4rem]">
            <Link to="/materials">
              <h2 className="font-semibold text-2xl mb-2 px-2">All Materials</h2>
            </Link>
            <nav>
              {categories.map((category) => (
                <Link
                  key={category}
                  to={`/materials/${category}`}
                  className="block px-4 py-2 mb-1 rounded-lg hover:bg-accent border-b-2"
                > 
                  {category}
                </Link>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* AllMaterials   */}
            {/* {!id ? <Materials /> : <Outlet />} */}
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MaterialsLayout;


