import React from 'react';

import './search-panel.css';

const SearchPanel = ({ onUpdate }) => {

  const onUbdateSearch = (e) => {
    const searchData = e.target.value;

    onUpdate(searchData); // передается наверх
  }


  return (
    <input type="text"
      className="form-control search-input"
      placeholder="type to search"
      onChange={onUbdateSearch}
    />
  );
};

export default SearchPanel;