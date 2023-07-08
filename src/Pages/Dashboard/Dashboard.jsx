import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAdmin } from "../../components/useAdmin";
import { authContext } from "../../Context/UserContext";
import { CiMenuKebab } from "react-icons/ci";
import ScreenSize from "../../components/ScreenSize";
const Dashboard = () => {
  const { user } = useContext(authContext);
  const [admin, adminLoading] = useAdmin(user?.email);
  const [showmenu, setShowmenu] = useState(true);
  const windowsize = ScreenSize();

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <label
          htmlFor="my-drawer-2"
          className=" flex justify-start lg:hidden  "
        >
          <p
            onClick={() => setShowmenu(true)}
            className="btn btn-sm btn-ghost text-2xl"
          >
            {" "}
            <CiMenuKebab />{" "}
          </p>
        </label>
        {!admin && (
          <p className="text-blue-400 mt-20 text-ellipsis text-5xl uppercase">
            this page is under maintanance
          </p>
        )}
        {admin && <Outlet></Outlet>}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        {admin && showmenu && (
          <ul
            onClick={() => {
              console.log(windowsize.width);
              if (windowsize.width <= 1024) {
                setShowmenu(false);
              }
            }}
            className="menu p-4 w-80 bg-base-100 text-base-content"
          >
            <li>
              <Link to={"/dashboard/"}>Products</Link>
            </li>
            <li>
              <Link to={"/dashboard/addproduct"}>Add Products</Link>
            </li>

            <li>
              <Link to={"/dashboard/orders"}>All Orders</Link>
            </li>

            <li>
              <Link to={"/dashboard/users"}>All Customar</Link>
            </li>

            <li>
              <Link to={"/dashboard/addusers"}>Add Customar</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
