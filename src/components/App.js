import React, { Component } from 'react';
import '../styles/App.css';
import PropTypes from 'prop-types';
import Games from './Games';
import { fetchData } from '../apiCalls';
import GameDetails from './GameDetails';
import Header from './Header';
import Footer from './Footer';
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
    fetchData('/')
      .then(data => {
        return this.setState({ games: data })
      })
      .catch(error => {
        this.setState({ error: true })
      })
  }

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
                return (<Games games={this.state.games} />)
              } else if (!this.state.searchedGames.length) {
                return (<ErrorMessage />)
              } else {
                return (<Games games={this.state.searchedGames} />)
              }}
            } >
            </Route>
            <Route exact path='/:id' render={({match}) =>
              <GameDetails id={match.params.id} /> } >
            </Route>
          </Switch>
          <Footer />
        </main>
      )
    }
  }
}

export default App;

App.defaultProps = {
  error: false
}
