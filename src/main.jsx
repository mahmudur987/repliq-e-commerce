import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import Main from "./Layouts/Main";
import Home from "./Pages/Home/Home";
import LogIn from "./Pages/LogIn/LogIn";
import SignUp from "./Pages/SignUP/SignUp";
import Products from "./Pages/Products/Products";
import Cheakout from "./Pages/Cheakout/Cheakout";
import PrivatRoutes from "./Routes/PrivetRoutes";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddProduct from "./Pages/Dashboard/AddProduct";
import Users from "./Pages/Dashboard/Users";
import AddUsers from "./Pages/Dashboard/AddUsers";
import Orders from "./Pages/Dashboard/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/dashboard",
        element: (
          <PrivatRoutes>
            <Dashboard></Dashboard>
          </PrivatRoutes>
        ),
        children: [
          {
            path: "/dashboard/",
            element: <Products></Products>,
          },
          {
            path: "/dashboard/addproduct",
            element: <AddProduct></AddProduct>,
          },
          {
            path: "/dashboard/users",
            element: <Users></Users>,
          },
          {
            path: "/dashboard/addusers",
            element: <AddUsers></AddUsers>,
          },
          {
            path: "/dashboard/orders",
            element: <Orders></Orders>,
          },
        ],
      },

      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/product",
        element: <Products></Products>,
      },
      {
        path: "/cart",
        element: (
          <PrivatRoutes>
            <Cheakout></Cheakout>
          </PrivatRoutes>
        ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
