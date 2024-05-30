import './App.css';
import BusinessList from './BusinessList';
import SearchBar from './SearchBar';
import Yelp from './utils/yelpAPI';
import React, { useState } from 'react';

function App(props) {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = async (term, location, sortBy) => {
    const businesses = await Yelp.search(term, location, sortBy);
    setBusinesses(businesses);
  };

  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp}/>
      <BusinessList businesses={businesses}/>
    </div>
  );
}

export default App;
