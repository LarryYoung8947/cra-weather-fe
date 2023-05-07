import React, { useState, useEffect }from 'react';
import MenuForRoutes from './MenuForRoutes'
import News from './News';
import { Outlet } from 'react-router-dom'
import PropTypes, { array, func } from 'prop-types'
import SearchLocation from './searchLocation';




export default function RootLayout(props) {
    const [isRendered, setIsRendered] = useState('yes');
    console.log("This is the news at RootLayout", props.newsArticles)
    return (
        <div className="root-layout">
            <SearchLocation getWeather={props.getWeather}/> 
            <br></br>
            {/* LOGS THE STATE ===> {<h1 style={{height: "50px"}}>{isRendered}</h1>} */}
            <main>
                <br></br>
                <Outlet/>
            </main>
           <MenuForRoutes onClick={(value) => setIsRendered(value)}/>
           {isRendered === 'yes' ? <News news={props.newsArticles}/> : null }
        </div>    
    )
}

RootLayout.propTypes = {
    newsArticles: array,
    getWeather: func
}