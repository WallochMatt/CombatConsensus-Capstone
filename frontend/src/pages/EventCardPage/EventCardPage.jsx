import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import PostScoreModal from "../../components/PostScoreModal/PostScoreModal";


const EventCardPage = (props) => {
    let navigate = useNavigate();
    const {id} = useParams(); //refering to the event's id

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


        //id on here still refers to an events id, its the matches of event(id)
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


    return ( 
        <div>
            <div>
                EVENT: "{eventCard.event_title}"
            </div>
            <div>
                
                {matches.map((match, index) => (
                <div>
                    <p key={index}>
                    {match.bout_name}<br/>
                    {match.fighter_one.name} with a fans average score of: {match.fans_avrg_one} and judges average of: {match.judge_avg_one}<br/>
                    {match.fighter_two.name} with a fans average score of: {match.fans_avrg_two} and judges average of:  {match.judge_avg_two}<br/>
                    Official Ruling: {match.results}
                    </p>
                    <PostScoreModal match_id={match.id}/>
                </div>
                ))}
            </div>
        </div>
    );
}

export default EventCardPage;