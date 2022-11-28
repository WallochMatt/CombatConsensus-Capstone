import axios from "axios";
import React, { useEffect } from "react";
import useCustomForm from "../../hooks/useCustomForm";
import useAuth from "../../hooks/useAuth";


// {!fan_id ? etc for the button that spawns the moodal? or on the modal itself maybe
const PostScoreModal = (props) => {

    const [user, token] = useAuth();

    let initialValues = { 
        //target.name : target.value
        fan_score_f1 : parseInt(undefined),
        fan_score_f2 : parseInt(undefined),
        match_id : 1, //temp hard coded value
        fan_id : user.id
    };

    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postScore)
    
    async function postScore(){
        try{
            let response = await axios.post("http://127.0.0.1:8000/user/post/", formData, {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    }
            })
            if(response.status === 201){
                console.log("after axios call");
            }
        }
        catch(error){
            console.log("caught", error.message)
        }
    };
    
    console.log("user is: ", user)
    console.log("token is: ", token)
    





    // function testing(){
    //     console.log("fan_score_1:", formData.fan_score_f1)
    // }

    // useEffect(() => {
    //     testing(); 
    //     []
    // })



    return (
        <div>
            <form>
                <div>
                    <label>
                        Score 1
                        <input 
                            type="text"
                            name="fan_score_f1"
                            value={formData.fan_score_f1} 
                            onChange={handleInputChange}
                        />
                        <label>Score 2</label>
                        <input 
                            type="integer"
                            name="fan_score_f2" 
                            value={formData.fan_score_f2} 
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <div>
                    <button onClick={handleSubmit}>Post</button>
                </div>
            </form>
            {/* {console.log("fan_score_1:", formData.fan_score_f1)} */}
        </div>
    );


}

export default PostScoreModal;