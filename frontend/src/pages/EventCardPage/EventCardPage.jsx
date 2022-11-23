import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";


const EventCardPage = (props) => {
    const {id} = useParams()

    const [eventCard, setEventCard] = useState({});
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        const fetchEventCardData = async () => {
            try{
                let response = await axios.get(`http://127.0.0.1:8000/events/${id}/`);
                setEventCard(response.data)
            }
            catch(error){
                console.log(error.response.data);
            }
        };
        fetchEventCardData();

        const fetchMatches = async () => {
            try{
                let response = await axios.get(`http://127.0.0.1:8000/matches/${id}/sort-matches/`);
                setMatches(response.data)
            }
            catch(error){
                console.log("failed")
            }
        };
        fetchMatches();
        }, []);
    console.log("eventCard", eventCard)
    console.log("matches", matches)
    return ( 
        <div>
            <div>
                NAME OF EVENT IS: {eventCard.event_title} 
            </div>
            <div>
                
                {matches.map((match, index) => (
                <p key={index}>
                {match.bout_name} 
                {match.fighter_one.name} with an average score of: {match.fans_avrg_one} and judges average of: {match.judge_avg_one}
                {match.fighter_two.name} with an average score of: {match.fans_avrg_two} and judges average of:  {match.judge_avg_two}
                </p>
                ))}
            </div>
        </div>
    );
}

export default EventCardPage;