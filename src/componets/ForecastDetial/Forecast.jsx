import React, { Component } from 'react'
import './Forecast.css';  // ✅ CSS File Imported
import TimeForecast from './TimeForacast';
import TimeForecastSide from './TimeForecastSide';



export default class Forecast extends Component {
   render() {
      return (
         <div className='Forecast_background'>
            <h1 className='Forecast_heading'>Today / Week</h1>
            <div className="oneHoureForecast">
               <TimeForecast time="1PM" icon="/images/time_Cloud.svg" unit="20"/>
               <TimeForecast time="2PM" icon="/images/time_Cloud.svg" unit="21"/>
               <TimeForecast time="3PM" icon="/images/time_Cloud.svg" unit="18"/>
               <TimeForecast time="4PM" icon="/images/time_Cloud.svg" unit="23"/>
               <TimeForecast time="5PM" icon="/images/time_Cloud.svg" unit="27"/>
               <TimeForecast time="6PM" icon="/images/time_Cloud.svg" unit="30"/>
               <TimeForecast time="7PM" icon="/images/time_Cloud.svg" unit="19"/>
            </div>
            <div className="tomorrow_Forecast">
               <h1 className='tomorrow_Forecast_heading'>
                  Tomorrow
               </h1>
         <p className='tomorrow_Forecast_para'>
            Thunder storm
         </p>
         <h2 className='tomorrow_Forecast_unit'>
            14°
         </h2>
         <img className='thunderstorm_cloud' src="/images/thunderstorm_cloud.gif" alt="" />
            </div>

            <div className="timeForecast">
               <TimeForecastSide heading="Sunrise"/>
               <TimeForecastSide time="6:45"/>
               <TimeForecastSide ampm="AM"/>
                  <TimeForecastSide heading="Sunrise"/>
                   <TimeForecastSide time="6:45"/>
               <TimeForecastSide ampm="AM"/>
            </div>
         </div>


      )
   }
}
