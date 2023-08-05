import React from 'react';
import { createRoutesFromElements, Route } from 'react-router-dom';
import Home from '../components/Home';
import HourlyContainer from '../components/HourlyContainer';
import SevenDayContainer from '../components/SevenDayContainer';
import RootLayout from '../components/RootLayout';
import getWeather from '../utils/getWeather';

export function configureRoutes(props) {
   const {currentWeather, currentLocation, hourlyWeather, dailyWeather, headlineNews, firstRender, getAddress, setCurrentLocation, setCurrentWeather, setFirstRender, dataRendered} = props;
    return createRoutesFromElements(
            <Route path="/" element={<RootLayout setFirstRender={setFirstRender} getAddress={getAddress} newsArticles={headlineNews} setCurrentLocation={setCurrentLocation} setCurrentWeather={setCurrentWeather} getWeather={getWeather}  firstRender={firstRender} currentLocation={currentLocation}/>}>
                <Route index element={<Home  dataRendered={dataRendered} currentLocation={currentLocation} currentWeather={currentWeather} setCurrentWeather={setCurrentWeather}/>}/>
                <Route path="hourly" element={<HourlyContainer currentLocation={currentLocation} hourlyWeather={hourlyWeather} currentWeather={currentWeather}/>}/>
                <Route path="seven-day" element={<SevenDayContainer currentLocation={currentLocation} dailyWeather={dailyWeather}/>}/>
            </Route>
        )
}