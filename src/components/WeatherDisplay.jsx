import {React, useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import PropTypes from 'prop-types';

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
//Insert Icon and Weather Information. Recycled Component should be resizeable in all types of containers
    
    return (
        <div>
            {weatherOptionIcons.sunny}
            {((props.temp - 273.15) * 9/5 + 32).toFixed(0)}        
         </div>
    )
}

WeatherDisplay.propTypes = {
    temp: PropTypes.number
}