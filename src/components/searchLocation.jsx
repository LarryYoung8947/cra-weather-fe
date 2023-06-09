import {React, useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import axios from 'axios';
import geocodioLookup from '../utils/geocodioLookup';
import PropTypes, { array, func } from 'prop-types'

//create function to add top 5 results to a list to display in a drop down box
//create function to use reg exp to match location in data return
//funtion to potentially grab data after fetching it when app load



let lat
let long
const appid = '090dba8cbb6a244494fb0df7655d98e8'












export default function SearchLocation(props) {   

    

    return (
        <div>
            <input type={'search'} id={'search'} placeholder="Search location"/>
            <button id={'searchButton'} onClick={() => geocodioLookup().then((data) => {
              console.log(data.data.results[0], "here is where the geocodio lookup is called") 
              console.log(props, "searchlocation props")
              let newData = data.data.results[0];
              props.getWeather(newData.location.lat, newData.location.lng).then((response) => {
                props.setWeather(response.data.current)
              })
               
                })}>Search</button>
                <div id={'testDisplay'}></div>
        </div>
    )
}

SearchLocation.propTypes = {
    getWeather: func,
    setWeather: func
}