import React, { Component } from 'react'
import './CitiesWeatherCard.css'

function CitiesWeatherCard(props) {

    return (
        <div>
            <div className="CitiesCard">
                <h1 className='CitiesCard_uint'>{props.uint}</h1>
                <p className='H_L'>{props.H_L}</p>
                <h1 className='CitiesCard_city'>{props.city}</h1>
                <img className='CitiesCard_image' src={process.env.PUBLIC_URL +"/images/sun.svg"} alt="" />
            </div>
        </div>
    )

}



export default CitiesWeatherCard 