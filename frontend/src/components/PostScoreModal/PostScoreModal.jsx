import axios from "axios";


import useAuth from "../../hooks/useAuth";
import React, { useState } from 'react';


/*
Notes foor stand alone:
useState on the fields for scores 
the drop down values could be sent into a function that adds them, and changes the state to that total
handleSubmit to get the data put into psotScore(what is now initialValues)
*/
// {!fan_id ? etc for the button that spawns the moodal? or on the modal itself maybe
const PostScoreModal = (props) => {

    const [user, token] = useAuth();
    const [fan_score_f1, setFanScoreF1] = useState();
    const [fan_score_f2, setFanScoreF2] = useState();
    console.log("fan score at start: ", fan_score_f1)

    function handleSubmit(event) { 
        event.preventDefaukt();
        let userScores = {
            fan_score_f1: fan_score_f1,
            fan_score_f2: fan_score_f2,
            match_id: props.match_id,
            fan_id: user.id
        };
        console.log("fanscore1: ", fan_score_f1)
        postScore(userScores)

    };
    
    async function postScore(scores){
        console.log(scores)
        try{
            let response = await axios.post("http://127.0.0.1:8000/user/post/", scores, {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    }
            })
            if(response.status === 201){
                console.log("POST SENT");
            }
        }
        catch(error){
            console.log("caught", error.message)
        }
    };

    // console.log("user is: ", user)
    // console.log("token is: ", token)
    




    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="f1_r1">Sc 1: </label>
                    <select name="fan_score_f1" id="red" onSelect={(event) => setFanScoreF1(event.target.value)}>
                        <option value='27'>27</option>
                        <option value='28'>28</option>
                        <option value='29'>29</option>
                        <option value='30'>30</option>
                    </select>
                </div>
                <div>
                    <label>Sc 2: </label>
                    <select name="f2_r1" id="blue" onSelect={(event) => setFanScoreF2(event.target.value)}>
                        <option value='27'>27</option>
                        <option value='28'>28</option>
                        <option value='29'>29</option>
                        <option value='30'>30</option>
                    </select>
                </div>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );


}

export default PostScoreModal;


{/* <option value='27'>27</option>
<option value='28'>28</option>
<option value='29'>29</option>
<option value='30'>30</option> */}



// return (
//     <div>
//         <form onSubmit={handleSubmit}>

//             <div>
//                 <label htmlFor="score1">
//                     Score 1
//                         <select name="fan_score_f1" id="score1" onChange={handleInputChange}>
//                             <option value='27'>27</option>
//                             <option value='28'>28</option>
//                             <option value='29'>29</option>
//                             <option value='30'>30</option>
//                         </select>
//                 </label>
//             </div>

//             <div>
//                 <label htmlFor="score2">
//                     Score 2
    //                     <select name="fan_score_f1" id="score2" onChange={handleInputChange}>
    //                         <option value='27'>27</option>
    //                         <option value='28'>28</option>
    //                         <option value='29'>29</option>
    //                         <option value='30'>30</option>
    //                     </select>
//                     {/* <input 
//                         type="submit" value="Submit"
//                     /> */}
//                 </label>
//             </div>

//                 <button>Enter</button>
//         </form>
//         {/* {console.log("fan_score_1:", formData.fan_score_f1)} */}
//     </div>
// );
