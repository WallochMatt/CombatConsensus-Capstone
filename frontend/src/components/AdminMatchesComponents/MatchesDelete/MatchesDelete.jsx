import axios from "axios";
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';


const MatchesDelete = (props) => {

    const [user, token] = useAuth();

    async function deleteMatch(){
        try{
            let response = await axios.delete(`http://127.0.0.1:8000/matches/${props.id}/admin/edit/`, {
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
    }
    
        return (
            <button onClick={deleteMatch}>Delete</button>
    );
}

export default MatchesDelete;