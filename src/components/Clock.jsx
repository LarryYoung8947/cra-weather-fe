import {React, useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import clockStyle from '../styles/clock.css'

let setCurrentTime = (() => {
    let time = new Date();
    let hour = time.getHours();
    let tod = "am"
    if (hour > 12) {
      hour = hour % 12
      tod = "pm"
    }
    let min = time.getMinutes();
    console.log(min.toString().length)
    return (min.toString().length == 1 ? 
        hour + ":" + "0" + min + " " + tod : 
        hour + ":" + min + " " + tod);
})

export default function Clock() {
  return (
    <div id="clock" style={{clockStyle}}>{setCurrentTime()}</div>
  )
}
