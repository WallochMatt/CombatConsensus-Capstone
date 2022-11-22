import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const EventsPage = (props) => {
    const [events, setEvents] = useState([]);

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
            events.map((event) => (
                <p>
                    {event.event_title}
                </p>
                
            ))}
        </div>
    );
}

export default EventsPage;