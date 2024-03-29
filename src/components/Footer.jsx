import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands} from '@fortawesome/fontawesome-svg-core/import.macro'
import openWeatherImg from '../img/OpenWeather.png'
import newsApiLogo from '../img/newsApiLogo.svg'

const socialMediaIcons = {
    facebook: <svg xmlns="http://www.w3.org/2000/svg" height="50px"  fill="gray" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>,
    rain:  <FontAwesomeIcon icon={solid('cloud-showers-heavy')}/>,
    cloudy:<FontAwesomeIcon icon={solid('cloud')}/>,
}

export default function Footer() {    
//Header with Nav sidedrawer Icon, Title of App, and Animation Spinner

        return (
            <>
                <div style={{paddingBottom: "20px"}}>
                <h2 style={{display: "inline", width: "20%", paddingLeft: "5%"}}>WeatherFE | Larry Young</h2>
                <h4 style={{display: "inline", width: "20%"}}>Powered by the Open Weather Map and News API <a href="https://openweathermap.org/">Open Weather</a></h4>
                </div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", width: "100%"}}>
                    
                    <div style ={{height: "100px", verticalAlign: "center", paddingTop:"15px"}}>
                        {socialMediaIcons.facebook}
                    </div>  
                    <img src={openWeatherImg} height="75px"  />
                    <img src={newsApiLogo} height="50px"/>                            
                </div>
             </>
        )
    }