import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { authContext } from "../../Context/UserContext";

const Product = ({ product }) => {
  const { Size, about, balance, name, picture, _id } = product;
  const { user } = useContext(authContext);
  // console.log(user);
  const handleAddToBooking = () => {
    if (!user) {
      return toast.error("please login first");
    }

    const bookingsItem = {
      productName: name,
      productPrice: balance,
      productSize: Size[0],
      userName: user.displayName,
      userEmail: user.email,
    };
    // console.log(bookingsItem);
    fetch(
      `https://repliq-e-commerce-server.vercel.app/
booking`,
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingsItem),
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
  };

  return (
    <div className="card  bg-base-100 border relative  shadow-2xl mx-auto my-5">
      <figure>
        <img className="h-80 w-full rounded-md" src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <div className="text-start font-bold">
          <p>Price :{balance}</p>
          <p>
            {" "}
            size :
            {Size.map((x) => (
              <span className="mx-2">{x}</span>
            ))}
          </p>
          <p className="my-2 font-normal">{about.slice(0, 50)}</p>
        </div>
        <div className="card-actions justify-evenly absolute bottom-1">
          <button onClick={handleAddToBooking} className="btn btn-accents">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
