import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ProductLayout from "./Layout/ProductLayout";
import MeterialsLayout from "./Layout/MeterialsLayout";
import LoggedOutRoute from "./Layout/LoggedOutRoute";
import Login from "./components/component/Login";
import RootLayout from "./Layout/RootLayout";
import SignUp from "./components/component/SignUp";
import LoggedLayout from "./Layout/LoggedLayout";
import SingleProduct from "./components/component/SingleProduct";
import Cart from "./page/Cart/Cart";
import AllProduct from "./page/Product/AllProduct";
import AllMaterials from "./page/material/AllMaterials";
import Products from "./page/Product/Products";
import Materials from "./page/material/Materials";
import CreateMaterial from "./page/material/createMaterial";
import SingleMaterial from "./page/material/SingleMaterial";
import Home from "./page/Home/Home";
import Category from "./page/category/Category";
import Product from "./page/Home/Product";
import CategoryDetail from "./page/category/CategoryDetail";
import { nestedCategories } from "./page/Home/utils";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<LoggedOutRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="/" element={<LoggedLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/category" element={<Category />}></Route>
          <Route
            path="/category/*"
            element={<CategoryDetail categories={nestedCategories} />}
          />

          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/:id" element={<SingleProduct />} />
          <Route path="/products" element={<ProductLayout />}>
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<AllProduct />} />
          </Route>
          {/* materials routes */}
          <Route path="/materials" element={<MeterialsLayout />}>
            <Route path="/materials" element={<AllMaterials />} />
            <Route path="/materials/:cetegory" element={<Materials />} />
            <Route path="/materials/create" element={<CreateMaterial />} />
          </Route>
          <Route path="/materials/material/:id" element={<SingleMaterial />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
