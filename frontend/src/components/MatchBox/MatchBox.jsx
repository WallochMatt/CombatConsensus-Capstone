import React, { useEffect, useState } from 'react';
import axios from 'axios';




const MatchBox = (props) => {
    const [average, setAverage] = useState([]);

    useEffect(() => {
        const fetchAverages = async () => {
            console.log("in fetchAverages")
            try{
                let response = await axios.get(`http://127.0.0.1:8000/user/${props.match.id}/findaverage/`);
                setAverage(response.data)
            }
            catch(error){
                console.log("fetchAverages error: ", error.response.data)
            }
        };
        fetchAverages();
    }, []); //end of useEffect

    return ( 
        <div>
            {props.match.bout_name}<br/>
            {props.match.fighter_one.name} with a fans average score of: {average[0]} and judges average of: {props.match.judge_avg_one}<br/>
            {props.match.fighter_two.name} with a fans average score of: {average[1]}  and judges average of:  {props.match.judge_avg_two}<br/>
            Official Ruling: {props.match.results}  with the fake averages
        </div>

    );
}

export default MatchBox;