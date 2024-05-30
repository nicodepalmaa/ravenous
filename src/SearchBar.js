import React, { useState } from "react";
import styles from "./SearchBar.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = ({ searchYelp }) => {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState("best_match");

  const getSortByClass = (sortByOption) => {
    if (sortBy === sortByOption) {
      return 'active';
    }
    return "";
  };

  const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption);
  };

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  }

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
    searchYelp(term, location, sortBy);
  }
  
  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li 
          className={getSortByClass(sortByOptionValue)}
          key={sortByOptionValue} onClick={() => {
            handleSortByChange(sortByOptionValue);
          }}
        >
          {sortByOption}
        </li>
      );
    });
  };


  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" onChange={handleTermChange} />
        <input placeholder="Where?" onChange={handleLocationChange} />
      </div>
      <div className="SearchBar-submit">
        <button onClick={handleSubmit}>Let's Go</button>
      </div>
    </div>
  );
};

export default SearchBar;