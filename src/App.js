
import './App.css';
import Header from './componets/Header/Header';
import Search from './componets/Search Input/Search';
import WeatherCard from './componets/WeatherCard/WeatherCard';
import Forecast from './componets/ForecastDetial/Forecast';
import User from './componets/User Name/User';
import WeatherDetail from './componets/WeatherDetail/WeatherDetail';
import CitiesWeather from './componets/Cities Weather/CitiesWeather';

function App() {



  return (
    <div>
      <div className="main_container">
        <div className="main_row">
          <div className="header_row">
            <Header />
          </div>
          <div className="search_and_user">
            < Search />
            < WeatherCard />
            < Forecast />
          </div>
          <div className="WeatherDetail_and_CitiesWeather">
            < User />
            < WeatherDetail />
            < CitiesWeather />
          </div>
        </div>
      </div>
    </div>


  )
}

export default App;
