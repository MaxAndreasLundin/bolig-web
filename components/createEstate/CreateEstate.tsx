import React, { ChangeEvent, FormEvent, useState } from 'react';
import { GoHome } from 'react-icons/go';

const initialState = {
  title: '',
  location: '',
  description: '',
  link: '',
  coordinates: '',
  typeOfResidence: '',
  price: 0,
  room: 0,
  area: 0,
};

const CreateEstate = () => {
  const [estateData, setEstateData] = useState(initialState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { id, value } = e.target;
    setEstateData((prevState) => ({
      ...prevState,
      [id]:
        id === 'price' || id === 'room' || id === 'area'
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(estateData);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEST_BACKEND}/estates`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify(estateData),
        },
      );

      if (response.ok) {
        const responseData = await response.json();
        setEstateData(initialState);
        console.log('Estate created:', responseData);
        alert('Estate Created');
      } else {
        console.error('Error creating estate1:', response.status);
      }
    } catch (error) {
      console.error('Error creating estate2:', error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-[500px] flex-col justify-center font-semibold"
      >
        <div className="flex w-full flex-col justify-between gap-4 sm:flex-row">
          <div className="flex w-full flex-col">
            <label htmlFor="title" className="mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={estateData.title}
              onChange={handleChange}
              className="mb-2 rounded-md border"
            />
          </div>

          <div className="flex w-full flex-col">
            <label htmlFor="location" className="mb-2">
              Location
            </label>
            <input
              type="text"
              id="location"
              value={estateData.location}
              onChange={handleChange}
              className="mb-4 rounded-md border"
            />
          </div>
        </div>

        <label htmlFor="description" className="mb-2">
          Description
        </label>
        <textarea
          id="description"
          value={estateData.description}
          onChange={handleChange}
          className="mb-4 rounded-md border"
        ></textarea>

        <label htmlFor="link" className="mb-2">
          Link
        </label>
        <input
          type="text"
          id="link"
          value={estateData.link}
          onChange={handleChange}
          className="mb-4 rounded-md border"
        />

        <label htmlFor="coordinates" className="mb-2">
          Coordinates
        </label>
        <input
          type="text"
          id="coordinates"
          value={estateData.coordinates}
          onChange={handleChange}
          className="mb-4 rounded-md border"
        />

        <label htmlFor="typeOfResidence" className="mb-2">
          Type of Residence
        </label>
        <select
          id="typeOfResidence"
          value={estateData.typeOfResidence}
          onChange={handleChange}
          className="mb-4 rounded-md border"
        >
          <option value="">Select Residence</option>
          <option value="apartment">Apartment</option>
          <option value="townhouse">Town House</option>
          <option value="house">House</option>
        </select>

        <label htmlFor="price" className="mb-2">
          Price
        </label>
        <input
          type="number"
          id="price"
          value={estateData.price}
          onChange={handleChange}
          className="mb-4 rounded-md border"
        />

        <label htmlFor="room" className="mb-2">
          Number of Rooms
        </label>
        <input
          type="number"
          id="room"
          value={estateData.room}
          onChange={handleChange}
          className="mb-4 rounded-md border"
        />

        <label htmlFor="area" className="mb-2">
          Area m<sup>2</sup>
        </label>
        <input
          type="number"
          id="area"
          value={estateData.area}
          onChange={handleChange}
          className="mb-6 rounded-md border"
        />

        <button
          type="submit"
          className="hover:bg-neutral-700 flex h-10 w-full items-center justify-center gap-4 rounded-md border-2 border-third bg-secondary text-white_bolig hover:scale-105 hover:cursor-pointer hover:bg-opacity-80"
        >
          Submit <GoHome />
        </button>
      </form>
    </>
  );
};

export default CreateEstate;
