"use client";
import React, { useState } from "react";

//PrivateRoute tar en prop som heter "children" och dess typ är React.ReactNode
//(children = <div>Welcome to the Chat User Account page!</div>")
const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //Kontrollerar om en token finns i localStorage
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.replace("/");
    } else {
      setIsAuthenticated(true);
    }
    setIsLoading(false); //när laddningen är klar sätts "isLoading" till false
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <div>Unauthorized</div>;
  }

  //returnerar "children" om både "isLoading" och "isAuthenticated" är false.
  return <div>{children}</div>;
};

const Page = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div>
      <PrivateRoute>
        <div>Welcome to the Chat User Account page!</div>
        <button onClick={handleLogout} className="h-10 w-16 rounded-xl border">
          Logout
        </button>
      </PrivateRoute>
    </div>
  );
};

export default Page;