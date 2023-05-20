import React from 'react'

interface Props {
  id: number;
  title: string;
  info: string;
}

const NewsLetterCard = ({id, title, info}: Props) => {
  return (
    <div key={id}>
      <h3>{title}</h3>
      <p>{info}</p>
    </div>
  )
}

export default NewsLetterCard