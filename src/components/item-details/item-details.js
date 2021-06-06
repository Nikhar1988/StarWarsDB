import React, { Component } from 'react';
import SwapiService from '../../service/swapi-service';
import Spinner from '../spinner';
import ErrorButton from '../error-button';

import './item-details.css';

export default class ItemDetails extends Component {

  swapiService = new SwapiService();

  state = {
    item: null,
    loading: false
  }

  componentDidMount = () => {
    this.updateItem();
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.idSelected !== prevProps.idSelected) {
      this.updateItem();
      this.setState({
        loading: true
      })
    }
  }

  updateItem = () => {
    const { idSelected } = this.props;
    if (!idSelected) {
      return;
    }

    this.swapiService.getPerson(idSelected)
      .then((item) => {
        this.setState({
          item,
          loading: false
        })
      })


  }

  render() {
    console.log(this.state.item)
    if (!this.state.item) {
      return <h3>Выберите персонажа...</h3>
    }
    const { item, loading } = this.state;
    const content = loading ? <Spinner /> : <Item item={item} />;

    return (
      <div className="item-details card">
        {content}
      </div>
    )
  }
}

const Item = ({ item }) => {
  const { id, name, gender, birthYear, eyeColor } = item;
  return (
    <>
      <img className="item-image"
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
        <ErrorButton />
      </div>

    </>

  )
}