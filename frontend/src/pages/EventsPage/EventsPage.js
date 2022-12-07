import React from "react";
import "./EventsPage.css";
import { useNavigate } from "react-router-dom";

const EventsPage = (props) => {
    let navigate = useNavigate();

    function waitLink(event){
        navigate(`/event-card/${event.id}/`);
    }

    return ( 
        <div className="flex event-pics">
            <div className="side"></div>

            <div className="centerize">
                <h1 className="true-center">EVENTS PAGE</h1>
                <div className="format">
                    {props.events &&
                    props.events.map((event, index) => (
                        <div className="blurbs" key={index}>
                            <button className="button" onClick={() => waitLink(event)} >
                                <p >
                                    {event.event_title}
                                </p>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="side"></div>
        </div>
    );
};

export default EventsPage;