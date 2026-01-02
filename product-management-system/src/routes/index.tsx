import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Products from "../pages/products/Products";
import { AddProduct } from "../pages/products/AddProduct";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            { path: '/add-product', element: <AddProduct /> },
            { path: '/', element: <Navigate to={'/products'} /> },
            { path: '/products', element: <Products /> },
            { path: '/*', element: <NotFound /> }
        ]
    }
])
export default router