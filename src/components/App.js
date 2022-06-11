import React, { Component } from 'react';
import '../styles/App.css';
import Games from './Games';
// import gameData from '../data';
// import { fetchData } from '../apiCalls';
import GameDetails from './GameDetails';
import Header from './Header';
import ErrorMessage from './ErrorMessage';
import { Route, Switch } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
      games: [],
      searchedGames: [],
      query: '',
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
    fetch('https://mmo-games.p.rapidapi.com/games', options)
	    .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(response.statusText)
        }
      })
      .then(data => {
      console.log('games data', data)
      return this.setState({ games: data })
    })
      .catch(error => {
        this.setState({ error: true })
      })
  }

  // componentDidMount = () => {
    // fetchData()
    // .then(response => response.json())
    // .then(data => this.setState({games: data.games}))


    // this.setState({games: gameData.games})
    // console.log("games", gameData.games);
  // }

  searchGame = (event) => {
    const result = this.state.games.filter(game => {
      return game.title.toUpperCase().includes(event.target.value.toUpperCase())
    })
    this.setState({ query: event.target.value, searchedGames: result })
  }

  clearSearchGame = () => {
    this.setState({ searchedGames: [], query: '' })
  }

  render() {
    if (this.state.error) {
      return (<ErrorMessage />)
    } else {
      return (
        <main className='app'>
          <Header searchGame={this.searchGame} query={this.state.query} clearSearchGame={this.clearSearchGame} />
          <Switch>
            <Route exact path='/' render={() =>
              {if (!this.state.searchedGames.length && !this.state.query) {
                return (<Games allGames={this.state.games} />)
              } else if (!this.state.searchedGames.length) {
                return (<ErrorMessage />)
              } else {
                return (<Games allGames={this.state.searchedGames} />)
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
}

export default App;
