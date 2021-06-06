import React, { Component } from 'react';
import Row from '../row';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import SwapiService from '../../service/swapi-service';
import ErrorBoundry from '../error-boundry';

import './people-page.css'

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedChar: null,
  }



  onDetailSelectedChar = (id) => {
    this.setState({
      selectedChar: id
    })
  }


  render() {
    const { selectedChar } = this.state;

    const itemList =
      <ItemList onItemSelected={this.onDetailSelectedChar}
        getResurs={() => this.swapiService.getAllPeople()}>
        {({ name, birthYear }) => `Name:${name} Birth Year:${birthYear}`}</ItemList>

    const personalDetails = (
      <ErrorBoundry>
        <ItemDetails idSelected={selectedChar} />
      </ErrorBoundry>
    )

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personalDetails} />
      </ErrorBoundry>

    )
  }
}

