import React from 'react'
import axios from 'axios'

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
    return data
}

export default geocodioLookup