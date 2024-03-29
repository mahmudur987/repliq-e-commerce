import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../Context/UserContext";

const Navbar = () => {
  const { logout, user, Setuser } = useContext(authContext);

  // console.log(user);

  const handleSignOut = () => {
    logout();
    then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  };
  const menuItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/dashboard"}>Dashboard</Link>
      </li>
      <li>
        <Link to={"/product"}>Product</Link>
      </li>
      <li>
        <Link to={"/cart"}>Cart</Link>
      </li>
      {user ? (
        <>
          <li className="flex flex-col-reverse  items-center">
            <Link onClick={handleSignOut}>Sign out </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to={"/login"}>Log In</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="font-bold menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-2xl lg:text-3xl font-bold text-red-700">
          REPLIQ E-Commerce
        </a>
      </div>
      <div className=" navbar-end hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 font-bold ">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
