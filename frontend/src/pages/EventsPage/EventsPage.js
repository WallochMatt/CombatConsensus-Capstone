import React from "react";
import { Link } from 'react-router-dom'

const EventsPage = (props) => {

    return ( 
        <div className="container">
            <h1>EVENTS PAGE</h1>
            {props.events &&
            props.events.map((event, index) => (
                <Link to={`/event-card/${event.id}/`} key={index}>
                    <p >
                        {event.event_title}
                    </p>
                </Link>
            ))}
        </div>
    );
};

export default EventsPage;