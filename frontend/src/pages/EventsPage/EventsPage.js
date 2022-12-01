import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'

const EventsPage = (props) => {
    let navigate = useNavigate();



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