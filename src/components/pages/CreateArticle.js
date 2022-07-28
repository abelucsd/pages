import React, { useState, useEffect } from 'react'
import './CreateArticle.css'
import fetch from 'node-fetch'

// Create a form
// form should insert into json file

// be able to edit later

function CreateArticle() {
  const [articleTitle, setArticleTitle] = useState('')
  const [articleContent, setArticleContent] = useState('')
  const [articleQuote, setArticleQuote] = useState('')
  const [articleDate, setArticleDate] = useState('')
  const [numArticles, setNumArticles] = useState(0)
  const [allArticles, setAllArticles] = useState([])

  const articleTitleChange = (e) => {
    setArticleTitle(e.target.value)
  }

  const articleContentChange = (e) => {
    setArticleContent(e.target.value)
  }

  const articleQuoteChange = (e) => {
    setArticleQuote(e.target.value)
  }

  const postArticle = () => {        
    console.log(articleDate)       

    let newArticle = {
      id: numArticles + 1,
      title: articleTitle,
      content: articleContent,
      quote: articleQuote,
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
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    setArticleDate(today) // edit this

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
      <label className="create-article-title">
        <div>Title</div>
        <input type="text" onChange={articleTitleChange} />
      </label>

      <label className="create-article-content">
        <div>Content</div>
        <textarea type="text" onChange={articleContentChange}/>
      </label>

      <label className="create-article-quote">
        <div>Quote</div>
        <textarea type="text" onChange={articleQuoteChange} placeholder="Summary of the post" />
      </label>      

      <button class="submit-article" onClick={postArticle}>Post</button>

    </div>

  )
}

export default CreateArticle