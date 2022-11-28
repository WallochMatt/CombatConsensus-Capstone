import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'

const EventsPage = (props) => {
    const [events, setEvents] = useState([]);

    let navigate = useNavigate();


    useEffect(() => {
    const fetchEvents = async () => {
        try {
            let response = await axios.get("http://127.0.0.1:8000/events/");
            setEvents(response.data)
        }
        catch(error){
            console.log(error.response.data);
        }
    };
    fetchEvents();
    }, [])
    
    return ( 
        <div className="container">
            <h1>EVENTS PAGE</h1>
            {events &&
            events.map((event, index) => (
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