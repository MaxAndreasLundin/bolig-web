import React from "react";

const GetListOfAllResidence = () => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const fetchResidence = async () => {
    try {
      const response = await fetch("http://localhost:3333/estates/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();
      console.log("1", result);

      if (result.length > 0) {
        localStorage.setItem("searchResult", JSON.stringify(result));
        window.location.href = "/residenceForSale";
      } else {
        alert("Your search could not be found...");
      }
    } catch (error) {
      alert("fetch backend failed");
      console.log("fetch backend failed", error);
    }
  };

  return (
    <>
      <button
        onClick={fetchResidence}
        className="my-12 rounded-xl border bg-white bg-opacity-80 p-2 font-semibold text-gray-700 hover:scale-105 lg:my-44"
      >
        Explore whats for sale
      </button>
    </>
  );
};

export default GetListOfAllResidence;
