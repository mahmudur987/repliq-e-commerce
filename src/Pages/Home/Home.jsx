import React from "react";
import Banner from "./Banner";
import HomeProducts from "./HomeProducts";

const Home = () => {
  return (
    <div className="container mx-auto my-3 ">
      <Banner />
      <HomeProducts />
    </div>
  );
};

export default Home;
