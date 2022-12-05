import React, { useState, useEffect } from 'react';
import EventPost from '../../components/EventPost/EventPost';




const AdminEventsPage = (props) => {

//input provides argument for an id param during the call of a submitfunction, id is a parameter for the axios call

    
    
    
    
    return ( 
        // <p>Admin Events Page</p>
        <div>
            <EventPost />
            <div className="container">
                <h1>Events(admin)</h1>
                <p>Id Title Date</p>
                {props.events.map((event, index) => (
                    <p key={index}>
                        {event.id} {event.event_title} {event.date}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default AdminEventsPage;