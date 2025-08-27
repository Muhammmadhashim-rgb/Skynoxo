import React from 'react'
import './Search.css';

function Search({ value, onChange, onSearch }) {

   const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
         onSearch(value);
      }
   }

   return (
      <div className="search">
         <img className="search-icon" src={process.env.PUBLIC_URL +"/images/search.svg"} alt="Search" />
         <input
            id="search-city"
            name="search-city"
            className="SearchInput"
            value={value}
            onChange={onChange}
            onKeyDown={handleKeyDown}
            type="search"
            placeholder="Search City..."
            
         />

      </div>
   )
}

export default Search;
