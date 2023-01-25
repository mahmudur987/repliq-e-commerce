import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { authContext } from "../../Context/UserContext";

const Cheakout = () => {
  const [carts, SetCarts] = useState([]);
  const { user } = useContext(authContext);
  // console.log(user);
  useEffect(() => {
    const url = `https://repliq-e-commerce-server.vercel.app/
booking?email=${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => SetCarts(data));
  }, [user]);
  // console.log(carts);

  const handleDelete = (id) => {
    const url = `https://repliq-e-commerce-server.vercel.app/booking/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success("your Item delete successfully");

          const newCarts = carts.filter((x) => x._id !== id);
          SetCarts(newCarts);
        }
      });
  };

  return (
    <div className="overflow-x-auto min-h-screen">
      <table className="table w-full">
        <thead>
          <tr>
            <th> No</th>
            <th>Product Name</th>
            <th> User Name</th>
            <th>Price</th>
            <th>Confirm</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((cart, idx) => (
            <tr>
              <th>{idx + 1}</th>
              <td>{cart.productName}</td>
              <td> {cart.userName} </td>
              <td> {cart.productPrice} </td>
              <td>
                {" "}
                <button className="btn btn-sm btn-info">confirm</button>{" "}
              </td>
              <td>
                {" "}
                <button
                  onClick={() => handleDelete(cart._id)}
                  className="btn btn-sm btn-secondary"
                >
                  Delete
                </button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cheakout;
