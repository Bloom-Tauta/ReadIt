import React, { useState } from 'react';
import './search.css'

function Search({ articles, setFilteredArticles }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
    filterArticles(event.target.value);
  };

  const filterArticles = (term) => {
    if (!articles) return; // Add this line to check for undefined articles
    const filtered = articles.filter((item) =>
      item.genre.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredArticles(filtered);
  };
  

  return (
    <div className="search-container">
      <label htmlFor="genre-search" className="search-label">Search by genre:</label>
      <input
        type="text"
        id="genre-search"
        className="search-input"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />


    </div>
  );
}

export default Search;

