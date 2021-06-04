import React, { Component } from 'react';
import SwapiService from '../../service/swapi-service';
import Spinner from '../spinner';

import './person-details.css';

export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  state = {
    person: null,
    loading: false
  }

  componentDidMount = () => {
    this.updatePerson();
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.idSelected !== prevProps.idSelected) {
      this.updatePerson();
      this.setState({
        loading: true
      })
    }
  }

  updatePerson = () => {
    const { idSelected } = this.props;
    if (!idSelected) {
      return;
    }

    this.swapiService.getPerson(idSelected)
      .then((person) => {
        this.setState({
          person,
          loading: false
        })
      })


  }

  render() {
    console.log(this.state.person)
    if (!this.state.person) {
      return <h3>Выберите персонажа...</h3>
    }
    const { person, loading } = this.state;
    const content = loading ? <Spinner /> : <Person person={person} />;

    return (
      <div className="person-details card">
        {content}
      </div>
    )
  }
}

const Person = ({ person }) => {
  const { id, name, gender, birthYear, eyeColor } = person;
  return (
    <>
      <img className="person-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
        
      </div>

    </>

  )
}