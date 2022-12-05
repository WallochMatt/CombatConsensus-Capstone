import axios from "axios";
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MatchesPut = (props) => {
    const [user, token] = useAuth();

    const [matchId, setMatchId] = useState(0);
    const [editBoutName, setEditBoutName] = useState('');
    const [editEventId, setEditEventId] = useState(0);
    const [editRedCorner, setEditRedCorner] = useState(0);
    const [editBlueCorner, setEditBlueCorner] = useState(0);
    const [editJudgeRed, setEditJudgeRed] =useState(0);
    const [editJudgeBlue, setEditJudgeBlue] = useState(0);
    const [editResults, setEditResults] = useState(0);
    const [editNumOfRounds, setEditNumOfRounds] = useState(0);

    async function editMatch(changedEvent){
        try{
            let response = await axios.put(`http://127.0.0.1:8000/matches/${matchId}/admin/edit/`, changedEvent, {
                headers: {
                    Authorization: "Bearer " + token,
                }
            });
            if(response.status === 200){
                window.location.reload(false);
            }
        }
        catch(error){
            console.log(error)
        }
    };
    
    function enterData(event) {
        event.preventDefault();
        let changedMatch = {
            bout_name: `${editBoutName}`,
            event_id : `${editEventId}`,
            red_corner_id: `${editRedCorner}`,
            blue_corner_id: `${editBlueCorner}`,
            red_judge_avg: `${editJudgeRed}`,
            blue_judge_avg: `${editJudgeBlue}`,
            results: `${editResults}`,
            number_of_rounds: `${editNumOfRounds}`
        };
        editMatch(changedMatch)
    };
    
    return (
        <form>
            <label>Select matchID</label>
            <input value={matchId} onChange={(event) => setMatchId(event.target.value)} />
            
            <label>bout name</label>
            <input value={editBoutName} onChange={(event) => setEditBoutName(event.target.value)} />

            <label>Event ID</label>
            <input value={editEventId} onChange={(event) => setEditEventId(event.target.value)} />
            
            <label>Select Red Fighter</label>
            <input value={editRedCorner} onChange={(event) => setEditRedCorner(event.target.value)} />
    
            <label>Select blue fighter</label>
            <input value={editBlueCorner} onChange={(event) => setEditBlueCorner(event.target.value)}></input>
            
            <label>Judges scored red</label>
            <input value={editJudgeRed} onChange={(event) => setEditJudgeRed(event.target.value)}></input>
            
            <label>Judges scored blue</label>
            <input value={editJudgeBlue} onChange={(event) => setEditJudgeBlue(event.target.value)} />
            
            <label>Results were</label>
            <input value={editResults} onChange={(event) => setEditResults(event.target.value)} />

            <label>Number of rounds</label>
            <input value={editNumOfRounds} onChange={(event) => setEditNumOfRounds(event.target.value)} />
        
            <button onClick={enterData}>Change the Match</button>
        </form>
    );
}

export default MatchesPut;