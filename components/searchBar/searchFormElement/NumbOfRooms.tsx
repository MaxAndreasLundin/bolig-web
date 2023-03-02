import React, { ChangeEvent } from 'react'

interface NumbOfRoomsProps {
  onSelectRooms: (room: number) => void;
}

const NumbOfRooms = ({onSelectRooms}: NumbOfRoomsProps) => {
  
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectValue = parseInt(e.target.value); 
    onSelectRooms(selectValue);
  }

  return (
    <div className='mb-2'>
      <p className="font-bold py-2">Min. Number of roooms</p>
        <select onChange={handleSelect} className="w-full rounded-md border-blue-900">
          <option value={15}>All</option>
          <option value={1}>1 Room</option>
          <option value={2}>2 Room</option>
          <option value={3}>3 Room</option>
          <option value={4}>4 Room</option>
          <option value={5}>5 Room</option>
          <option value={6}>6 Room</option>
          <option value={7}>7 Room</option>
          <option value={8}>8 Room</option>
          <option value={10}>10 Room</option>
          <option value={15}>15 Room</option>
        </select>
    </div>
  )
}

export default NumbOfRooms