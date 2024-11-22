import React, { useState } from "react";

const SearchBar = ({ onFilter }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onFilter(query);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={handleSearch}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
