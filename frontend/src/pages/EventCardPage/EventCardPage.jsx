import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import PostScoreModal from "../../components/PostScoreModal/PostScoreModal";
import MatchBox from "../../components/MatchBox/MatchBox";


const EventCardPage = (props) => {
    
    const {id} = useParams(); //refering to the event's id


    const [eventMatches, setEventMatches] = useState([]);

    useEffect(() => {
        if(props.matches.length >= 1){
            let matchesForEvent = props.matches;
            matchesForEvent.filter(function(match){
                if(match.event === id){
                    return true;
                }
            })
        setEventMatches(matchesForEvent, ...eventMatches)
        };

    }, [props.matches]); //end of useEffect
    
    console.log("eventMatches: " , eventMatches)

    return ( 
        <div>
            <div>
                EVENT: ""
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