import React, { useState } from 'react'
import './Card.css'

function Card(props) {
  const [title, setTitle] = useState(props.title)
  const [articleQuote, setArticleQuote] = useState(props.articleQuote)
  const [dateCreated, setDateCreated] = useState(props.dateCreated)

  return (
    <div className='card'>
        <div className="card-title" >{title}</div>
        <div className="card-quote" >{articleQuote}</div>
        <div className="card-created" >{dateCreated}</div>
    </div>
  )
}

export default Card