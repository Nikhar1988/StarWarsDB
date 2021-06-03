import React, { Component } from 'react';
import SwapiService from '../../service/swapi-service'
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './random-planet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: null
  }

  componentDidMount = () => {
    this.loadingService();
    const planetInterval = setInterval(this.loadingService, 3000);
    /* clearInterval(planetInterval) */
  }

  loadingService = () => {
    const id = Math.floor(Math.random() * 25) + 2;
    this.swapiService.getPlanet(id)
      .then(this.updatePlanet)
      .catch(this.onError)
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    })
  }


  updatePlanet = (planet) => {
    this.setState({
      planet,
      loading: false,
      error: false
      
    })
  }


  render() {

    const { planet, loading, error } = this.state;
    const errorMessage = error ? <ErrorIndicator /> : null;
    const content = !(loading || error) ? <PlanetView planet={planet} /> : null ;
    const spinner = loading ? <Spinner /> : null;
    return (
      <div className="random-planet jumbotron ">
        {errorMessage}
        {content}
        {spinner}
      </div>

    );
  }
}

const PlanetView = ( {planet} ) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  return (
    <>
      <img className="planet-image"
           src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </>
  )
}

