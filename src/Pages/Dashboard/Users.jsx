import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import LoadingSpinner from "../../components/LoadingSpiner";

const Users = () => {
  const [allusers, Setallusers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const url = "https://repliq-e-commerce-server.vercel.app/allusers ";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        Setallusers(data);

        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("server error");
      });
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl"> All Users</h1>
      <div>
        {allusers.map((x, i) => (
          <div className="md:m-7 text-start p-5 border shadow-xl " key={i}>
            <p className="md:text-2xl font-semibold">Name :{x.displayName} </p>
            <p className="md:text-2xl font-semibold">Email :{x.email} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
