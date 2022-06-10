import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className='header'>
      <div className='home-btn-area'>
        <Link to='/'>
          <button className='home-btn'>Home</button>
        </Link>
      </div>
      <div className='title-area'>
        <h1>Video Game Showcase</h1>
      </div>
      <div className='search-area'>
        <form>
          <input className='search' type='text' placeholder='game title search'></input>
        </form>
      </div>
    </div>
  )
}



export default Header;
