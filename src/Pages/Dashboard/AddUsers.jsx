import React from "react";
import { toast } from "react-hot-toast";

const AddUsers = () => {
  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;

    const displayName = form.name.value;
    const email = form.email.value;
    const phoneNumber = form.phoneNumber.value;
    const password = form.password.value;
    const photoURL = form.picture.value;
    const userType = form.userType.value;

    const user = {
      displayName,
      email,
      password,
      phoneNumber,
      photoURL,
      userType,
    };

    fetch(
      `https://repliq-e-commerce-server.vercel.app/
users`,
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Save user", data);
        if (data.acknowledged) {
          toast.success("user added successfully");
        }
      })
      .catch((error) => {
        toast.error(error.message);
        console.error("Error:", error);
      });

    console.log(user);
  };

  return (
    <div>
      <div className="max-w-2xl flex justify-center m-3 p-3 bg-base-200">
        <form onSubmit={handleAddUser} className="font-bold border p-2 md:p-8">
          <div className="form-control ">
            <label className="label">
              <span className="label-text"> Name</span>
            </label>
            <label>
              <input
                type="text"
                placeholder=" Name"
                name="name"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <label>
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered"
                name="email"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <label>
              <input
                type="text"
                placeholder="Phone Number"
                className="input input-bordered"
                name="phoneNumber"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <label>
              <input
                type="text"
                placeholder="Phone Number"
                className="input input-bordered"
                name="password"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Picture Url</span>
            </label>
            <label>
              <input
                type="text"
                placeholder="picture Url"
                className="input input-bordered"
                name="picture"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Type</span>
            </label>
            <label>
              <input
                type="text"
                placeholder="admin/user"
                className="input input-bordered"
                name="userType"
              />
            </label>
          </div>
          <button className="btn btn-accent my-3"> Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUsers;
