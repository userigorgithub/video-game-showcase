import React from 'react';
import '../styles/Game.css';

const Game = (props) => {
  return (
    <div className='game'>
      <h2 id={props.id} className='titles'>{props.title}</h2>
    </div>
  )
}



export default Game;
