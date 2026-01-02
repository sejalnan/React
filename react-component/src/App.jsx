import "./App.css";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import UserCard from "./components/UserCard";
import Button from "./components/Button";
import Product from "./components/Product";
import logo from "../src/assets/react.svg";
// import img from "../public/images";

function App() {
  const prod1 = {
    productdetails: { id: 1, name: "SmartPhone", qty: 20, image: "image.JPG" },
  };

  const prod2 = {
    productdetails: { id: 2, name: "Laptop", qty: 26, image: "image2.JPG" },
  };
  const prod3 = {
    productdetails: { id: 3, name: "Tablet", qty: 32, image: "image.JPG" },
  };

  const products = [prod1, prod2, prod3];
  const color = [bg_red, bg_blue, bg_green];
  return (
    <div className="card" style={color}>
      <Product products={products} />
    </div>
  );
}

export default App;
