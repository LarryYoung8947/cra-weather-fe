import React, { useState, useEffect }from 'react';
import MenuForRoutes from './MenuForRoutes'
import News from './News';
import { Outlet } from 'react-router-dom'
import PropTypes, { array, bool, func, object, string } from 'prop-types'
import SearchLocation from './searchLocation';
import Clock from '../components/Clock';
import Location from './Location';
import rootLayoutStyle from '../styles/rootLayout.css'



export default function RootLayout(props) {
    const [isRendered, setIsRendered] = useState(false);
    
    console.log(props, "props in rootlayout")
    return (
        <div className="root-layout">
            <SearchLocation  getAddress={props.getAddress} setFirstRender={props.setFirstRender} setCurrentWeather={props.setCurrentWeather} setDailyWeather={props.setDailyWeather} setHourlyWeather={props.setHourlyWeather} setCurrentLocation={props.setCurrentLocation} getWeather={props.getWeather}/>
            <br></br>
            <Location firstRender={props.firstRender} currentLocation={props.currentLocation}/>
            <Clock/>
            {/* LOGS THE STATE ===> {<h1 style={{height: "50px"}}>{isRendered}</h1>} */}
            <main id="rootLayout">
                <br></br>
                {
                <Outlet/>}
            </main>
            
                    
            
           <MenuForRoutes onClick={(value) => setIsRendered(value)}/>
           
           {<News news={props.newsArticles}/>}
        </div>    
    )
}

RootLayout.propTypes = {
    newsArticles: array,
    getWeather: func,
    setDailyWeather: func,
    setHourlyWeather: func,
    setCurrentWeather: func,
    setCurrentLocation: func,
    getAddress: func,
    setFirstRender: func,
    firstRender: bool,
    currentLocation: object
}