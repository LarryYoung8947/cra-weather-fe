import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro'
import WeatherDisplay from './WeatherDisplay';
import PropTypes from 'prop-types';

let weather;


export default function Home(props) {    
//Header with Nav sidedrawer Icon, Title of App, and Animation Spinner
    //console.log("Testing props pass Home...", temp)
    let currentWeather = props.currentWeather
    return (
        <>
           {currentWeather ? <WeatherDisplay temp={currentWeather.temp} height={'100px'}/> : null}
        </>
    )
}

Home.propTypes = {
    currentWeather: PropTypes.object
}