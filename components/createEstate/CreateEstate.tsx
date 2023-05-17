import React, { ChangeEvent, FormEvent, useState } from 'react';

const CreateEstate = () => {
  const [estateData, setEstateData] = useState({
    title: '',
    location: '',
    description: '',
    link: '',
    coordinates: '',
    typeOfResidence: '',
    price: 0,
    room: 0,
    area: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setEstateData((prevState) => ({
      ...prevState,
      [id]: id === 'price' || id === 'room' || id === 'area' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(estateData)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_NEST_BACKEND}/estates`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(estateData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Estate created:', responseData);
      } else {
        console.error('Error creating estate1:', response.status);
      }
    } catch (error) {
      console.error('Error creating estate2:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" onChange={handleChange} />

        <label htmlFor="description">Description</label>
        <input type="text" id="description" onChange={handleChange} />

        <label htmlFor="link">Link</label>
        <input type="text" id="link" onChange={handleChange} />

        <label htmlFor="location">Location</label>
        <input type="text" id="location" onChange={handleChange} />

        <label htmlFor="coordinates">Coordinates</label>
        <input type="text" id="coordinates" onChange={handleChange} />

        <label htmlFor="typeOfResidence">Type of Residence</label>
        <input type="text" id="typeOfResidence" onChange={handleChange} />

        <label htmlFor="price">Price</label>
        <input type="number" id="price" onChange={handleChange} />

        <label htmlFor="room">Number of Rooms</label>
        <input type="number" id="room" onChange={handleChange} />

        <label htmlFor="area">Area</label>
        <input type="number" id="area" onChange={handleChange} />

        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default CreateEstate;
