export const geoApiOptions = {
  method: 'GET',
  params: {
    minPopulation: '1000000',
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_GEO_API_KEY,
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
  },
};

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';
