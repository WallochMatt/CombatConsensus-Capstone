import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import PostScoreModal from "../../components/PostScoreModal/PostScoreModal";
import MatchBox from "../../components/MatchBox/MatchBox";

import "./EventCardPage.css";


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
        setCurrentEvent(props.events[id - 1].event_title) //double check this with secind event
    };
    
    }, [props.matches]); //end of useEffect

    // let event_name = eventMatches[0];
    // console.log("eventMatches event_name: " , currentEvent)

    return ( 
        <div className="centerize">
            <h2 className="true-center">
                EVENT: {currentEvent}
            </h2>
            <div className="format-ecp" >
                {eventMatches.map((match, index) => (
                    <div  key={index}>
                        <MatchBox match={match}/>
                        {/* use a ternary truthy for the post score modal maybe*/}
                        <PostScoreModal match={match}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EventCardPage;