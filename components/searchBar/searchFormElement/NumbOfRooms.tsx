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
          <option value="1">1 Room</option>
          <option value="2">2 Room</option>
          <option value="3">3 Room</option>
          <option value="4">4 Room</option>
        </select>
    </div>
  )
}

export default NumbOfRooms