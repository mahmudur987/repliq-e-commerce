import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../Context/UserContext";

const SignUp = () => {
  const { signUp, updateUserProfile, loading, Setloading } =
    useContext(authContext);
  const [Error, SetError] = useState("");
  const naviget = useNavigate();
  Setloading(false);
  const handleSignup = (e) => {
    Setloading(true);
    e.preventDefault();
    const form = e.target;
    const displayName = form.name.value;
    const phoneNumber = form.phoneNumber.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = "";
    const userType = "user";
    signUp(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        if (user) {
          updateProfile(
            displayName,
            email,
            photoUrl,
            userType,
            phoneNumber,
            password
          );
          form.reset();
        }
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        SetError(errorMessage);
        // ..
      });
    console.log(email, password);
  };
  const updateProfile = (
    displayName,
    email,
    photoURL,
    userType,
    phoneNumber,
    password
  ) => {
    const fullprofile = {
      displayName,
      photoURL,
      email,
      userType,
      phoneNumber,
      password,
    };
    const profile = { displayName, photoURL };
    updateUserProfile(profile)
      .then(() => {
        saveUser(fullprofile);
      })
      .catch((err) => {
        toast.error(err.message);
        console.error(err);
      });
  };

  const saveUser = (fullprofile) => {
    // console.log(fullprofile);
    fetch(
      `https://repliq-e-commerce-server.vercel.app/
users`,
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fullprofile),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Save user", data);
        if (data.acknowledged) {
          toast.success("user signup successfully");
        }
      })
      .catch((error) => {
        toast.error(error.message);
        console.error("Error:", error);
      });
    toast.success("user signup successfully");
    naviget("/");
    Setloading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <progress
          className="progress progress-secondary w-56"
          value="0"
          max="100"
        ></progress>
        <progress
          className="progress progress-secondary w-56"
          value="10"
          max="100"
        ></progress>
        <progress
          className="progress progress-secondary w-56"
          value="40"
          max="100"
        ></progress>
        <progress
          className="progress progress-secondary w-56"
          value="70"
          max="100"
        ></progress>
        <progress
          className="progress progress-secondary w-56"
          value="100"
          max="100"
        ></progress>
      </div>
    );
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignup} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="number"
                placeholder="phone Number"
                className="input input-bordered"
                name="phoneNumber"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
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
                required
              />
            </div>
            <label className="label">
              <span className="label-text">{Error}</span>
            </label>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Signup</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
