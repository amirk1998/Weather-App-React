import { useState } from 'react';
import CurrentWeather from './components/currentWeather/CurrentWeather';
import Search from './components/search/Search';
import { WEATHER_API_URL } from './services/api';

function App() {
  const [currenWeather, setCurrenWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ');

    const currenWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }&units=metric`
    );
    const forecastWeatherFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }&units=metric`
    );

    Promise.all([currenWeatherFetch, forecastWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrenWeather({ city: searchData.label, ...weatherResponse });
        setForecastWeather({ city: searchData.label, ...forecastResponse });
      })
      .catch((error) => console.log(error));
  };

  console.log(currenWeather);
  console.log(forecastWeather);

  return (
    <div className='App w-full h-screen flex flex-col items-center bg-neutral-300 py-5'>
      <div className='w-1/4'>
        <Search onSearchChange={handleOnSearchChange} />
      </div>

      {/* <CurrentWeather data={currenWeather} /> */}
      {currenWeather && <CurrentWeather data={currenWeather} />}
    </div>
  );
}

export default App;
