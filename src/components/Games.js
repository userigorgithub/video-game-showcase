import React from 'react';
import '../styles/Games.css';
import Game from './Game';

const Games = (props) => {
  const gameCards = props.allGames.map(game => {
    return (
      <Game
        id={game.id}
        key={game.id}
        title={game.title}
        thumbnail={game.thumbnail}
      />
    )
  })

  return (
    <div className='games'>
      {gameCards}
    </div>
  )
}

export default Games;
