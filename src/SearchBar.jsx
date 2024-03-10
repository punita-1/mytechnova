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

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="search-input"
        placeholder="Search here"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button id="search-button" type="submit" className='btn btn-primary me-2'>Search</button>
      <button onClick={handleClear} className='btn btn-primary me-2'>Clear</button>
    </form>
  );
};

export default SearchBar;