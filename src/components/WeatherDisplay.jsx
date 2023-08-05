import {React, useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import PropTypes from 'prop-types';
import weatherDisplayStyle from '../styles/weatherDisplay.css'

let weather;

const weatherOptionIcons = {
    sunny: <FontAwesomeIcon icon={regular('sun')}/>,
    rain:  <FontAwesomeIcon icon={solid('cloud-showers-heavy')}/>,
    cloudy:<FontAwesomeIcon icon={solid('cloud')}/>,
    partlyCloudy: <FontAwesomeIcon icon={solid('cloud-sun')}/>,
    storms:<FontAwesomeIcon icon={solid('cloud-bolt')}/>,
    windy: <FontAwesomeIcon icon={solid('wind')}/>,
    snow: <FontAwesomeIcon icon={regular('snowflake')}/>,
    ice: <FontAwesomeIcon icon={solid('icicles')}/>
}
/* 
const getLocation = () => {
    
       
} */







export default function WeatherDisplay(props) {   
    console.log(props.rendered)
//Insert Icon and Weather Information. Recycled Component should be resizeable in all types of containers
    return (
         <div id="weatherBox" style={weatherDisplayStyle}>            
            {weatherOptionIcons.sunny}<br></br>
            {((props.temp - 273.15) * 9/5 + 32).toFixed(0) + '\u00B0' + 'F'}<br></br>     
         </div> 
    )
}

WeatherDisplay.propTypes = {
    temp: PropTypes.number,
    location: PropTypes.object,
    weather: PropTypes.object,
    rendered: PropTypes.bool,
    setWeather: PropTypes.func,
    dataRendered: PropTypes.bool
}