import axios from "axios";
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import './EventDelete.css';

const EventDelete = (props) => {
    const [user, token] = useAuth();

    async function deleteEvent(){
        try{
            let response = await axios.delete(`http://3.142.40.75:8000/events/${props.id}/admin/edit/`, {
                headers: {
                    Authorization: "Bearer " + token,
                }
            });
            if(response.status === 204){
                window.location.reload(false);
            }
        }
        catch(error){
            console.log(error)
        }
    };

    return ( 
        <button className="adm-ev-del" onClick={deleteEvent}>Delete</button>
    );
}

export default EventDelete;