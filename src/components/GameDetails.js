import React, { Component } from 'react';
import '../styles/GameDetails.css';
import PropTypes from 'prop-types';
import { fetchDataSingleGame } from '../apiCalls';
import ErrorMessage from './ErrorMessage';

class GameDetails extends Component {
  constructor() {
    super();
    this.state = {
      game: '',
      error: false
    }
  }

  componentDidMount = () => {
    fetchDataSingleGame(`/game?id=${this.props.id}`)
      .then(data => {
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
        <div className='game-img' style={{backgroundImage: `url(${this.state.game.thumbnail})`}} src={this.state.game.thumbnail} alt={this.state.game.title}>
          <div className='game-details'>
            <h3 className='game-details-title'>Title: {this.state.game.title}</h3>
            <p className='game-details-short-description'>Description: {this.state.game.short_description}</p>
            <p className='game-details-game-url'>Website: <a href={this.state.game.game_url} target='blank'>{this.state.game.game_url}</a></p>
            <p className='game-details-status'>Status: {this.state.game.status}</p>
            <p className='game-details-genre'>Genre: {this.state.game.genre}</p>
            <p className='game-details-platform'>Platform: {this.state.game.platform}</p>
            <p className='game-details-publisher'>Publisher: {this.state.game.publisher}</p>
            <p className='game-details-developer'>Developer: {this.state.game.developer}</p>
            <p className='game-details-release-date'>Release Date: {this.state.game.release_date}</p>
          </div>
        </div>
      )
    }
  }
}

export default GameDetails;

GameDetails.defaultProps = {
  error: false
}
