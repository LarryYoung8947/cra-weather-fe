import React from 'react';
import PropTypes, { array } from 'prop-types'
import newsStyle from '../styles/news.css'


export default function News(props) {    
//Header with Nav sidedrawer Icon, Title of App, and Animation Spinner
        return (
            props.news ? <div id="newsContainer" style ={newsStyle}>
            <h1 id="newsSectionTitle">NEWS</h1>
            <div style={{paddingLeft: "5%"}}><img src={props.news[0].urlToImage} ></img></div>
            <h1>{props.news[0].title}</h1>
            <h4 style={{ marginLeft: "40%", width: "675px", height: "75px"}}>{props.news[0].description}</h4>
            <h4 style={{marginLeft: "25%"}}>Continue reading...</h4>             
         </div> : "Loading news..."
        )
    }

    News.propTypes = {
        news: array
    }