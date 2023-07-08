import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpiner";
import Product from "./Product";

const Products = () => {
  const [products, SetProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const url = "https://repliq-e-commerce-server.vercel.app/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        SetProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="my-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {products.map((product, idx) => (
        <Product key={idx} product={product}></Product>
      ))}
    </div>
  );
};

export default Products;
