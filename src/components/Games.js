import React from 'react';
import '../styles/Games.css';

const Games = (props) => {
  const gameCards = props.allGames.map(game => {
    return (
      <h1>hiiii</h1>
    )
  })

  return (
    <div className='games'>
      {gameCards}
    </div>
  )
}


export default Games;
