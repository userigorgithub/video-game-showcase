import React, { Component } from 'react';
import '../styles/App.css';
import Games from './Games';
// import gameData from '../data';
// import { fetchData } from '../apiCalls';


class App extends Component {
  constructor() {
    super();
    this.state = {
      games: []
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
    fetch('https://mmo-games.p.rapidapi.com/games', options)
	    .then(response => {
      console.log(response)
      return response.json()
    })
      .then(data => {
      console.log(data)
      return this.setState({ games: data })
    })
	  // .then(response => console.log(response))
  .catch(err => console.log('errrror'));
	// .catch(err => console.error(err));
  }

  // componentDidMount = () => {
    // fetchData()
    // .then(response => response.json())
    // .then(data => this.setState({games: data.games}))


    // this.setState({games: gameData.games})
    // console.log("games", gameData.games);
  // }

  render() {
    return (
      <main className='app'>
        <Games games={this.state.games} />
      </main>
    )
  }

}

export default App;
