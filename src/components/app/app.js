import React, { Component } from 'react';
import ErrorButton from '../error-button/'
import Header from '../header/';
import RandomPlanet from '../random-planet/';
import ItemList from '../item-list/';
import PersonDetails from '../person-details/';

// https://github.com/Juriy/pro-react-redux
import './app.css';


export default class App extends Component {


  state = {
    selectedChar: null,
    showRandomPlanet: true
  }

  onDetailSelectedChar = (id) => {
    this.setState({
      selectedChar: id
    })
  }

  toggleRandomPlanet = () => {
    this.setState( state => ({
      showRandomPlanet: !state.showRandomPlanet
    }))
  }


  render() {
    const { selectedChar,showRandomPlanet } = this.state;
console.log(showRandomPlanet)
    const randomPlanet = showRandomPlanet ? <RandomPlanet /> : null;
    return (
      <div>
        <Header />
        {randomPlanet}
        <ToggleRandomPlanet toggleRandom={this.toggleRandomPlanet}/>
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onDetailSelectedChar} />
          </div>
          <div className="col-md-6">
            <PersonDetails idSelected={selectedChar} />
          </div>
        </div>
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