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
        <div className="dayData">
          <h1 className='day'>Monday</h1>
          <p className='dataa'>24 Dec, 2023</p>

        </div>
        <div className="temperture">
          <h1 className='units'>26°C</h1>
          <span className='highLow'>
            <strong>High:</strong> 27°C &nbsp;|&nbsp; <strong>Low:</strong> 10°C
          </span>

          <img className='cloud' src="/images/cloud.svg" alt="" />
          <img className='cloudSmall' src="/images/cloud.svg" alt="" />


          <img className='sunny_cloudy' src="/images/sunny_cloudy.svg" alt="" />

        <div className="feel_weather">
          <h1 className='feel'>Cloudy</h1>
           <span className='highLow'>
            Feel like &nbsp;&nbsp;26
          </span>


        </div>
        </div>

      </div>



    )
  }
}
