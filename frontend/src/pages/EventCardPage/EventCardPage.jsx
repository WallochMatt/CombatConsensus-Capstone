import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import PostScoreModal from "../../components/PostScoreModal/PostScoreModal";
import MatchBox from "../../components/MatchBox/MatchBox";


const EventCardPage = (props) => {
    
    const {id} = useParams(); //refering to the event's id


    const [eventMatches, setEventMatches] = useState([]);
    const [currentEvent, setCurrentEvent] = useState();



    useEffect(() => {
        if(props.matches.length >= 1){
            let matchesForEvent = props.matches;
            matchesForEvent.filter(function(match){
                if(match.event === id){
                    return true;
                }
            })
        setEventMatches(matchesForEvent, ...eventMatches);
        setCurrentEvent(props.events[0].event_title)
    };
    
}, [props.matches]); //end of useEffect

    let event_name = eventMatches[0];
    console.log("eventMatches event_name: " , currentEvent)

    
    return ( 
        <div>
            <div>
                EVENT: {currentEvent}
            </div>
            <div>
                {eventMatches.map((match, index) => (
                    <div key={index}>
                        {console.log("in the matches")}
                        <MatchBox match={match}/>
                        <PostScoreModal match_id={match.id}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EventCardPage;