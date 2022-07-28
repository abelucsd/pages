import React, { useState, useEffect } from 'react'
import './Article.css'
import { useParams } from 'react-router-dom'

function Article() {
  const { articleId } = useParams()

  const [article, setArticle] = useState('')

  useEffect( () => {
    console.log(articleId)
    fetch("http://localhost:5000/api").then(
      response => {        
        return response.text()
      }   
    ).then(
      data => {        
        let articlesData = JSON.parse(data)               
        let articles = articlesData.articlesRepository
        setArticle(articles.filter(currArticle => currArticle.id == articleId)[0])
      }
    )
  }, [])

  return (    
    <div className='article-page'>
        <div className="article-container">
            <div className="article-header">{article?.title}</div>
            <div className="article-date">{article?.datePublished}</div>
            <div className="article-content">{article?.content}</div>
        </div>
    </div>
  )
}

export default Article