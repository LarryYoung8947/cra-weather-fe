import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro'
import WeatherDisplay from './WeatherDisplay';
import PropTypes from 'prop-types';

let weather;


export default function Home(props) {    
//Header with Nav sidedrawer Icon, Title of App, and Animation Spinner
    console.log("Testing props pass Home...", props)
    let currentWeather = props.currentWeather
    let currentLocation = props.currentLocation
    let setCurrentWeather = props.setcurrentWeather
    let dataRendered = props.dataRendered
    let { humidity, dew_point, pressure, wind_speed } = currentWeather;
    console.log(currentWeather, "This is the way in Home")
    return (
        <>
        <div id="homeContainer1">
            <WeatherDisplay rendered={dataRendered} setWeather={setCurrentWeather} location={currentLocation} weather={currentWeather} temp={currentWeather.temp} height={'100px'}/> 
        </div>
        <div id="homeContainer2">
            <div className="hCRow" id="row1"><h2>Humidity:</h2><h2>{humidity}%</h2></div>
            <div className="hCRow" id="row2"><h2>Dew Point:</h2><h2>{dew_point}</h2></div>
            <div className="hCRow"><h2>Pressure:</h2><h2>{pressure}</h2></div>
            <div className="hCRow"><h2>Wind Speed:</h2><h2>{wind_speed}</h2></div>
        </div>    
        </>
        )
}

Home.propTypes = {
    currentWeather: PropTypes.object,
    currentLocation: PropTypes.object,
    setcurrentWeather: PropTypes.func,
    dataRendered: PropTypes.bool
}