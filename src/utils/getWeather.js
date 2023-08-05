import axios from 'axios';

export default async function getWeather(lat, long) {
    try {
      const appid = '090dba8cbb6a244494fb0df7655d98e8';
      const response = await axios.get('https://api.openweathermap.org/data/3.0/onecall?', {
        params: {
          lat: lat,
          lon: long,
          appid: appid
        }
      });
      console.log(response, "This is the initial response");
      return response;
    } catch (error) {
      console.error('Error while fetching weather:', error);
      throw error;
    }
  }