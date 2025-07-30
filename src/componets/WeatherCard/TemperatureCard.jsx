import React, { useState } from 'react'
import './TemperatureCard.css'


function TemperatureCard() {

  const [isCelsius, setisCelsius] = useState(true)

  const celsius = {
    current: 11,
    high: 4,
    low: 1
  }

  const convetFahrenheit = (c) => Math.round((c * 9) / 5 + 32)

  const temp = isCelsius ? celsius : {
    current: convetFahrenheit(celsius.current),
    high: convetFahrenheit(celsius.high),
    low: convetFahrenheit(celsius.low)
  }

 return (

  <div className='temperture'>
    <h1 className='units'>
      {temp.current}°{isCelsius ? 'C' : 'F'}
    </h1>
    <span className='highLow'>
      High:{temp.high}°{isCelsius ? 'C' : 'F'}  &nbsp;|&nbsp;
      Low:{temp.low}°{isCelsius ? 'C' : 'F'}
    </span>


  <div className="unit-toggle">
  <button 
    className={`toggle-btn ${isCelsius ? '' : 'active'}`} 
    onClick={() => setisCelsius(false)}>
    F
  </button>
  <button 
    className={`toggle-btn ${isCelsius ? 'active' : ''}`} 
    onClick={() => setisCelsius(true)}>
    C
  </button>
</div>

  
  </div>




  )
}

export default TemperatureCard