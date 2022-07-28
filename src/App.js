import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Articles from './components/pages/Articles';
import Card from './components/Card';
import CreateArticle from './components/pages/CreateArticle';
import Article from './components/pages/Article';

function App() {
  return (    
    <div className="App">             
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/articles' element={<Articles/>}/>
          <Route path='/create-article' element={<CreateArticle/>}/>
          <Route path='/sample-card' element={<Card/>}/> 
          <Route path='/articles/:articleId' element={<Article />} />                     
        </Routes>      
      </Router>
    </div>
  );
}

export default App;
