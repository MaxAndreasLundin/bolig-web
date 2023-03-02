import React from "react";
import Image from "next/image";
import recidentImg from "../../public/hemnet.jpg";
import { ResidenceListProps } from "../helpers/ResidenceList";

const ResidenceCard = ({
  title,
  city,
  description,
  typeOfResidence,
  price,
  room,
  area,
}: ResidenceListProps) => {
  return (
    <div className="m-4 flex flex-col rounded-xl border bg-white text-gray-600 shadow-xl md:flex-row lg:w-[60%]">
      <div className="relative h-52 w-[100%] rounded-xl md:w-[50%] lg:w-[40%]">
        <Image
          src={recidentImg}
          alt="hemnet"
          priority={true}
          className="rounded-xl object-cover h-full w-full"
        />
      </div>

      <div className="pt-4">
        <div className="p-2">
          <h1 className="text-lg font-semibold">{title}</h1>
          <p className="text-sm">{city}</p>
        </div>

        <div className="flex gap-20 p-2 font-bold">
          <p>{price} kr</p>
          <p>
            {area} m<sup>2</sup>
          </p>
          <p>{room} rooms</p>
        </div>

        <div className="hidden p-2 md:flex">
          <p className="w-96 overflow-hidden truncate overflow-ellipsis">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResidenceCard;
