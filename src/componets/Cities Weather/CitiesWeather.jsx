import React, { Component } from 'react'
import './CitiesWeather.css'
import CitiesWeatherCard from './CitiesWeatherCard'

export default class CitiesWeather extends Component {
    render() {
        return (
            <div className='CitiesWeather_row'>
                <h1 className='CitiesWeather_heading'>Other Cities</h1>
                <div className='CitiesWeather_btn'>Show All</div>

                <CitiesWeatherCard uint="14°" H_L="H23° L10°" city="USA" />
                <CitiesWeatherCard uint="16°" H_L="H26° L10°" city="UK" />
                <CitiesWeatherCard  uint="18°" H_L="H73° L10°" city="Dubai" />
                <CitiesWeatherCard uint="21°" H_L="H43° L10°" city="Egypt" />
            </div>
        )
    }
}
