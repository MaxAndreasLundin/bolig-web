import React from "react";

const registration = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center h-[90vh]">
      <form action="" className="bg-slate-200 p-10 rounded-lg">
        <h1 className="flex justify-center mb-10 text-black text-2xl font-bold underline">
          Registrera dig
        </h1>
        <div className="flex gap-4 mb-8">
          <input
            type="text"
            placeholder="Namn"
            className="input-field text-black"
          />
          <input
            type="text"
            placeholder="Efternamn"
            className="input-field text-black"
          />
        </div>
        <div className="flex justify-center mb-8">
          <input
            type="email"
            placeholder="Email"
            className="input-field w-full text-black"
          />
        </div>
        <div className="flex gap-4 mb-8">
          <input
            type="text"
            placeholder="Användarnamn"
            className="input-field text-black"
          />
          <input
            type="password"
            placeholder="Lössenord"
            className="input-field text-black"
          />
        </div>
        <button className="bg-green-500 flex justify-center w-full rounded-full p-2 border border-black hover:bg-green-600">
          <p className="hover:scale-110">Registrera dig!</p>
        </button>
      </form>
    </div>
  );
};

export default registration;
