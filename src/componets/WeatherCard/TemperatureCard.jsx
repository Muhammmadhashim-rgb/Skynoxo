// src/componets/WeatherCard/TemperatureCard.jsx
import React, { useState, useMemo } from 'react';
import './TemperatureCard.css';

function TemperatureCard({ weather }) {
  const [isCelsius, setIsCelsius] = useState(true);

  // If your API returns Kelvin (no units param), convert to C: Math.round(temp - 273.15)
  // If you call API with &units=metric, the values are already in °C.
  const toCelsius = (t) => (t == null ? null : Math.round(t)); // assume API already metric
  const toFahrenheit = (c) => (c == null ? null : Math.round((c * 9) / 5 + 32));

  // read values safely from weather object (use optional chaining)
  const cTemp = toCelsius(weather?.main?.temp);
  const cHigh = toCelsius(weather?.main?.temp_max ?? weather?.main?.temp);
  const cLow  = toCelsius(weather?.main?.temp_min ?? weather?.main?.temp);
  const cFeels = toCelsius(weather?.main?.feels_like);

  // prepare values depending on unit
  const temp = useMemo(() => {
    if (isCelsius) {
      return { current: cTemp, high: cHigh, low: cLow, feels: cFeels };
    }
    return {
      current: toFahrenheit(cTemp),
      high: toFahrenheit(cHigh),
      low: toFahrenheit(cLow),
      feels: toFahrenheit(cFeels),
    };
  }, [isCelsius, cTemp, cHigh, cLow, cFeels]);

  const iconCode = weather?.weather?.[0]?.icon;
  const iconUrl = iconCode
    ? `https://openweathermap.org/img/wn/${iconCode}@2x.png`
    : '/images/default-weather.png';

  if (!weather || !weather.main) {
    return null; // or a small placeholder / loader
  }

  return (
    <div className="temperture">
      <h1 className="units">
        {temp.current != null ? `${temp.current}°${isCelsius ? 'C' : 'F'}` : '—'}
      </h1>

      <div className="temp-meta">
        <img className="weather-icon" src={iconUrl} alt={weather?.weather?.[0]?.description || 'icon'} />
        <div className="highLow">
          <div><strong>High:</strong> {temp.high != null ? `${temp.high}°${isCelsius ? 'C' : 'F'}` : '—'}</div>
          <div><strong>Low:</strong> {temp.low != null ? `${temp.low}°${isCelsius ? 'C' : 'F'}` : '—'}</div>
          <div><small>Feels like: {temp.feels != null ? `${temp.feels}°${isCelsius ? 'C' : 'F'}` : '—'}</small></div>
        </div>
      </div>

      <div className="unit-toggle">
        <button
          className={`toggle-btn ${!isCelsius ? 'active' : ''}`}
          onClick={() => setIsCelsius(false)}
        >
          °F
        </button>
        <button
          className={`toggle-btn ${isCelsius ? 'active' : ''}`}
          onClick={() => setIsCelsius(true)}
        >
          °C
        </button>
      </div>
    </div>
  );
}

export default TemperatureCard;
