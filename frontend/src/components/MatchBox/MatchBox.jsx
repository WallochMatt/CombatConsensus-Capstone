import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./MatchBox.css";

const MatchBox = (props) => {
    const [average, setAverage] = useState([]);

    useEffect(() => {
        const fetchAverages = async () => {
            try{
                let response = await axios.get(`http://127.0.0.1:8000/user/${props.match.id}/findaverage/`);
                setAverage(response.data);
            }
            catch(error){
                console.log("fetchAverages error: ", error.response.data)
            }
        };
        fetchAverages();
    }, []); //end of useEffect

    return ( 
        <div className='card-container'>
            <div className='segment shadow'>
                <p>Bout</p>
                <p>Judges Say</p>
                <p>Fans Say</p>
            </div>

            <div className='bottom-blurb'>
                <p>{props.match.bout_name}</p>
                <p><span style={{ color: "#A70E0E"}}>{props.match.red_judge_avg}</span> - <span style={{ color: "#1B1EAB"}}>{props.match.blue_judge_avg}</span></p>
                <p><span style={{ color: "#A70E0E"}}>{average[0]}</span> - <span style={{ color: "#1B1EAB"}}>{average[1]}</span></p>
            </div>
        </div>
    );
}

export default MatchBox;