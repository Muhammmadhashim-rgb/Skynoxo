
import './App.css';
import Header from './componets/Header/Header';
import Search from './componets/Search Input/Search';
import WeatherCard from './componets/WeatherCard/WeatherCard';
import Forecast from './componets/ForecastDetial/Forecast';
import User from './componets/User Name/User';
import WeatherDetail from './componets/WeatherDetail/WeatherDetail';

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
          <div className="col-5">
            < User />
            < WeatherDetail />
          </div>
        </div>
      </div>
    </div>


  )
}

export default App;
