import React from 'react';
import '../styles/Game.css';
import { Link } from 'react-router-dom';

const Game = (props) => {
  return (
    <Link to={`/${props.id}`}>
      <div className ='game'>
        <h3 id={props.id} className='titles'>{props.title}</h3>
        <img id={props.id} className='thumbnails' src={props.thumbnail} alt={props.title}/>
      </div>
    </Link>
  )
}



export default Game;
