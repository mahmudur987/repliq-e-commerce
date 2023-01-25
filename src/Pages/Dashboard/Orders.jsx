import React, { useEffect, useState } from "react";

const Orders = () => {
  const [bookings, Setbookings] = useState([]);

  useEffect(() => {
    const url = "https://repliq-e-commerce-server.vercel.app/bookings";
    fetch(url)
      .then((res) => res.json())
      .then((data) => Setbookings(data));
  }, []);

  // console.log(bookings);

  return (
    <div>
      {bookings.map((x, i) => (
        <div className="text-start m-4 border border-black p-3" key={i}>
          <p className="text-3xl text-red-500">{i + 1}</p>
          <p className="text-2xl font bold">Customar Name:{x.userName} </p>
          <p className="text-2xl font bold">Customar Email:{x.userEmail} </p>
          <p className="text-2xl font bold">Product Name:{x.productName} </p>
          <p className="text-2xl font bold">Product Code:{x._id} </p>

          <p>Note :delevery Not complete</p>
        </div>
      ))}
    </div>
  );
};

export default Orders;
