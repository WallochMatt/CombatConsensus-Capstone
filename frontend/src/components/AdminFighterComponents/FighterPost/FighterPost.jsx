import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';


const FighterPost = (props) => {
    
    const [user, token] = useAuth();

    const [newName, setNewName] = useState('');
    const [newImg, setNewImg] = useState('');

    async function addNewFighter(newFighter){
        try{
            let response = await axios.post('http://3.142.40.75:8000/fighters/admin/add/', newFighter, {
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
            name : `${newName}`,
            image_link : `${newImg}`,
        };
        addNewFighter(newFighter)
    };
    
    
    return ( 
        <form>
            <label>The fighter's name: &emsp;</label>
            <input value={newName} onChange={(event) => setNewName(event.target.value)} />
            <label>&emsp;The fighter's image link: &emsp;</label>
            <input value={newImg} onChange={(event) => setNewImg(event.target.value)} />
            <label>&emsp;</label>
            <button onClick={enterData}>Add Fighter</button>
        </form>
    );
}

export default FighterPost;