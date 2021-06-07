import React, { Component } from 'react';
import ErrorButton from '../error-button/'
import Header from '../header/';
import RandomPlanet from '../random-planet/';
import PeoplePage from '../people-page';
import ErrorIndicator from '../error-indicator';
import Row from '../row';
import ItemDetails, {Record} from '../item-details';
import SwapiService from '../../service/swapi-service';

// https://github.com/Juriy/pro-react-redux
import './app.css';


export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    selectedChar: null,
    showRandomPlanet: true,
    hasError: false
  }



  toggleRandomPlanet = () => {
    this.setState(state => ({
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
    const { showRandomPlanet, hasError } = this.state;
    if (hasError) {
      return <ErrorIndicator />
    }
    const randomPlanet = showRandomPlanet ? <RandomPlanet /> : null;

    const {getPerson, getStarship, getPersonImage, getStarshipImage} = this.swapiService;

    const personlDetails = (
      <ItemDetails
        idSelected={11}
        getData={getPerson}
        getImageUrl={getPersonImage}>
          
        <Record field = 'gender' label = 'Gender' />
        <Record field = 'birthYear' label = 'Birth Year' />
        <Record field = 'eyeColor' label = 'Eye Color' />

      </ItemDetails>
    )


    const startshipDetails = (
      <ItemDetails
        idSelected={9}
        getData={getStarship} 
        getImageUrl={getStarshipImage}>

        <Record field = 'model' label = 'Model' />
        <Record field = 'length' label = 'Length' />
        <Record field = 'passengers' label = 'Passengers' />
        <Record field = 'manufacturer' label = 'Manufacturer' />

      </ItemDetails>
    )



    return (
      <div>
        <Header />
        <Row
          left={personlDetails}
          right={startshipDetails} />
      </div >
    )
  }
}

const ToggleRandomPlanet = ({ toggleRandom }) => {
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