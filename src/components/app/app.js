import React, { Component } from 'react';
import ErrorButton from '../error-button/'
import Header from '../header/';
import RandomPlanet from '../random-planet/';
import PeoplePage from '../people-page';
import ErrorIndicator from '../error-indicator';

// https://github.com/Juriy/pro-react-redux
import './app.css';


export default class App extends Component {

  state = {
    selectedChar: null,
    showRandomPlanet: true,
    hasError: false
  }

 

  toggleRandomPlanet = () => {
    this.setState( state => ({
      showRandomPlanet: !state.showRandomPlanet
    }))
  }

  componentDidCatch = () => {
    console.log('componentDidCatch');
    this.setState({
      hasError: true
    })
  }

  render() {
    const {showRandomPlanet, hasError } = this.state;
    if (hasError) {
      return <ErrorIndicator/>
    }
    
    const randomPlanet = showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <div>
        <Header />
        {randomPlanet}
        <ToggleRandomPlanet toggleRandom={this.toggleRandomPlanet}/>
        <PeoplePage/>
      </div>
    )
  }
}

const ToggleRandomPlanet = ({toggleRandom}) => {
  return (
      <>
        <div className="mb2 button-row marge ">
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={toggleRandom}>
            Toggle Random Planet
          </button>
          <ErrorButton />
          </div> 
       
      </>
      
  )
}