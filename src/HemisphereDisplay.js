import React from 'react';
import nhp from "./image/nh.png";
import shp from "./image/sh.png";
import './Hemisphere.css';

const hemisphereConfig = {
    Northern:{
        text: 'Northern Hemisphere',
        picture: nhp
    },
    Southern:{
        text: 'Northern Hemisphere',
        picture: shp
    }
}

const HemisphereDisplay = ({latitude}) => {
    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    const {text, picture} =  hemisphereConfig[hemisphere]; 
    return (
        <div className={hemisphere}>
            <div className='ui raised text container segment'>
            <div className = 'image'>
                <img src={picture} alt=""/>
            </div>
            <div className='ui teal bottom attached label'>
                <br/>
                Hey you are in <h1> {text}  </h1>!!
            </div>
            
            </div>
        </div>
    )
}

export default HemisphereDisplay;