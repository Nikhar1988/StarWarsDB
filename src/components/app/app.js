import React, { Component } from 'react';

import Header from '../header/';
import RandomPlanet from '../random-planet/';
import ItemList from '../item-list/';
import PersonDetails from '../person-details/';

// https://github.com/Juriy/pro-react-redux
import './app.css';


export default class App extends Component {


  state = {
    selectedChar: null
  }

  onDetailSelectedChar = (id) => {
    this.setState({
      selectedChar: id
    })
  }




  render() {
    const { selectedChar } = this.state;
    return (
      <div>
        <Header />
        <RandomPlanet />

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

