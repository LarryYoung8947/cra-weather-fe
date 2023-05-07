import React from 'react';
import PropTypes, { array } from 'prop-types'


export default function News(props) {    
//Header with Nav sidedrawer Icon, Title of App, and Animation Spinner
console.log(props.news)
let firstArticle = props.news[0]
        return (
            <div style ={{height: "400px"}}>
                <h1>NEWS</h1>
                <div><img src={firstArticle.urlToImage} height={'100px'}></img></div>
                <h1>{firstArticle.title}</h1>
                <h4>{firstArticle.description}</h4>
                <h4>Continue reading...</h4>             
             </div>
        )
    }

    News.propTypes = {
        news: array
    }