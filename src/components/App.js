import React, { Component } from 'react';
import '../styles/App.css';
import Games from './Games';
import gameData from '../data';


class App extends Component {
  constructor() {
    super();
    this.state = {
      games: []
    }
  }

  componentDidMount = () => {
    this.setState({games: gameData.games})
    console.log("games", gameData.games);
  }

  render() {
    return (
      <main className='app'>
        <Games allGames={this.state.games} />
      </main>
    )
  }

}

export default App;
