import React, { Component } from 'react';
import Spinner from '../spinner';

import './item-list.css';

export default class ItemList extends Component {



  state = {
    loading: true,
    starItem: null
  }

  componentDidMount = () => {
    this.props.getResurs()
      .then(this.updateCharacter)
      .catch(this.onError)
  }



  onError = () => {
    console.error('mistake')
  }



  updateCharacter = (starItem) => {

    this.setState({
      starItem,
      loading: false
    })
  }

  renderItem = (arr) => {
    return arr.map((item) => {
      const { id } = item;
      const label = this.props.children(item);
      return <li
        className="list-group-item"
        key={id}
        onClick={() => this.props.onItemSelected(id)}
      >{label}</li>
    })
  }



  render() {
    const { starItem } = this.state;

    if (!starItem) {
      return <Spinner />
    }
    const viewItem = this.renderItem(starItem);

    return (
      <ul className="item-list list-group">
        {viewItem}
      </ul>
    );
  }
}