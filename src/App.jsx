import React, { useEffect, useState } from 'react';
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import {configureRoutes} from './routes/routes.js'
import Header from './components/Header'
import Footer from './components/Footer'
import getWeather from './utils/getWeather'
import getNews from './utils/getNews'
import getAddress from './utils/getAddress.js'
import geocodioLookup from './utils/geocodioLookup'
import appStyles from './styles/app.css'


//THIS IS THE WAY TO USE CREATEBROWESERROUTER WITHOUT CREATEROUTESFROMELEMENTS
// const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Home/>,
//       errorElement: <ErrorPage/>,
//     },
//     {
//         path: "hourly",
//         element: <HourlyContainer/>
//     },
//     {
//         path: "seven-day",
//         element: <SevenDayContainer/>
//     }
//   ]);

//HOME SCREEN

const App = () => {
    const [dataRendered, setDataRendered] = useState(false);
    const [currentWeather, setCurrentWeather] = useState();
    const [currentLocation, setCurrentLocation] = useState();
    const [hourlyWeather, setHourlyWeather] = useState();
    const [dailyWeather, setDailyWeather] = useState();
    const [headlineNews, setHeadlineNews] = useState();
    const [firstRender, setFirstRender] = useState(true);   
      
      

    useEffect(() => {
        console.log("Initial Render...");
        setFirstRender(false)
        navigator.geolocation.getCurrentPosition((position) => {
          let lat = position.coords.latitude;
          let long = position.coords.longitude;
          console.log(lat, long, position);
          let location;
          
          Promise.all([
            getAddress(lat, long),
            getWeather(lat, long),
            getNews(),
            geocodioLookup(lat, long, null, true)
          ])
            .then(([addressResponse, weatherResponse, newsResponse, locationResponse]) => {
              const address = addressResponse.data.address; 
              console.log(address) 
              const { hourly, daily, current } = weatherResponse.data;
              setCurrentWeather(current);
              setHourlyWeather(hourly);
              setDailyWeather(daily);
          
              const news = newsResponse.data.articles;
              setHeadlineNews(news);
              setCurrentLocation(locationResponse);
              setFirstRender(false);
              setDataRendered(true);
              
            })
            .catch((error) => {
              console.error('Error while fetching data:', error);
              // Handle the error here, e.g., set an error state or display an error message.
            });
          
        })
          
    }, []);

    const routes = configureRoutes({
      getWeather,
      setCurrentLocation,
      setCurrentWeather,
      setHourlyWeather,
      setDailyWeather,
      currentWeather,
      currentLocation,
      hourlyWeather,
      dailyWeather,
      headlineNews,
      firstRender,
      getAddress,
      setFirstRender,
      dataRendered,
    });
      
    const router = createBrowserRouter(routes);

    return (
        dataRendered == false ? <h2>loading</h2> :
        <div id="wrapper" style={appStyles}>
            
            <Header/>
            
            
            
            {
               
                <RouterProvider router = {router}/>              
                               
            }
            
            <Footer/>
        </div>
    )
}

export {App};