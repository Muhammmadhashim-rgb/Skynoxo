import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css';  // ✅ CSS File Imported



export default class Header extends Component {
  static propTypes = {
    prop: PropTypes.any 
  }

  render() {
    return (
    
      <div className="header">
        <img src="/images/logo.png" alt="App Logo"/>
      </div>
      
    );
  }
}
