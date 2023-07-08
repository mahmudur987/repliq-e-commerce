import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpiner";
import Product from "../Products/Product";

const HomeProducts = () => {
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
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container">
      <h1 className="text-5xl m-5 font-bold text-secondary  my-10 p-3 ">
        New Arrival !{" "}
      </h1>
      <div className="my-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {products.slice(0, 3).map((product, idx) => (
          <Product key={idx} product={product}></Product>
        ))}
      </div>

      <Link to={"/product"}>
        <button className="btn btn-primary">See All</button>
      </Link>
    </div>
  );
};

export default HomeProducts;
