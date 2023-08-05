import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro'
import headerStyle from '../styles/header.css'

export default function Header() {    
//Header with Nav sidedrawer Icon, Title of App, and Animation Spinner

        return (
            <div id="header" style ={{headerStyle}}>
                <div id="sideDrawerIcon"><FontAwesomeIcon icon={solid('bars')}/></div>
                <h1 id="title">WeatherFE</h1>
                                 
             </div>
        )
    }