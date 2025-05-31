import React, { Component } from 'react';
import '../styles/BackToTopButton.css';

class BackToTopButton extends Component {
    constructor() {
        super();
        this.state = {
            isVisible: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.toggleVisibleButton)
    }

    componentWillUnmount() {
        window.addEventListener('scroll', this.toggleVisibleButton)
    }

    toggleVisibleButton = () => {
        if (window.pageYOffset > 300) {
            this.setState({ isVisible: true })
        } else {
            this.setState({ isVisible: false })
        }
    }

    scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    render() {
        if (!this.state.isVisible) {
            return null
        }
        
        return (
            <button className='back-to-top-button' onClick={this.scrollToTop}>↑</button>
        )
    }
}

export default BackToTopButton;