import React, { Component } from 'react';
import SwapiService from '../../service/swapi-service';
import Spinner from '../spinner';
import ErrorButton from '../error-button';

import './item-details.css';

const Record = ({item, field, label}) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li> 
  )
}

export {
  Record
};

export default class ItemDetails extends Component {

  swapiService = new SwapiService();

  state = {
    item: null,
    loading: false,
    image: null
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
    const { idSelected, getData, getImageUrl } = this.props;
    if (!idSelected) {
      return;
    }

    getData(idSelected)
      .then((item) => {
        this.setState({
          item,
          loading: false,
          image: getImageUrl(item)
        })
      })


  }

  render() {
    console.log(this.state.item) 
    console.log(this.state.image)
    if (!this.state.item) {
      return <h3>Выберите персонажа...</h3>
    }
    const { item, loading, image } = this.state;

    const children =  React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {item})
    });

    const content = loading ? <Spinner /> : <Item item={item} image={image} children={children} />;

    return (
      <div className="item-details card">
        {content}
      </div>
    )
  }
}

const Item = ({ item, image, children }) => {
  
  return (
    <>
      <img className ="item-image"
        src={image} />
      <div className ="card-body">
        <h4>{item.name}</h4>
        <ul className="list-group list-group-flush">
            {children}
        </ul>
        <ErrorButton />
      </div>

    </>

  )
}