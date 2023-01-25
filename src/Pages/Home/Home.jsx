import React from "react";
import Banner from "./Banner";
import HomeProducts from "./HomeProducts";

const Home = () => {
  return (
    <div className="w-full my-20">
      <Banner></Banner>
      <HomeProducts></HomeProducts>
    </div>
  );
};

export default Home;
