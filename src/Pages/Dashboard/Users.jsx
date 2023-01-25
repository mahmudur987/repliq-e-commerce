import React, { useEffect, useState } from "react";

const Users = () => {
  const [allusers, Setallusers] = useState([]);

  useEffect(() => {
    const url = "https://repliq-e-commerce-server.vercel.app/allusers ";
    fetch(url)
      .then((res) => res.json())
      .then((data) => Setallusers(data));
  }, []);
  // console.log(allusers);
  return (
    <div>
      {allusers.map((x, i) => (
        <div className="m-7 text-start p-5 border shadow-xl " key={i}>
          <p className="text-3xl font-bold">Name :{x.displayName} </p>
          <p className="text-3xl font-bold">Email :{x.email} </p>
        </div>
      ))}
    </div>
  );
};

export default Users;
