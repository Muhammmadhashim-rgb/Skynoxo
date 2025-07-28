import React, { Component } from 'react'
import './WeatherCard.css'

export default class WeatherCard extends Component {
  render() {
    return (
      <div className='background'>
        <div className="loction">
         <img src="/images/location_icon.svg" alt="" />
         <h1>India</h1>
        </div>
      </div>
    )
  }
}
