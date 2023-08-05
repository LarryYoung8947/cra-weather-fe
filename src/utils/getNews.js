import axios from 'axios';

export default async function getNews() {
    try {
      const apiKey ='166ee263aacd48e79e2c40a27e5f234e';
      const response = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          apiKey: apiKey,
          country: 'us',
          category: 'science',
          pageSize: 3
        }
      });
      console.log(response, 'This is the initial news response');
      return response;
    } catch (error) {
      console.error('Error while fetching news:', error);
      throw error;
    }
  }