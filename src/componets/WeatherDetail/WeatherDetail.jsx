import React, { Component } from 'react'
import './WeatherDetail.css'
import WeatherBox from './WeatherBox'


function WeatherDetail() {

   return (
      <div className='WeatherDetailBackground'>
         <WeatherBox boxHeading="Wind Status" boxImage={process.env.PUBLIC_URL +"/images/growth-chart.gif"}/>
         <WeatherBox boxHeading="Wind Status" boxImage={process.env.PUBLIC_URL +"/images/uv-index.gif"}/>
            <WeatherBox boxHeading="Wind Status" boxImage={process.env.PUBLIC_URL+ "/images/chart.gif"}/>
         <WeatherBox boxHeading="Wind Status" boxImage={process.env.PUBLIC_URL+ "/images/main-scene.gif"}/>
      </div>
   )


}



export default WeatherDetail 