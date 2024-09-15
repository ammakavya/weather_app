import React, { useState } from "react";
import "./Searchbar.css"; // Import the CSS file for styling
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState([]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(city);  // Call the parent function with the new city
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query); // Pass the search query to the parent component
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search..."
        className="search-input"
      />
    <div className="search-button">
    <SearchIcon/>
    </div>
    </form>
  );
};

export default Searchbar;
