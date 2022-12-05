import axios from "axios";
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const EventPut = (props) => {
    const [user, token] = useAuth();

    const [eventId, setEventId] = useState(0);
    const [editedEventTitle, setEditedEventTitle] = useState('');
    const [editedEventDate, setEditedEventDate] = useState('');
    
    async function editEvent(changedEvent){
        try{
            let response = await axios.put(`http://127.0.0.1:8000/events/${eventId}/admin/edit/`, changedEvent, {
                headers: {
                    Authorization: "Bearer " + token,
                }
            });
            if(response.status === 200){
                window.location.reload(false);
            }
        }
        catch(error){
            console.log(error)
        }
    }
    
    function enterData(event) {
        event.preventDefault();
        let changedEvent = {
            event_title : `${editedEventTitle}`,
            date : `${editedEventDate}`
        };
        editEvent(changedEvent)
    }
    return ( 
        <form>
            <label>Select event id</label>
            <input value={eventId} onChange={(event) => setEventId(event.target.value)}></input>
            <label>Edit the Event Title</label>
            <input value={editedEventTitle} onChange={(event) => setEditedEventTitle(event.target.value)}></input>
            <label>Post a new Event Date</label>
            <input type="date" value={editedEventDate} onChange={(event) => setEditedEventDate(event.target.value)}></input>
            <button onClick={enterData}>Change the event</button>
        </form>

    );
}

export default EventPut;