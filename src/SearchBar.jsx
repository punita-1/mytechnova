import React, { useState } from 'react';
import './Searchbar.css';
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  const handleClear = (event) => {
    event.preventDefault();
    setQuery("");
    onSearch("");
  };

  const handleSearchChange = (e) => {
    // e.preventDefault();
    setQuery(e.target.value);
    onSearch(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className='m-3'>
      <input
        type="text"
        id="search-input"
        placeholder="Search here"
        value={query}
        onChange={handleSearchChange}
      />
      {/* <button id="search-button" type="submit" className='btn btn-primary me-2'>Search</button> */}
      <button onClick={handleClear} className='btn btn-primary mx-2 btn-lg'>Clear</button>
    </form>
  );
};

export default SearchBar;