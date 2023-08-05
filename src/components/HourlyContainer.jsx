import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro'
import PropTypes, { array } from 'prop-types'
import WeatherDisplay from '../components/WeatherDisplay';
import hourlyStyle from '../styles/hourlyStyle.css'



export default function HourlyContainer(props) {    
//Header with Nav sidedrawer Icon, Title of App, and Animation Spinner
    
    let hours = props.hourlyWeather;
    console.log(hours, "this is the hourly weather")
    let renderElements = () => { 
        let containers =  hours.map((hour) => {
            console.log(hour, "this is the way")
            const getTime = () => {
                let time = new Date(hour.dt * 1000).getHours()
                if(time >= 1 && time < 12) {
                    console.log("this is the time", time )
                    return time + 'AM'
                } else if (time == 12) { 
                    console.log("this is the time", time )
                    return time + 'PM' 
                } else if (time < 1) { 
                    return (time + 12) + 'AM'
                }                
                else {
                    return (time % 12) + 'PM'                 
                }
            }    
            console.log("map function is working :)");
            return (
                <div key={hour.dt}>
                    <WeatherDisplay weather = {hour} temp={hour.temp} location={props.currentLocation}/>
                    <h4 className="hourlyTime">{getTime()}</h4>
                </div> 
            )        
        }) 
        return containers
    }
        
    return (
        <div id="hourlyContainer" style={hourlyStyle} >
            {renderElements()}
        </div>
    )
}

HourlyContainer.propTypes = {
    hourlyWeather: PropTypes.array,
    currentLocation: PropTypes.object
}