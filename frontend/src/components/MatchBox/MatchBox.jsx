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

            <div className='segment text-align'>
                <p>{props.match.bout_name}</p>
                <p>{props.match.red_judge_avg} - {props.match.blue_judge_avg}</p>
                <p>{average[0]} - {average[1]}</p>
                {/* {props.match.red_corner.name} with a fans average score of: {average[0]} and judges average of: {props.match.red_judge_avg}<br/>
                {props.match.blue_corner.name} with a fans average score of: {average[1]}  and judges average of:  {props.match.blue_judge_avg}<br/>
                Official Ruling: {props.match.results} */}
            </div>
        </div>
    );
}

export default MatchBox;