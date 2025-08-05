
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
      <Search />
      <Header />
      <WeatherCard />
      <Forecast />
      <User />
      <WeatherDetail />
    </div>
  )
}

export default App;
