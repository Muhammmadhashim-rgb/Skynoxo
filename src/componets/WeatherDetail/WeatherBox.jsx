import React, { props } from 'react'
import './WeatherBox.css'

function WeatherBox(props) {

    return (
        <div>
            <div className="boxBackground">
                <p className='boxHeading'>{props.boxHeading}</p>
                <img className='boxImage' src={props.boxImage} alt="" />
            </div>
        </div>
    )

}


export default WeatherBox 