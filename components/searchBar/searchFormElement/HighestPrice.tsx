import React, { ChangeEvent } from 'react'

interface HighestPriceProps {
  onHighestPrice: (highestPrice: string) => void;
}

const HighestPrice = ({onHighestPrice}: HighestPriceProps) => {
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    onHighestPrice(e.target.value)
  }

  return (
    <div className='mb-2'>
      <p className='font-bold py-2'>Highest Price</p>
      <select onChange={handleSelect} className="w-full rounded-md border-blue-900">
        <option value="20000000">Nothing</option>
        <option value="200000">200 000 kr</option>
        <option value="500000">500 000 kr</option>
        <option value="1000000">1 milj. kr</option>
        <option value="2000000">2 milj. kr</option>
        <option value="3000000">3 milj. kr</option>
        <option value="4000000">4 milj. kr</option>
        <option value="5000000">5 milj. kr</option>
        <option value="6000000">6 milj. kr</option>
        <option value="7000000">7 milj. kr</option>
        <option value="8000000">8 milj. kr</option>
        <option value="9000000">9 milj. kr</option>
        <option value="10000000">10 milj. kr</option>
        <option value="15000000">15 milj. kr</option>
        <option value="20000000">20 milj. kr</option>
      </select>
    </div>
  )
}

export default HighestPrice