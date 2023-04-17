import React from 'react';
import Image from 'next/image';
import recidentImg from '../../public/hemnet.jpg';
import { ResidenceListProps } from '../helpers/ResidenceList';

const ResidenceCard = ({
  title,
  location,
  description,
  typeOfResidence,
  price,
  room,
  area,
  onClick,
}: ResidenceListProps & { onClick?: () => void }) => {
  return (
    <div
      onClick={onClick}
      className="m-4 flex cursor-pointer flex-col rounded-xl border bg-[#fff] text-primary shadow-xl md:flex-row"
    >
      <div className="relative h-52 w-[100%] rounded-xl md:w-[50%] lg:w-[40%]">
        <Image
          src={recidentImg}
          alt="hemnet"
          priority={true}
          className="h-full w-full rounded-xl object-cover"
        />
      </div>

      <div className="pt-4">
        <div className="p-2">
          <h1 className="text-lg font-semibold">{title}</h1>
          <p className="text-sm">{location}</p>
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
