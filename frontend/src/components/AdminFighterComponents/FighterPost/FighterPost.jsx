import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';


const FighterPost = (props) => {
    
    const [user, token] = useAuth();

    const [newName, setNewName] = useState('');

    async function addNewFighter(newFighter){
        try{
            let response = await axios.post('http://127.0.0.1:8000/fighters/admin/add/', newFighter, {
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
    };

    function enterData(event) {
        event.preventDefault();
        let newFighter = {
            name : `${newName}`
        };
        addNewFighter(newFighter)
    };
    
    
    return ( 
        <form>
            <label>The fighter's name</label>
            <input value={newName} onChange={(event) => setNewName(event.target.value)} />
            <button onClick={enterData}>Add the new fighter</button>
        </form>
    );
}

export default FighterPost;