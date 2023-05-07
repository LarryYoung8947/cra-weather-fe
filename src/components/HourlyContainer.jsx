import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro'
import PropTypes, { array } from 'prop-types'
import WeatherDisplay from '../components/WeatherDisplay';



export default function HourlyContainer(props) {    
//Header with Nav sidedrawer Icon, Title of App, and Animation Spinner
    console.log(props.hourlyWeather )
    let hours = props.hourlyWeather;
    console.log(hours, "this is the daily weather")
    let renderElements = () => {
        console.log(hours, "these are the days inside renderelements")
        let containers =  hours ? hours.map((hour) => {
            console.log("map function is working :)");
            return (
                <div key={hour.dt} style={{display: "inline-block", height: "10px", width:"200px", float: "left", marginRight: "15px"}}>
                    <WeatherDisplay temp={hour.temp}/>
                    <h4>{new Date(hour.dt * 1000).getHours()}AM</h4>
                </div> 
            )        
        }) : <div><p>Fetching data</p></div>
        return containers
    }
        
    return (
        <div style ={{height: "100px", overflowX: "scroll", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            {renderElements()}
        </div>
    )
}

HourlyContainer.propTypes = {
    hourlyWeather: array
}