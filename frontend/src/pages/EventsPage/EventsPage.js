import React from "react";
import { Link } from 'react-router-dom';
import "./EventsPage.css";
import { useNavigate } from "react-router-dom";

const EventsPage = (props) => {
    let navigate = useNavigate();

    function waitLink(event){
        console.log("clicked button");
        navigate(`/event-card/${event.id}/`);
    }

    return ( 
        <div className="flex">
            <div className="side"></div>

            <div className="centerize">
                <h1 className="true-center">EVENTS PAGE</h1>
                <div className="format-ep">
                {props.events &&
                props.events.map((event, index) => (
                    <button className="button" onClick={() => waitLink(event)} key={index}>
                        <p >
                            {event.event_title}
                        </p>
                    </button>
                ))}
                </div>
            </div>

            <div className="side"></div>
        </div>
    );
};

export default EventsPage;