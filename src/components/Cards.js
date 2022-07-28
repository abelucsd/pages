import React, { useState, useEffect } from 'react'
import './Cards.css'
import Card from './Card'
import Home from './pages/Home'
import Article from './pages/Article'

import { BrowserRouter as Router, Routes, Route, Link, useMatch, matchPath } from 'react-router-dom'

const articleObjects = [
  {
    id: 1,
    title: 'Article 1',
    content: 'Hello. This is Article 1',
    datePublished: '1/1/2022'
  },
  {
    id: 2,
    title: 'Article 2',
    content: 'Hello. This is Article 2',
    datePublished: '1/2/2022'
  },
  {
    id: 3,
    title: 'Article 3',
    content: 'Hello. This is Article 3',
    datePublished: '1/3/2022'
  }
]

function Cards(props) {
  const [numCards, setNumCards] = useState(0)
  const [cardArray, setCardArray] = useState(articleObjects)  

  useEffect(() => {
    fetch("http://localhost:5000/api").then(
      response => {        
        return response.text()
      }   
    ).then(
      data => {        
        let articlesData = JSON.parse(data)
        let lenData = 0
        lenData = articlesData.articlesRepository.length
        setNumCards(articlesData.articlesRepository[lenData-1].id)        
        setCardArray(articlesData.articlesRepository)
      }
    )    
  }, [])

  return (
    <div className='cards'>  
      
      <ul className='card-list-container'>         
        {cardArray.map((article) => (        
          <div key={article.id}>               
            <Link to={`${article.id}`}>
              <Card 
                title={article.title}
                articleQuote = {article.content}
                dateCreated = {article.datePublished}
              />         
            </Link>   
          </div>
        ))}
      </ul>
        
                     

    </div>
  )
}

export default Cards