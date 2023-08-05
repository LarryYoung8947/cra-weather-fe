import axios from 'axios';

export default async function getAddress(lat, long) {
    try {
      const response = await axios.get('http://api.geonames.org/addressJSON', {
        params: {
          lat: lat,
          lng: long,
          username: "l89471"
        }
      });
      console.log(response, "Address response");
      return response;
    } catch (error) {
      console.error('Error while fetching address:', error);
      throw error;
    }
  }