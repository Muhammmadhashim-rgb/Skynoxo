import React, { useState } from 'react'
import './WeatherCard.css'
import TemperatureCard from './TemperatureCard';
import getWeather from '../ApI/Api';





getWeather("Karachi").then((data) => {
  console.log(data);
});

function WeatherCard() {

  const [city, setcity] = useState("")
  const [weather, setwether] = useState({})



  const getWeatherbycity = async () => {
    const weatherData = await getWeather(city)
    setwether(weatherData)
    setcity("")
  }

  return (



    <div className=' weatherCard_row background '>
      <div className="weatherCard_col_1">

        <div className="loction">
          <img src="/images/location_icon.svg" alt="" />
          <h1>India</h1>
        </div>

        <div className="dayData">
          <h1 className='day'>Monday</h1>
          <p className='dataa'>24 Dec, 2023</p>

          <img className='cloud' src="/images/cloud.svg" alt="" />
        </div>

        <TemperatureCard />


      </div>


      <div className="weatherCard_col_2">

        <img className='sunny_cloudy' src="/images/sunny_cloudy.svg" alt="" />
        <div className="feel_weather">
          <h1 className='feel'>Cloudy</h1>
          <span className='highLow'>
            Feel like 26
          </span>

          <img className='cloudSmall' src="/images/cloud.svg" alt="" />

        </div>
      </div>


    </div>



  )
}




export default WeatherCard