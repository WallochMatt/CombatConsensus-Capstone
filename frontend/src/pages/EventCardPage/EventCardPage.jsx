import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import MatchBox from "../../components/MatchBox/MatchBox";
import axios from "axios";
import "./EventCardPage.css";


const EventCardPage = (props) => {

    const {id} = useParams(); //refering to the event's id

    const [eventMatches, setEventMatches] = useState([]);
    const [currentEvent, setCurrentEvent] = useState();

    useEffect(() => {
        const fetchCurrentEvent = async () => {
            try{
                let response = await axios.get(`http://3.142.40.75:8000/events/${id}/`);
                setCurrentEvent(response.data.event_title)
            }
            catch(error){
                console.log(error)
            }
        };
        fetchCurrentEvent();

        const fetchEventMatches = async () => {
            try{
                let response = await axios.get(`http://3.142.40.75:8000/matches/${id}/sort-matches/`)
                setEventMatches(response.data);
            }
            catch(error){
                console.log(error.response.data);
            }
        };
        fetchEventMatches();

    }, [props.matches]); //end of useEffect
    console.log(eventMatches)

    return ( 
        <div className="flex">
            <div className="side red">
                <img id="paddy" src="https://cdn.vox-cdn.com/thumbor/rRlEmsLdcLoUgz4TBCxz8W70unQ=/454x568:2986x2555/1200x800/filters:focal(1233x556:1867x1190)/cdn.vox-cdn.com/uploads/chorus_image/image/70007491/1338319637.0.jpg" />
            </div>
            
            <div className="centerize" data-cy="cardPage-mid">
                <h2 className="true-center">
                    {currentEvent}
                </h2>
                <div className="format-ecp" >
                    {eventMatches.map((match, index) => (
                        <div style={{margin: "2em 0em"}} key={index}>
                            <Link className="link-cover" to={`/match/${match.id}`}>
                                <MatchBox match={match}/>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className="side blue">
                <img id="lewis" src="https://www.thesun.co.uk/wp-content/uploads/2018/11/NINTCHDBPICT000439867467-e1541169986528.jpg" />
            </div>
        </div>
    );
}

export default EventCardPage;