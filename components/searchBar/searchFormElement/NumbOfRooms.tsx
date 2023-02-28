import React, { ChangeEvent } from 'react'

interface NumbOfRoomsProps {
  onSelectRooms: (typeOfRoom: string) => void;
}

const NumbOfRooms = ({onSelectRooms}: NumbOfRoomsProps) => {
  
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    onSelectRooms(e.target.value);
  }

  return (
    <div>
      <p className="text-white">Minimum number of roooms</p>
        <select onChange={handleSelect}>
          <option value="15">All</option>
          <option value="1">1 Room</option>
          <option value="2">2 Room</option>
          <option value="3">3 Room</option>
          <option value="4">4 Room</option>
          <option value="5">5 Room</option>
          <option value="6">6 Room</option>
          <option value="7">7 Room</option>
          <option value="8">8 Room</option>
          <option value="10">10 Room</option>
          <option value="15">15 Room</option>
        </select>
    </div>
  )
}

export default NumbOfRooms