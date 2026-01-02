import React from "react";

const Product = ({ products }) => {
  return (
    <>
      {products.map((product, index) => (
        <div className={`card ${color}`} key={index}>
          <div className="details">
            <h2>{product.productdetails.name}</h2>
            <p>Quantity: {product.productdetails.qty}</p>
          </div>
          <div>
            <img
              src={`/images/${product.productdetails.image}`}
              width={`200px`}
              height={`200px`}
              alt="logo"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Product;
