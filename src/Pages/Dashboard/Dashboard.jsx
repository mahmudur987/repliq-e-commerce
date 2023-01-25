import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAdmin } from "../../components/useAdmin";
import { authContext } from "../../Context/UserContext";

const Dashboard = () => {
  const { user } = useContext(authContext);

  const [admin, adminLoading] = useAdmin(user?.email);
  console.log(admin);
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col  relative">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-info btn-sm drawer-button lg:hidden absolute left-0 top-0"
        >
          Open drawer
        </label>
        {!admin && (
          <p>this for admin. try to log In with admin Email and password</p>
        )}
        {admin && <Outlet></Outlet>}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        {admin && (
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
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
