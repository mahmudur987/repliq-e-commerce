import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpiner";
// import { cheakUser } from "../../components/cheakUser";
import { authContext } from "../../Context/UserContext";

const LogIn = () => {
  const { user, login, Setloading, loading } = useContext(authContext);
  const [Error, SetError] = useState("");

  const naviget = useNavigate();

  const handleLogin = (e) => {
    Setloading(true);
    e.preventDefault();
    const form = e.target;
    const phoneNumber = form.PhoneNumber.value;
    const password = form.password.value;
    fetch(
      `https://repliq-e-commerce-server.vercel.app/
cheakusers?phoneNumber=${phoneNumber}&password=${password}`
    )
      .then((res) => res.json())
      .then((result) => {
        const { data, token } = result;
        console.log(data);
        console.log(token);
        if (data.message) {
          toast.error(data.message);
          SetError(data.message);
        } else {
          login(data?.email, password)
            .then((result) => {
              const user = result.user;
              console.log(user);
              localStorage.setItem("Token", token);
              Setloading(false);
              SetError("");
              naviget("/");
            })
            .catch((err) => {
              console.error(err);
              Setloading(false);
              toast.error("please register first");
              SetError(err.message);
            });
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("server problem");
        Setloading(false);
      });
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className=" min-h-[500px] bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Log In now!</h1>
          <p className="py-6">
            Dont have an account please{" "}
            <Link to={"/signup"} className="btn-link">
              Signup
            </Link>{" "}
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <p className="font-bold text-2xl"> Admin</p>
            <p className="text-red-600 "> Phone number:01671706882</p>
            <p className="text-red-600 "> passwords:123456</p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                placeholder="Phone Number"
                className="input input-bordered"
                name="PhoneNumber"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
            </div>
            <p className="text-secondary">{Error}</p>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
