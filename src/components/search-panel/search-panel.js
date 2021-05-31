import React from 'react';

import './search-panel.css';

const SearchPanel = ({onUbdateSearch}) => {
  return (
    <input type="text"
              className="form-control search-input"
              placeholder="type to search" 
              onChange={onUbdateSearch}/>
  );
};

export default SearchPanel;