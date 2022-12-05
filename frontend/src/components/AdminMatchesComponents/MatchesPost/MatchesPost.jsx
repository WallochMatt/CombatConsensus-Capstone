import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';


const MatchesPost = (props) => {
    const [user, token] = useAuth();

    const [boutName, setBoutName] = useState('');
    const [eventId, setEventId] = useState(0);
    const [redCorner, setRedCorner] = useState(0);
    const [blueCorner, setBlueCorner] = useState(0);
    const [judgeRed, setJudgeRed] =useState(0);
    const [judgeBlue, setJudgeBlue] = useState(0);
    const [results, setResults] = useState('');
    const [numOfRounds, setNumOfRounds] = useState(0);

    async function addNewMatch(newMatch){
        try{
            let response = await axios.post(`http://127.0.0.1:8000/matches/admin/add/`, newMatch, {
                headers: {
                    Authorization: "Bearer " + token,
                }
            });
            if(response.status === 201){
                window.location.reload(false)
            }
        }
        catch(error){
            console.log(error)
        }
    };


    function enterData(event) {
        event.preventDefault();
        let newMatch = {
        bout_name: `${boutName}`,
        event_id: `${eventId}`,
        red_corner_id: `${redCorner}`,
        blue_corner_id: `${blueCorner}`,
        red_judge_avg: `${judgeRed}`,
        blue_judge_avg: `${judgeBlue}`,
        results: `${results}`,
        number_of_rounds: `${numOfRounds}`
        };
        addNewMatch(newMatch)
    };

    return (
        <form>

            <label>bout name</label>
            <input value={boutName} onChange={(event) => setBoutName(event.target.value)} />

            <label>Event ID</label>
            <input value={eventId} onChange={(event) => setEventId(event.target.value)} />
            
            <label>Select Red Fighter</label>
            <input value={redCorner} onChange={(event) => setRedCorner(event.target.value)} />

            <label>Select Blue fighter</label>
            <input value={blueCorner} onChange={(event) => setBlueCorner(event.target.value)}></input>
            
            <label>Judges scored red</label>
            <input value={judgeRed} onChange={(event) => setJudgeRed(event.target.value)}></input>
            
            <label>Judges scored blue</label>
            <input value={judgeBlue} onChange={(event) => setJudgeBlue(event.target.value)} />
            
            <label>Results</label>
            <input value={results} onChange={(event) => setResults(event.target.value)} />

            <label>Number of rounds</label>
            <input value={numOfRounds} onChange={(event) => setNumOfRounds(event.target.value)} />
        
            <button onClick={enterData}>Add new match</button>
    </form>
    );
}

export default MatchesPost;