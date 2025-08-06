import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css';  // ✅ CSS File Imported
import ToggleSwitch from './ToggleSwitch';



export default class Header extends Component {
  static propTypes = {
    prop: PropTypes.any 
  }

  render() {
    return (
    
      <div className="header mx-4 my-5">
        <img className='logo' src="/images/logo.png" alt="App Logo"/>
         <h1 className='logo-text'>Skynoxo</h1>
         <div className="header_icons">
          <img className='icon' src="/images/header icon 1.svg" alt="header icon 1" />
          <img className='icon' src="/images/header icon 2.svg" alt="header icon 2" />
          <img className='icon' src="/images/header icon 3.svg" alt="header icon 3" />
          <img className='icon' src="/images/header icon 4.svg" alt="header icon 4" />
          <img className='icon' src="/images/header icon 5.svg" alt="header icon 5" />
         </div>

         <img className='header_arrow_right' src="/images/header icon 6.svg" alt="" />
         
         <ToggleSwitch/>
      </div>
      
    );
  }
}
