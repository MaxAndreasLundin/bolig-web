import React, { ChangeEvent } from 'react'

interface LivingAreaProps {
  onLivingArea: (livingArea: string) => void;
}

const LivingArea = ({onLivingArea}: LivingAreaProps) => {

  const handleSelectArea = (e: ChangeEvent<HTMLSelectElement>) => {
    onLivingArea(e.target.value)
  }

  return (
    <div>
      <p className='text-white'>Living Area</p>
      <select onChange={handleSelectArea}>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
        <option value="60">60</option>
      </select>
    </div>
  )
}

export default LivingArea