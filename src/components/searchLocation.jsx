import {React, useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import axios from 'axios';
import geocodioLookup from '../utils/geocodioLookup';
import geonamesPostalSearch from '../utils/geonamesPostalSearch';
import PropTypes, { array, func } from 'prop-types'
import searchLocationStyle from '../styles/searchLocation.css'
//create function to add top 5 results to a list to display in a drop down box
//create function to use reg exp to match location in data return
//funtion to potentially grab data after fetching it when app load



let lat
let long
const appid = '090dba8cbb6a244494fb0df7655d98e8'












export default function SearchLocation(props) {   

    

    return (
        <div id="searchContainer">
            <input type={'search'} id={'search'} placeholder="Search ZIP Code" onChange={() => {
              geonamesPostalSearch().then((data) => {
                document.getElementById('testDisplay').innerText = ""
                console.log(data.data.postalCodes)
                let zipArray = Array.from(data.data.postalCodes)
                let zipList =[]
                
                zipArray.forEach((element => {
                  zipList.push([element.placeName, element.postalCode])
                }))
                document.getElementById('testDisplay').innerText += zipList
              })
            }}/>
            <button id={'searchButton'} onClick={() => geocodioLookup(null, null, null, false).then((data) => {
              console.log(data.data.results[0], "here is where the geocodio lookup is called") 
              console.log(props, "searchlocation props")
              let newData = data.data.results[0];
              console.log(newData, "Here is New Data in search")
              props.setCurrentLocation(newData)
              let lat = newData.location.lat;
              let long = newData.location.lng;
              props.getWeather(lat, long).then((response) => {
                props.setCurrentWeather(response.data.current);
                console.log('new weather set', response.data.current)
              })
               
                })}>Search</button>
                <div id={'testDisplay'}></div>
        </div>
    )
}

SearchLocation.propTypes = {
    getWeather: func,
    getAddress: func,
    setCurrentWeather: func,
    setCurrentLocation: func,
    setFirstRendered: func
}