import React, { Component } from 'react'
import './Search.css';

export default class Search extends Component {
   render() {
      return (
         <div className='search mt-5 ps-3'>
            <img  className='search-icon' src="/images/search.svg" alt="" />
            <input className='SearchInput px-4' type="search" placeholder='Search City...' />
         </div>
      )
   }
}
