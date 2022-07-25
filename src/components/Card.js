import React, { useState } from 'react'
import './Card.css'

function Card() {
  const [title, setTitle] = useState('Sample Title')
  const [articleQuote, setArticleQuote] = useState('Hello, my name is Angelo.')
  const [dateCreated, setDateCreated] = useState('1/1/2022')

  return (
    <div className='card'>
        <div className="card-title" >{title}</div>
        <div className="card-quote" >{articleQuote}</div>
        <div className="card-created" >{dateCreated}</div>
    </div>
  )
}

export default Card