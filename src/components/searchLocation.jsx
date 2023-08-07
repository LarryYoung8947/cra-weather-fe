import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
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

  const menuSearch = (target) => {
    let targetZip = target
    console.log(targetZip, "here is the newZip from the click search")
    geocodioLookup(null, null, targetZip, false).then((data) => {
      console.log(data, "here is where the geocodio lookup is called") 
      console.log(props, "searchlocation props")

      
      let lat = data.data.results[0].location.lat;
      let long = data.data.results[0].location.lng;
      props.setCurrentLocation(data.data.results[0]);
      props.getWeather(lat, long).then((response) => {
        
        props.setCurrentWeather(response.data.current);
        props.setDailyWeather(response.data.daily);
        props.setHourlyWeather(response.data.hourly);
        console.log('new weather set', response.data.current)
      })
    })
    document.getElementById('dropDown').innerHTML = "";
    document.getElementById('dropDown').style.display = "none";
  }

    return (
        <div id="searchContainer">
            <input type={'search'} id={'search'} placeholder="Search ZIP Code" onChange={() => {
              geonamesPostalSearch().then((data) => {
                document.getElementById('dropDown').style.display = "flex"
                document.getElementById('dropDown').innerText = ""
                console.log(data.data.postalCodes)
                let zipArray = Array.from(data.data.postalCodes)
                let zipList =[]
                
                zipArray.forEach((element => {
                  zipList.push([`<p class="menuItem" id="${element.postalCode}">${element.placeName}` + ` ${element.postalCode}</p>`])
                }))                
                let formattedList = zipList.join("<br>").split('</br> ,');
                document.getElementById('dropDown').innerHTML += formattedList;
                let menuItems = document.getElementsByClassName('menuItem')
                for(let element of menuItems) {
                  element.addEventListener('click', (e) => {
                    menuSearch(e.target.id)
                    console.log('clicked motha fucka')
                  })
                }
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
                props.setDailyWeather(response.data.daily);
                props.setHourlyWeather(response.data.hourly);
                console.log('new weather set', response.data.current)
              })
               
                })}>Search</button>
                <div id={'dropDown'}></div>
        </div>
    )
}

SearchLocation.propTypes = {
    getWeather: func,
    getAddress: func,
    setCurrentWeather: func,
    setDailyWeather: func,
    setHourlyWeather: func,
    setCurrentLocation: func,
    setFirstRendered: func
}