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
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {bookings.map((x, i) => (
        <div className="text-start m-4 border shadow-2xl p-3 " key={i}>
          <div className="max-w-2xl mx-auto">
            <p className="text-2xl font-bold text-red-500">
              Order Number : {i + 1}
            </p>
            <p className="text-xl font bold">Customar Name : {x.userName} </p>
            <p className="text-xl font bold"> Email : {x.userEmail} </p>
            <p className="text-xl font bold">Product Name : {x.productName} </p>
            <p className="text-lg font bold">Product Code : {x._id} </p>

            <p className="uppercase text-sm bg-secondary text-white rounded-xl text-center">
              Note :delevery Not complete
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
