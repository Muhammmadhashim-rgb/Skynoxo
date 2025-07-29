// TemperatureCard.jsx
import React, { useState } from 'react';

function TemperatureCard() {
  const [isCelsius, setIsCelsius] = useState(true);

  const celsius = {
    current: 36,
    high: 27,
    low: 10
  };

  const convertToFahrenheit = (c) => Math.round((c * 9) / 5 + 32);

  const temp = isCelsius ? celsius : {
    current: convertToFahrenheit(celsius.current),
    high: convertToFahrenheit(celsius.high),
    low: convertToFahrenheit(celsius.low)
  }

  return (
    <div className="temperture">
      <h1 className='units'>
        {temp.current}°{isCelsius ? 'C' : 'F'}
      </h1>
      <span className='highLow'>
        <strong>High:</strong> {temp.high}°{isCelsius ? 'C' : 'F'} &nbsp;|&nbsp;
        <strong>Low:</strong> {temp.low}°{isCelsius ? 'C' : 'F'}
      </span>
      <br />
      <button onClick={() => setIsCelsius(!isCelsius)} className='toggleBtn'>
        Show °{isCelsius ? 'F' : 'C'}
      </button>
    </div>
  );
}

export default TemperatureCard;
