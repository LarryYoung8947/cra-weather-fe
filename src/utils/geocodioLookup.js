import React from 'react'
import axios from 'axios'
import { number } from 'prop-types';
import ErrorPage from '../ErrorPage';

async function geocodioLookup(lat, long, zip, firstRender) {
    console.log('inside the lookup')
    let searchValue
    let clickedValue = zip
    console.log(clickedValue)
    if(firstRender === false && clickedValue === null) {
        searchValue = document.getElementById('search').value;
        if(isNaN(searchValue)){ 
            throw new Error("Please enter a Zip Code")
        } else {
            let data = await axios.get('https://api.geocod.io/v1.7/geocode', {
            params: {
                postal_code: searchValue,
                api_key: 'bbcfb7aa4f224f2d1b6c1dfdfc4f64ca47a7614',
                lat: lat,
                long: long
            }
        })    
            console.log('this is the data from geocodio', data)
            return data
        }  
    } else if (firstRender === false && clickedValue !== null) {
        let data = await axios.get('https://api.geocod.io/v1.7/geocode', {
            params: {
                postal_code: clickedValue,
                api_key: 'bbcfb7aa4f224f2d1b6c1dfdfc4f64ca47a7614',
                lat: lat,
                long: long
            }
        }).catch((err) => {
            console.log(err)
        })   
        console.log('this is the data from geocodio', data)
        return data 
    } else {
        let data = await axios.get('https://api.geocod.io/v1.7/reverse', {
            params: {
                api_key: 'bbcfb7aa4f224f2d1b6c1dfdfc4f64ca47a7614',
                q: `${lat}, ${long}`
            }
        }).catch((err) => {
            console.log(err)
        })   
        console.log('this is the data from geocodio', data.data.results[0])
        return data.data.results[0]
    }   
}


export default geocodioLookup