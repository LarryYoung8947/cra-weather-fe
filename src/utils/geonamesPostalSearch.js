import React from 'react'
import axios from 'axios'

async function geonamesPostalSearch(zip) {
    console.log('inside the postalcode Search')
    let searchValue = document.getElementById('search').value;
    let onloadLocation = zip;
    if(isNaN(searchValue)){ 
        throw new Error("Please enter a Zip Code")
        }
    else {
        let data = await axios.get('http://api.geonames.org/postalCodeSearchJSON', {
        params: {
            postalcode_startsWith: searchValue,
            maxRows: 5,
            country: "US",
            username: "l89471"
        }
    })    
        console.log('this is the data from postalCodeSearch', data)
        return data
    }    
}

export default geonamesPostalSearch