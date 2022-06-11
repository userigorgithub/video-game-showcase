import React, { Component } from 'react';
import '../styles/GameDetails.css';
// import App from './App';
import ErrorMessage from './ErrorMessage';


class GameDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: '',
      error: false
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
    if (response.ok) {
      return response.json()
    } else {
      throw new Error(response.statusText)
    }
  })
  .then(data => {
    console.log('single game data', data)
    return this.setState({ game: data })
  })
	.catch(error => {
    this.setState({ error: true })
  })
}


  render() {
    if (this.state.error) {
      return (<ErrorMessage />)
    } else {
      return (
        <div className='game-details'>
          <h2 className='game-details-title'>Title: {this.state.game.title}</h2>
        </div>
      )
    }
  }
}

export default GameDetails;
