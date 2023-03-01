import React, { ChangeEvent } from 'react'

interface LivingAreaProps {
  onLivingArea: (livingArea: string) => void;
}

const LivingArea = ({onLivingArea}: LivingAreaProps) => {

  const handleSelectArea = (e: ChangeEvent<HTMLSelectElement>) => {
    onLivingArea(e.target.value)
  }

  return (
    <div className='mb-2'>
      <p className='font-bold py-2'>Min. Living area m<sup>2</sup></p>
      <select onChange={handleSelectArea} className="w-full rounded-md border-blue-900">
        <option value="900">All</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
        <option value="60">60</option>
        <option value="70">70</option>
        <option value="80">80</option>
        <option value="90">90</option>
        <option value="100">100</option>
        <option value="150">150</option>
        <option value="200">200</option>
        <option value="250">250</option>
      </select>
    </div>
  )
}

export default LivingArea