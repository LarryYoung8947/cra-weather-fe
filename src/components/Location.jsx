import React from 'react'
import PropTypes, { object } from 'prop-types'; 
import locationStyle from '../styles/location.css'

export default function Location(props) {
    console.log(props.currentLocation, "This is the current location in Location")
  return (
    props.currentLocation ? <div style={locationStyle} id="locationText">{`${props.currentLocation.address_components.city}, ${props.currentLocation.address_components.state}`}</div>
  : <h2>Loading</h2>)
}

Location.propTypes = {
    currentLocation: object
}
