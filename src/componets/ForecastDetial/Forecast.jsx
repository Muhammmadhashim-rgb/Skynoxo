import React, { Component } from 'react'
import './Forecast.css';  // ✅ CSS File Imported

export default class Forecast extends Component {
   render() {
      return (
         <div className='Forecast_background'>
            <h1 className='Forecast_heading'>Today / Week</h1>

            <div className="oneHoureForecast">
                     
            </div>
         </div>


      )
   }
}
