import React from 'react';
import { NavLink } from 'react-router-dom'
import PropTypes, { func } from 'prop-types'

export default function MenuForRoutes(props) {    
//Header with Nav sidedrawer Icon, Title of App, and Animation Spinner
    return (
        <div style ={{height: "100px"}}>
            {/* Each option will navigate to a different react route */}
            <NavLink to ="/" onClick={() => props.onClick('yes')} >Today</NavLink>
            <NavLink to ="hourly" onClick={() => props.onClick('no')}>Hourly</NavLink>
            <NavLink to ="seven-day">7-Day</NavLink>            
            </div>
    )
}

MenuForRoutes.propTypes = {
    onClick: func
}