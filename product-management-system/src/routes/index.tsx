
import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Products from "../pages/products/Products";
import { AddProduct } from "../pages/products/AddProduct";
import NotFound from "../pages/NotFound";
import EditProduct from "../pages/products/EditProduct";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> }, // Plasma shows here
      { path: "/products", element: <Products /> },
      { path: "/add-product", element: <AddProduct /> },
      { path: "/edit-product/:id", element: <EditProduct /> },
      { path: "*", element: <NotFound /> }
    ]
  }
]);

export default router