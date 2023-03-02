import React from "react";
import Image from "next/image";
import { ResidenceListProps } from "../helpers/ResidenceList";

const ResidenceCard = ({title, city, description, typeOfResidence, price, room, area}: ResidenceListProps) => {
  return (
    <div className="bg-white text-gray-600 m-4 flex flex-col rounded-xl md:flex-row lg:w-[60%] shadow-xl border">

      <div className="relative h-52 w-[100%] md:w-[50%] lg:w-[40%] rounded-xl">
        <Image src="/Image/hemnet.jpg" alt="hemnet" layout="fill" objectFit="cover" className="rounded-xl" />
      </div>

      <div className="pt-4">
        <div className="p-2">
          <h1 className="text-lg font-semibold">{title}</h1>
          <p className="text-sm">{city}</p>
        </div>

        <div className="flex p-2 gap-20 font-bold">
          <p>{price} kr</p>
          <p>{area} m<sup>2</sup></p>
          <p>{room} rooms</p>
        </div>

        <div className="p-2 hidden md:flex">
          <p className="overflow-ellipsis overflow-hidden truncate w-96">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ResidenceCard;
