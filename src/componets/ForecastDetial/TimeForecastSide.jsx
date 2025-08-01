import React, { Component } from 'react'
import './TimeForecastSide.css'

function TimeForecastSide(props) {
   return (
      <div>
         <p className='timeForecast_heading'>{props.heading}</p>
         <h1 className='timeForecast_time'>{props.time}</h1>
         <p className='timeForecast_ampm'>{props.ampm}</p>

      </div>
   )
}




export default TimeForecastSide