import axios from "axios";
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const FighterPut = (props) => {
    const [user, token] = useAuth();

    const [fighterId, setFighterId] = useState(0);
    const [editName, setEditName] = useState('');
    const [editImg, setEditImg] = useState('');

    async function editFighter(changedEvent){
        try{
            let response = await axios.put(`http://52.15.152.115:8000/fighters/${fighterId}/admin/edit/`, changedEvent, {
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
            name : `${editName}`,
            image_link: `${editImg}`,
        };
        editFighter(changedEvent)
    }


    return ( 
        <form>
            <label>Select fighter id:&emsp;</label>
            <input value={fighterId} onChange={(event) => setFighterId(event.target.value)} />
            <label>&emsp;Change the name:&emsp;</label>
            <input value={editName} onChange={(event) => setEditName(event.target.value)} />
            
            <label>&emsp;Change the picture:&emsp;</label>
            <input value={editImg} onChange={(event) => setEditImg(event.target.value)} />
            
            <label>&emsp;</label>
            <button onClick={enterData}>Edit Fighter</button>
        </form>
    );
}

export default FighterPut;