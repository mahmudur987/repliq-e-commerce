import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";
import UserContext from "../Context/UserContext";
import "./Main.css";
import { Toaster } from "react-hot-toast";
const Main = () => {
  return (
    <div>
      <Toaster></Toaster>
      <UserContext>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </UserContext>
    </div>
  );
};

export default Main;
