import axios from "axios";
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const FighterDelete = (props) => {
    const [user, token] = useAuth();

    async function deleteFighter(){
        try{
            let response = await axios.delete(`http://3.142.40.75:8000/fighters/${props.id}/admin/edit/`, {
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
        <button className="adm-ev-del" onClick={deleteFighter}>Delete</button>
    );
}

export default FighterDelete;