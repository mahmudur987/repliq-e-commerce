import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import { cheakUser } from "../../components/cheakUser";
import { authContext } from "../../Context/UserContext";

const LogIn = () => {
  const { user, login, Setuser } = useContext(authContext);
  const [Error, SetError] = useState("");

  const naviget = useNavigate();

  console.log(user);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const phoneNumber = form.PhoneNumber.value;
    const password = form.password.value;
    fetch(
      `https://repliq-e-commerce-server.vercel.app/
cheakusers?phoneNumber=${phoneNumber}&password=${password}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message) {
          toast.error(data.message);
          SetError(data.message);
        } else {
          Setuser(data);
          SetError("");
          naviget("/");
        }
      });

    console.log(phoneNumber, password);
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Log In now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="number"
                placeholder="Phone Number"
                className="input input-bordered"
                name="PhoneNumber"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
                name="password"
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