import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import PostScoreModal from "../../components/PostScoreModal/PostScoreModal";
import MatchBox from "../../components/MatchBox/MatchBox";


const EventCardPage = (props) => {
    
    const {id} = useParams(); //refering to the event's id

    const [eventCard, setEventCard] = useState({});
    const [matches, setMatches] = useState([]);
    
    useEffect(() => {
        const fetchEventCardData = async () => {
            console.log("in fetchEventCardData")
            try{
                let response = await axios.get(`http://127.0.0.1:8000/events/${id}/`);
                setEventCard(response.data)
            }
            catch(error){
                console.log("fetchEventCardData: ", error);
            }
        };
        fetchEventCardData();
        
        //id on here still refers to an events id, its the matches of event(id)
        const fetchMatches = async () => {
            console.log("in fetchMatches")
            try{
                let response = await axios.get(`http://127.0.0.1:8000/matches/${id}/sort-matches/`);
                setMatches(response.data)
            }
        catch(error){
            console.log("fetchMatches error: ", error)
        }
    };
    fetchMatches();
}, []); //end of useEffect
    
    
    return ( 
        <div>
            <div>
                EVENT: "{eventCard.event_title}"
            </div>
            <div>
                {matches.map((match, index) => (
                <div key={index}>
                    {console.log("in the matches.map")}
                    <MatchBox match={match}/>
                    <PostScoreModal match_id={match.id}/>
                </div>
                ))}
            </div>
        </div>
    );
}

export default EventCardPage;