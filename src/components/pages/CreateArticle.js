import React, { useState, useEffect } from 'react'
import Articles from './Articles'
import articlesRepositoryData from './articlesRepository.json'

// Create a form
// form should insert into json file

// be able to edit later

function CreateArticle() {
  const [articleTitle, setArticleTitle] = useState('')
  const [articleContent, setArticleContent] = useState('')
  const [articleDate, setArticleDate] = useState('') // date time?

  const articleTitleChange = (e) => {
    setArticleTitle(e.target.value)
  }

  const articleContentChange = (e) => {
    setArticleContent(e.target.value)
  }

  const postArticle = () => {    
    setArticleDate(new Date())        

    let articlesData = articlesRepositoryData
    
    let newArticle = {
      id: articlesData[articlesData.length-1].id + 1,
      title: articleTitle,
      content: articleContent,
      date: articleDate
    }

    articlesData.push(newArticle)
    
    
    console.log(newArticle)

    // then write to JSON

  }

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