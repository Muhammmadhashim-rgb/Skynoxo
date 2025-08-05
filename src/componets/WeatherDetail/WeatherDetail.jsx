import React, { Component } from 'react'
import './WeatherDetail.css'
import WeatherBox from './WeatherBox'


function WeatherDetail() {

   return (
      <div className='WeatherDetailBackground'>
         <WeatherBox boxHeading="Wind Status" boxImage="/images/Growth Chart.gif"/>
         <WeatherBox boxHeading="Wind Status" boxImage="/images/Growth Chart.gif"/>
         <WeatherBox boxHeading="Wind Status" boxImage="/images/uv index.gif"/>
      </div>
   )


}



export default WeatherDetail 