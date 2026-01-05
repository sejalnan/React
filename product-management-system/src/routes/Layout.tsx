import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      {/* <Link to={'/add-product'} >Add Product</Link>
                    <Link to={'/products'} >Products</Link>
                    <Link to={'/edit-product'} >Edit Product</Link> */}
      <div style={{ minHeight: "600px" }}>
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Layout;
