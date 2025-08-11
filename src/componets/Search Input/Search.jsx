import React, { Component } from 'react'
import './Search.css';


function Search({ value, onChange, onSearch }) {


   const handleKeyDown = (a) => {
      if (a.key === 'Enter') {
         onSearch();
      }
   }

   return (
      <div className='search'>
         <img className='search-icon' src="/images/search.svg" alt="" />
         <input className='SearchInput px-4' value={value}
            onChange={onChange}
            onKeyDown={handleKeyDown} type="search" placeholder='Search City...' />
         {/* <button onClick={onSearch}>Search</button> */}
      </div>

   )
}



export default Search 