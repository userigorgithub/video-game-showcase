import React from 'react';
import '../styles/Game.css';

const Game = (props) => {
  return (
    <div className='game'>
      <h3 id={props.id} className='titles'>{props.title}</h3>
      <img id={props.id} className='thumbnails' src={props.thumbnail} alt={props.title}/>
    </div>
  )
}



export default Game;
