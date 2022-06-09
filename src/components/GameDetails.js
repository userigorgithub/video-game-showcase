import React, { Component } from 'react';
import '../styles/GameDetails.css';
import App from './App';


class GameDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: ''
    }
  }

  componentDidMount = () => {
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9ed5acaa8fmshf12dc90a1184bd6p121c27jsna84ebf2de73e',
		'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
	}
};

fetch(`https://mmo-games.p.rapidapi.com/game?id=${this.props.id}`, options)
// fetch('https://mmo-games.p.rapidapi.com/game?id=452', options)
	.then(response => {
    console.log('single game', response)
    return response.json()
  })

  .then(data => {
    console.log('single game data', data)
    return this.setState({ game: data })
  })
	.catch(err => console.log('err'));
}


  render() {
    return (
      <div className='game-details'>
        <h2 className='game-details-title'>Title: {this.state.game.title}</h2>
      </div>
    )
  }
}

export default GameDetails;
