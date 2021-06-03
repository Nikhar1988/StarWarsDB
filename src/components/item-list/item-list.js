import React, { Component } from 'react';
import SwapiService from '../../service/swapi-service';
import Spinner from '../spinner';

import './item-list.css';

export default class ItemList extends Component {

  swapiService =  new SwapiService();

state ={
  loading: true,
  starCharacter: null
}

  componentDidMount = () => {
    this.swapiService.getAllPeople()
      .then(this.updateCharacter)
      .catch(this.onError)
  }



onError = () => {
  console.error('mistake')
} 



updateCharacter = (starCharacter) => {
  
    this.setState({
      starCharacter,
      loading: false
    })
}

renderItem = (arr) => {
    return arr.map(({id, name}) => {
      return <li 
      className="list-group-item"
      key = {id}
      /* onClick={() => this.props.onItemSelected(id)}  */
      >{name}</li>
  }) 
}



  render() {
    const {starCharacter} = this.state;

    if (!starCharacter) {
      return <Spinner/>
    }
   const viewCharacter = this.renderItem(starCharacter);

    return (
      <ul className="item-list list-group">
        {viewCharacter}
      </ul>
    );
  }
}