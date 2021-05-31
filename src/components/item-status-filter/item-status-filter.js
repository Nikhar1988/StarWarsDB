import React, { Component } from 'react';

import './item-status-filter.css';


export default class ItemStatusFilter extends Component {

  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' }
  ];

  render() {
    const { onActiveDone, activeStatus } = this.props;
    const button = this.buttons.map(({ name, label }) => {
      const activeSt = activeStatus === name;
      const clazz = activeSt ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button type="button"
          className={`btn ${clazz}`}
          onClick={() => onActiveDone(name)}
          key={name}>
          {label}</button>
      )
    })
    return (
      <div className="btn-group">
        {button}
      </div>
    )
  }
}

