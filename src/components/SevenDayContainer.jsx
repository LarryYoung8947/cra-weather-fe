import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro'
import PropTypes, { array } from 'prop-types'
import { object } from 'prop-types';
import WeatherDisplay from './WeatherDisplay';

export default function SevenDayContainer(props) {    
        console.log("Testing Seven Day container and temp...", props.dailyWeather[0].temp)
        let dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        let days = props.dailyWeather
        const renderElements = () => {
            let containers = days ? days.map((day) => {
                console.log("Map funtion two is working also")
                    return (
                        <div key={day.dt} style={{display: "inline-block",height: "100px", width:"100px", float: "left", marginRight: "15px"}}>
                            <WeatherDisplay temp = {day.temp.day}/>
                            <h4>{dayNames[new Date(day.dt * 1000).getDay()]}</h4>
                        </div>
                    )
            }) :
                 <p>Rendering elements...</p>
                 return containers
        }
        return (
            <div style ={{height: "100px", overflowX: "scroll", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                     {renderElements()}     
            </div>
        )
    }

    SevenDayContainer.propTypes = {
        dailyWeather: array
    }