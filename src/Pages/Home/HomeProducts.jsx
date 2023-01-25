import React, { useEffect, useState } from "react";
import Product from "../Products/Product";

const HomeProducts = () => {
  const [products, SetProducts] = useState([]);

  useEffect(() => {
    const url = "https://repliq-e-commerce-server.vercel.app/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => SetProducts(data));
  }, []);
  // console.log(products);

  return (
    <div className="my-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
      {products.slice(0, 3).map((product, idx) => (
        <Product key={idx} product={product}></Product>
      ))}
    </div>
  );
};

export default HomeProducts;
