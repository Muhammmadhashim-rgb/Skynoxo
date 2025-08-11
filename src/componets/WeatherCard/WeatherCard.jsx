import React, { useState ,useEffect} from 'react';
import './WeatherCard.css';
import TemperatureCard from './TemperatureCard';
import getWeather from '../ApI/Api';
import Search from '../Search Input/Search';



function WeatherCard() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  const getWeatherByCity = async (cityName) => {
    if (!city) return;
    const nameToSearch = cityName || city || "London"; // fallback to London
    const weatherData = await getWeather(nameToSearch);
    setWeather(weatherData);
    setCity("");
  };

  useEffect(() => {
    getWeatherByCity("London");
  }, []);

  return (
    <div>
      {/* Search input */}
      <Search
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onSearch={getWeatherByCity}
      />

      {/* Weather info */}
      {weather && weather.main && (
        <div className="weatherCard_row background">
          <div className="weatherCard_col_1">
            <div className="loction">
              <img src="/images/location_icon.svg" alt="" />
              <h1>{weather.name}</h1>
            </div>

            <div className="dayData">
              <h1 className="day">Monday</h1>
              <p className="dataa">24 Dec, 2023</p>
              <img className="cloud" src="/images/cloud.svg" alt="" />
            </div>


            <TemperatureCard weather={weather} />

          </div>

          <div className="weatherCard_col_2">
            <img className="sunny_cloudy" src="/images/sunny_cloudy.svg" alt="" />
            <div className="feel_weather">
              <h1 className="feel">Cloudy</h1>
              <span className="highLow">
                Feel like {weather.main.feels_like}°C
              </span>
              <img className="cloudSmall" src="/images/cloud.svg" alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherCard;
