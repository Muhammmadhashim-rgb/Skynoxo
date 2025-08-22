import React, { useState, useEffect } from 'react';
import './WeatherCard.css';
import TemperatureCard from './TemperatureCard';
import getWeather from '../ApI/Api';
import Search from '../Search Input/Search';



function WeatherCard() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [error, setError] = useState("");

  const getWeatherByCity = async (cityName) => {
    setError(""); // clear previous error
    const nameToSearch = cityName || city || "London";

    try {
      const weatherData = await getWeather(nameToSearch);

      if (weatherData.cod === "404") {
        setError("City not found. Please check the name and try again.");
        setWeather({});
      } else {
        setWeather(weatherData);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }

    setCity("");
  };
  useEffect(() => {
    getWeatherByCity("London");
  }, []);




  const iconCode = weather?.weather?.[0]?.icon;
  const iconUrl = iconCode
    ? `https://openweathermap.org/img/wn/${iconCode}@2x.png`
    : '/images/sunny_cloudy.svg';

  return (
    <div className='weatherCard'>
 
      <Search
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onSearch={getWeatherByCity}
      />






      {/* Weather info */}

      {/* Weather Card OR Error Card */}
      <div className="weatherCard_row background">
        {error ? (
          <div className="weatherCard_col_1">
            <h2 className='error'>{error}</h2>
          </div>
        ) : weather && weather.main ? (
          <>
            <div className="weatherCard_col_1">
              <div className="loction">
                <img src="/images/location_icon.svg" alt="" />
                <h1>{weather.name}</h1>
              </div>

              <div className="dayData">
                <h1 className="day">{weather.dt ? new Date(weather.dt * 1000).toLocaleDateString("en-US", { weekday: "long" }) : ""}</h1>
                <p className="dataa"> {weather.dt ? new Date(weather.dt * 1000).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" }) : ""}</p>
                <img className="cloud" src="/images/cloud.svg" alt="" />
              </div>

              <TemperatureCard weather={weather} />
            </div>

            <div className="weatherCard_col_2">
              <img className="sunny_cloudy" src={iconUrl} alt={weather?.weather?.[0]?.description || 'icon'} />
              <div className="feel_weather">
                <h1 className="feel">{weather.weather[0].main}</h1>
                <div className="highLow">
                  Feel like {weather.main.feels_like}°C
                </div>
                <img className="cloudSmall" src="/images/cloud.svg" alt="" />
              </div>
            </div>
          </>
        ) : null}
      </div>


    </div>
  );
}

export default WeatherCard;
