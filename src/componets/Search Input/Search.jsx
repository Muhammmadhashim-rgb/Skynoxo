import React, { Component } from 'react'
import './Search.css';

export default class Search extends Component {
   render() {
      return (
         <div className='search'>
            <img  className='search-icon' src="/images/search.svg" alt="" />
            <input className='SearchInput' type="search" placeholder='Search City...' />
         </div>
      )
   }
}
