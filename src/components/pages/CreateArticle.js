import React, { useState, useEffect } from 'react'
import Articles from './Articles'
import Axios from 'axios'
import fetch from 'node-fetch'

// Create a form
// form should insert into json file

// be able to edit later

function CreateArticle() {
  const [articleTitle, setArticleTitle] = useState('')
  const [articleContent, setArticleContent] = useState('')
  const [articleDate, setArticleDate] = useState('') // date time?
  const [numArticles, setNumArticles] = useState(0)
  const [allArticles, setAllArticles] = useState([])

  const articleTitleChange = (e) => {
    setArticleTitle(e.target.value)
  }

  const articleContentChange = (e) => {
    setArticleContent(e.target.value)
  }

  const postArticle = () => {    
    setArticleDate(new Date())    
    console.log(articleDate)       

    let newArticle = {
      id: numArticles + 1,
      title: articleTitle,
      content: articleContent,
      date: articleDate
    }

    let toJson = [...allArticles, newArticle]    
    setAllArticles(previousState => [...previousState, newArticle])
    setNumArticles(numArticles + 1)    
    console.log(JSON.stringify(toJson))
    
    fetch("http://localhost:5000/receive", {
          method: "POST",
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(toJson)
    })
    .then(result => {
      console.log(result)
    })    

  }

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
        setNumArticles(articlesData.articlesRepository[lenData-1].id)        
        setAllArticles(articlesData.articlesRepository)
      }
    )
  }, [])

  return (
    <div className='create-article-page'>
      <div className="create-article-header">Create an Article</div>    
      <label>
        Title:
        <input type="text" id="article-title" className="article-title" onChange={articleTitleChange} />
      </label>

      <label>
        Content: 
        <input type="text" id="article-content" className="article-content" onChange={articleContentChange} />
      </label>

      <button onClick={postArticle}>Post</button>

    </div>

  )
}

export default CreateArticle