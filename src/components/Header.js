import React from 'react';
import '../styles/Header.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className='header'>
      <div className='home-btn-area'>
        <Link to='/'>
          <button className='home-btn' onClick={() => props.clearSearchGame()}>Home</button>
        </Link>
      </div>
      <div className='title-area'>
        <h1>Video Game Showcase</h1>
      </div>
      <div className='search-area'>
        <form>
          <input className='search' type='text' placeholder='search by title' value={props.query} onChange={(event) => props.searchGame(event)}></input>
        </form>
      </div>
    </div>
  )
}

export default Header;

Header.propTypes = {
  clearSearchGame: PropTypes.func.isRequired,
  searchGame: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired
}
