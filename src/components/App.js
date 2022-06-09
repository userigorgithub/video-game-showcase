import React, { Component } from 'react';
import '../styles/App.css';
import Games from './Games';


class App extends Component {
  constructor() {
    super();
    this.state = {
      games: []
    }
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
