import axios from "axios";
import React from "react";
import { useState } from "react";
import useCustomForm from "../../hooks/useCustomForm";
import useAuth from "../../hooks/useAuth";


// {!fan_id ? etc for the button that spawns the moodal? or on the modal itself maybe
const PostScoreModal = (props) => {

    const [user, token] = useAuth();
    let initialValues = { 
        "fan_score_f1" : "",
        "fan_score_f2" : "",
        "match_id" : props.id,
        "fan_id": user.id
    }

    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postScore)
    
    async function postScore(){
        try{
            let response = await axios.post("http://127.0.0.1:8000/user/post/", {
                headers: {
                Authorization: "Bearer " + token,
                },
            });
            if(response.status === 201){
                console.log("after axios call");
            }
        }
        catch(error){
            console.log("caught", error.message)
        }
    };
    
    
    
    return (
        <div>
            <form>
                <label>Score 1</label>
                <input type="integer" value={formData.integer} onChange={handleInputChange}></input>
                <label>Score 2</label>
                <input type="integer" value={formData.text} onChange={handleInputChange}></input>
                <button onClick={handleSubmit}>Post</button>
            </form>
        </div>
    );


}

export default PostScoreModal;