import {React, useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import axios from 'axios';
import {getWeather} from '../App'

//create function to add top 5 results to a list to display in a drop down box
//create function to use reg exp to match location in data return
//funtion to potentially grab data after fetching it when app load



let lat
let long
const appid = '090dba8cbb6a244494fb0df7655d98e8'


async function geocodioLookup() {
    console.log('inside the lookup')
    let searchValue = document.getElementById('search').value;
    let data = await axios.get('https://api.geocod.io/v1.7/geocode', {
        params: {
            postal_code: searchValue,
            api_key: 'bbcfb7aa4f224f2d1b6c1dfdfc4f64ca47a7614'
        }
    })
    console.log('this is the data from geocodio', data)
    lat = data.data.results[0].location.lat;
    long = data.data.results[0].location.lng;
    return data
}









export default function SearchLocation(props) {   

    

    return (
        <div>
            <input type={'search'} id={'search'} placeholder="Search location"/>
            <button id={'searchButton'} onClick={() => geocodioLookup().then((data) => {
               getWeather(lat, long)    
                })}>Search</button>
                <div id={'testDisplay'}></div>
        </div>
    )
}