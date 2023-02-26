import React, { ChangeEvent } from 'react'

const SelectForm = (props: any) => {
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    props.onSelectForm(e.target.value);
  }

  return (
    <div>
      <p className="text-white">Minimum number of roooms</p>
        <select onChange={handleSelect}>
          <option value="1room">1 Room</option>
          <option value="2room">2 Room</option>
          <option value="3room">3 Room</option>
          <option value="4room">4 Room</option>
        </select>
    </div>
  )
}

export default SelectForm