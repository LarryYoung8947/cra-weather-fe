import React from 'react';
import { NavLink } from 'react-router-dom'
import PropTypes, { func } from 'prop-types'
import routeMenuStyle from '../styles/routeMenu.css'

export default function MenuForRoutes(props) {    
//Header with Nav sidedrawer Icon, Title of App, and Animation Spinner
    return (
        <div id="routeMenu" style ={{routeMenuStyle}}>
            {/* Each option will navigate to a different react route */}
            <NavLink to ="/" onClick={() => props.onClick('yes')} >Today</NavLink>
            <NavLink to ="hourly" >Hourly</NavLink>
            <NavLink to ="seven-day">7-Day</NavLink>            
            </div>
    )
}

MenuForRoutes.propTypes = {
    onClick: func
}