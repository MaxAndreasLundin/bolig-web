"use client";
import React from "react";
import FormTsx from "../../components/FormRegistration";

const registration = () => {
  return (
    <div className="bg-neutral-900 flex-1">
      <div className="flex flex-col items-center justify-center h-full">
        <FormTsx />
      </div>
    </div>
  );
};

export default registration;
