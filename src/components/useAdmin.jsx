import { useEffect, useState } from "react";

export const useAdmin = (email) => {
  const [admin, Setadmin] = useState(null);
  const [adminLoading, Setadminloading] = useState(true);
  useEffect(() => {
    fetch(`https://repliq-e-commerce-server.vercel.app/admin?email=${email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Token: localStorage.getItem("Token") }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.userType === "admin") {
          Setadmin(data);
          Setadminloading(false);
        }
      });
  }, [email]);
  return [admin, adminLoading];
};
