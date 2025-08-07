import React, { Component } from 'react'
import './CitiesWeather.css'
import CitiesWeatherCard from './CitiesWeatherCard'

export default class CitiesWeather extends Component {
    render() {
        return (
            <div className='CitiesWeather_row'>
                <h1 className='CitiesWeather_heading'>Other Cities</h1>
                <div className='CitiesWeather_btn'>Show All</div>

                <CitiesWeatherCard />
                <CitiesWeatherCard />
                <CitiesWeatherCard />
                <CitiesWeatherCard />
            </div>
        )
    }
}
