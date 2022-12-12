import React, { Suspense, useEffect, useState } from 'react';
import axios from 'axios';
import "./MatchBox.css";

const MatchBox = (props) => {
    const [average, setAverage] = useState({});

    useEffect(() => {
        const fetchAverages = async () => {
            try{
                let response = await axios.get(`http://127.0.0.1:8000/user/${props.match.id}/findaverage/`);
                setAverage(response.data);
            }
            catch(error){
                console.log("fetchAverages error: ")
            }
        };
        fetchAverages();
    }, [props.match]); //end of useEffect

    return (
        <div>
            <table>
                <thead>
                    <tr className='shadow'>
                        <th>Bout</th>
                        <th>Judges Say</th>
                        <th>Fans Say</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='bottom-blurb'>
                        <td>{props.match.bout_name}</td>
                        <td><span style={{ color: "#A70E0E"}}>{props.match.red_judge_avg}</span> - <span style={{ color: "#1B1EAB"}}>{props.match.blue_judge_avg}</span></td>
                        <td><span style={{ color: "#A70E0E"}}>{average.red_avg}</span> - <span style={{ color: "#1B1EAB"}}>{average.blue_avg}</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default MatchBox;