import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro'
import PropTypes, { array } from 'prop-types'
import { object } from 'prop-types';
import WeatherDisplay from './WeatherDisplay';
import sevenDayStyle from '../styles/sevenDay.css'

export default function SevenDayContainer(props) {    
        console.log("Testing Seven Day container and temp...", props.dailyWeather)
        let dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday", "Sunday"]
        let days = props.dailyWeather
        const renderElements = () => {
            let containers = days.map((day) => {
                console.log("Map funtion two is working also")
                    return (
                        <div key={day.dt}>
                            <WeatherDisplay style={{marginTop: "10%"}} weather={day} temp = {day.temp.day} location={props.currentLocation}/>
                            <h4 className="dayNames">{dayNames[new Date(day.dt * 1000).getDay()]}</h4>
                        </div>
                    )
            }) 
                 return containers
        }
        return (
            <div id="sevenDay" style ={sevenDayStyle}>
                     {renderElements()}     
            </div>
        )
    }

    SevenDayContainer.propTypes = {
        dailyWeather: PropTypes.array,
        currentLocation: PropTypes.object
    }