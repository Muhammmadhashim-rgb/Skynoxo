
import './App.css';
import Header  from './componets/Header/Header';
import Search from './componets/Search Input/Search';
import WeatherCard from './componets/WeatherCard/WeatherCard';
import Forecast from './componets/ForecastDetial/Forecast';

function App() {
   
   
   
  return (
    <div>
     <Search/>
     <Header/>
     <WeatherCard/>
     <Forecast />
    </div>
  )
}

export default App;
