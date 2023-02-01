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
    <div>
      <h1 className="text-5xl m-5 font-bold text-secondary border border-black p-3 ">
        New Arrival{" "}
      </h1>
      <div className="my-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {products.slice(0, 3).map((product, idx) => (
          <Product key={idx} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
