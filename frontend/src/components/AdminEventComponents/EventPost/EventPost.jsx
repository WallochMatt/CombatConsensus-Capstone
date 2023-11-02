import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';


const EventPost = (props) => {
    
    const [user, token] = useAuth();

    const [newEventTitle, setNewEventTitle] = useState('');
    const [newEventDate, setNewEventDate] = useState('');


    async function addNewEvent(newEvent){
        try{
            let response = await axios.post('http://52.15.152.115:8000/events/admin/add/', newEvent, {
                headers: {
                    Authorization: "Bearer " + token,
                }
            });
            if(response.status === 201){
                window.location.reload(false);
            }
        }
        catch(error){
            console.log(error)
        }
    }



    function enterData(event) {
        event.preventDefault();
        let newEvent = {
            event_title : `${newEventTitle}`,
            date : `${newEventDate}`
        };
        addNewEvent(newEvent)
    };
    
    
    
    return (
        <form>
            <label>New Event Title: &emsp;</label>
            <input value={newEventTitle} onChange={(event) => setNewEventTitle(event.target.value)}></input>
            <label>&emsp; New Event Date: &emsp;</label>
            <input type="date" value={newEventDate} onChange={(event) => setNewEventDate(event.target.value)}></input>
            <label>&emsp;</label>
            <button onClick={enterData}>Add Event</button>
        </form>
    );
}

export default EventPost;