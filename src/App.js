
import './App.css';
import Header  from './componets/Header/Header';
import Search from './componets/Search Input/Search';
import WeatherCard from './componets/WeatherCard/WeatherCard';
import Forecast from './componets/ForecastDetial/Forecast';
import User from './componets/User Name/User';

function App() {
   
   
   
  return (
    <div>
     <Search/>
     <Header/>
     <WeatherCard/>
     <Forecast />
     <User/>
    </div>
  )
}

export default App;
