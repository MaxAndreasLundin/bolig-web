"use client";
import React, { useState } from "react";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.replace("/");
    } else {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <div>Unauthorized</div>;
  }

  return <div>{children}</div>;
};

const Page = () => {
  return (
    <PrivateRoute>
      <div>Welcome to the Chat User Account page!</div>
    </PrivateRoute>
  );
};

export default Page;
