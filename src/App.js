import React, { Component, useEffect, useState } from 'react';

import { createRoutesFromElements, Route } from 'react-router-dom'
import {
    createBrowserRouter,
    RouterProvider
  } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import axios from 'axios';
import Home from './components/Home';
import HourlyContainer from './components/HourlyContainer';
import SevenDayContainer from './components/SevenDayContainer';
import RootLayout from './components/RootLayout';


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

let lat;
let long;
let dataRendered = false;
const appid = '090dba8cbb6a244494fb0df7655d98e8'

navigator.geolocation.getCurrentPosition((position) => {
    lat =  Number(position.coords.latitude.toFixed(2));
    long = Number(position.coords.longitude.toFixed(2));
})

async function getNews() {
    const apiKey ='166ee263aacd48e79e2c40a27e5f234e' 
    let news = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
            apiKey: apiKey,
            country: 'us',
            category: 'science',
            pageSize: 3
        }
    })
    console.log(news, 'this is the initial news response')
    return news
}

async function getWeather() {
    /* navigator.geolocation.getCurrentPosition((position) => {
        console.log("UserInfo Function Called...")
        lat =  Number(position.coords.latitude.toFixed(2));
        long = Number(position.coords.longitude.toFixed(2));
        const appid = '090dba8cbb6a244494fb0df7655d98e8'
        console.log(lat, long) */
        const appid = '090dba8cbb6a244494fb0df7655d98e8'
        let response = await axios.get('https://api.openweathermap.org/data/3.0/onecall?', {
        params: {
            lat: lat,
            lon: long,
            appid: appid
            }
        })       
        console.log(response, "this is the initial response") 
       return response
}

async function fetch() {
    let response = await axios.get('https://api.openweathermap.org/data/3.0/onecall?', {
        params: {
            lat: lat,
            lon: long,
            appid: appid
            }
        })       
        console.log(response, "response from weatherapi with new coords") 
       return response
}

//HOME SCREEN

const App = () => {
        const [data, setData] = useState();
        const [currentWeather, setCurrentWeather] = useState();
        const [hourlyWeather, setHourlyWeather] = useState();
        const [dailyWeather, setDailyWeather] = useState();
        const [headlineNews, setHeadlineNews] = useState();
    useEffect(() => {
        console.log("Initial Render...")
        getWeather().then((response) => {
            setData(response.data);
            setCurrentWeather(response.data.current);
            setHourlyWeather(response.data.hourly); 
            setDailyWeather(response.data.daily)      
        })
        getNews().then((news) => {
            setHeadlineNews(news.data.articles)
        })
    }, []);
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout newsArticles={headlineNews} data={data} getweather={getWeather}/>}>
                <Route index element={<Home currentWeather={currentWeather}/>}/>
                <Route path="hourly" element={<HourlyContainer hourlyWeather={hourlyWeather}/>}/>
                <Route path="seven-day" element={<SevenDayContainer dailyWeather={dailyWeather}/>}/>
            </Route>
        )
    )
    return (
        <div>
            <Header/>
            <RouterProvider router = {router}>              
            </RouterProvider>
            <Footer/>
        </div>
    )
}

export {App, getWeather, fetch};