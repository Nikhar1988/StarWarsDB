import React from 'react';

import './item-status-filter.css';

const ItemStatusFilter = ({ onActiveDone }) => {


  return (
    <div className="btn-group">
      <button type="button"
        className="btn btn-info"
        onClick={() => onActiveDone('all')}>All</button>
      <button type="button"
        className="btn btn-outline-secondary"
        onClick={() => onActiveDone('done')}>Active</button>
      <button type="button"
        className="btn btn-outline-secondary"
        onClick={() => onActiveDone('noDone')}>Done</button>
    </div >
  )


}

export default ItemStatusFilter;

