import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
  return (
    <>    
        <div class='navbar'>
            <div className="title">Pages</div>
            <ul className='nav-links-container'>
                <li className='home-link'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='articles-link'>
                    <Link to='/articles'>Articles</Link>
                </li>
                <li className='create-article'>
                    <Link to='create-article'>Create an Article</Link>
                </li>
                <li className='sample-card'>
                    <Link to='/sample-card'>Card Sample</Link>
                </li>
            </ul>            
        </div>
    </>
  )
}

export default Navbar