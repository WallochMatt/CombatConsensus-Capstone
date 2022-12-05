import React, { useState, useEffect } from 'react';
import EventDelete from '../../components/EventDelete/EventDelete';
import EventPost from '../../components/EventPost/EventPost';
import EventPut from '../../components/EventPut/EventPut';



const AdminEventsPage = (props) => {

//input provides argument for an id param during the call of a submitfunction, id is a parameter for the axios call

    
    
    
    
    return ( 
        // <p>Admin Events Page</p>
        <div>
            <p>POST</p>
            <EventPost />
            <p>PUT</p>
            <EventPut />
            <div className="container">
                <h1>Events(admin)</h1>
                <p>Id Title Date</p>
                {props.events.map((event, index) => (
                    <div key={index}>
                        <p>
                            {event.id} {event.event_title} {event.date}
                        </p>
                        <EventDelete id={event.id}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminEventsPage;