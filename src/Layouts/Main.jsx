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
      <UserContext>
        <Navbar />
        <Outlet />
        <Footer />
        <Toaster />
      </UserContext>
    </div>
  );
};

export default Main;
