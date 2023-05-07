import {React, useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

setCurrentTime(() => {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    console.log(min.toString().length)
    return (min.toString().length == 1 ? 
        hour + ":" + "0" + min : 
        hour + ":" + min);
})