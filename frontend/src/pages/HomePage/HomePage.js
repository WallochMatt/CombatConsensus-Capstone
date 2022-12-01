import axios from "axios";
import React, { useState, useEffect } from 'react';

import FanFav from "../../components/FanFav/FanFav";
import OfcFav from "../../components/OfcFav/OfcFav"


const HomePage = (props) => {
    const [fanFav, setFanFav] = useState();



    useEffect(() => {
        props.fighters.map((fighter) => {
            
        })

        fetchFanFav();
    }, []);


//fighters are temp, just to show they can appear
    return ( 
        <div className="container">
            <h1>Fighters</h1>
            {props.fighters &&
            props.fighters.map((fighter, index) => (
                <p key={index}>
                    {fighter.name}
                </p>
                
            ))}
        </div>
    );
};

export default HomePage;