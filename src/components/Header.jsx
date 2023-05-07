import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Header() {    
//Header with Nav sidedrawer Icon, Title of App, and Animation Spinner

        return (
            <div style ={{height: "200px"}}>
                <div id="spinner">Here is a Spinner</div>
                <h1>WeatherFE</h1>
                <div id="sidedrawerIcon"><FontAwesomeIcon icon={solid('bars')}/></div>                 
             </div>
        )
    }