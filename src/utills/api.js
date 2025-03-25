import axios from 'axios';

const API_KEYS = {
  weather: 'your_openweather_api_key',
  news: 'your_newsapi_key',
};

export const fetchRelevantData = async (task) => {
  if (task.includes('weather') || task.includes('outdoor')) {
    return await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEYS.weather}`)
      .then(response => ({ type: 'weather', data: response.data }))
      .catch(() => null);
  }

  if (task.includes('news') || task.includes('update')) {
    return await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEYS.news}`)
      .then(response => ({ type: 'news', data: response.data.articles }))
      .catch(() => null);
  }

  return null;
};
