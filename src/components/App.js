import React, { Component } from 'react';
import '../styles/App.css';
import Games from './Games';
// import gameData from '../data';
// import { fetchData } from '../apiCalls';
import GameDetails from './GameDetails';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
      games: [],
      searchedGames: [],
      query: ''
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
      console.log('games res', response)
      return response.json()
    })
      .then(data => {
      console.log('games data', data)
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

  searchGame = (event) => {
    // this.setState({ query: event.target.value, searchedGames: this.state.games})
    const result = this.state.games.filter(game => {
      return game.title.toUpperCase().includes(event.target.value.toUpperCase())
    })
    this.setState({ query: event.target.value, searchedGames: result })
  }


  render() {
    return (
      <main className='app'>
        <Header searchGame={this.searchGame} query={this.state.query} />
        <Switch>
          <Route exact path='/' render={() =>
            {if (this.state.searchedGames.length) {
              return (<Games allGames={this.state.searchedGames} />)
            } else {
              return (<Games allGames={this.state.games} />)
            }}
          } >
          </Route>
          <Route exact path='/:id' render={({match}) =>
            <GameDetails id={match.params.id} /> } >
          </Route>
        </Switch>
      </main>
    )
  }

}

export default App;
