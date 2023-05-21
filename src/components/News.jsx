import React from 'react';
import PropTypes, { array } from 'prop-types'


export default function News(props) {    
//Header with Nav sidedrawer Icon, Title of App, and Animation Spinner
        return (
            props.news ? <div style ={{height: "400px"}}>
            <h1>NEWS</h1>
            <div><img src={props.news[0].urlToImage} height={'100px'}></img></div>
            <h1>{props.news[0].title}</h1>
            <h4>{props.news[0].description}</h4>
            <h4>Continue reading...</h4>             
         </div> : "Loading news..."
        )
    }

    News.propTypes = {
        news: array
    }