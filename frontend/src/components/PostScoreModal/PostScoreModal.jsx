import axios from "axios";
import useAuth from "../../hooks/useAuth";
import React, { useState } from 'react';

// {!fan_id ? etc for the button that spawns the moodal? or on the modal itself maybe
const PostScoreModal = (props) => {

    const [user, token] = useAuth();

    const [fan_score_1, setFan_score_f1] = useState(27);
    const [fan_score_2, setFan_score_f2] = useState(27);

    function handlSubmit(event) {
        event.preventDefault();
        let userScores = {
            fan_score_f1: fan_score_1,
            fan_score_f2: fan_score_2,
            match_id: props.match_id,

        };
        postScore(userScores)
    }

    async function postScore(userScores){
        console.log("userscores at top of postScores", userScores)
        try{
            let response = await axios.post("http://127.0.0.1:8000/user/post/", userScores, {
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
        console.log("userscores at end of postScores", userScores)
    };
    // console.log("user is: ", user)
    // console.log("token is: ", token)
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="fan_score_f1">Sc 1: </label>
                    <select name="fan_score_f1" id="fan_score_f1" onChange={(event) => setFan_score_f1(event.target.value)} value={fan_score_1}>
                        <option value='27'>27</option>
                        <option value='28'>28</option>
                        <option value='29'>29</option>
                        <option value='30'>30</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="fan_score_f2">Sc 2: </label>
                    <select name="fan_score_f2" id="fan_score_f2" onChange={(event) => setFan_score_f2(event.target.value)} value={fan_score_2}>
                        <option value='27'>27</option>
                        <option value='28'>28</option>
                        <option value='29'>29</option>
                        <option value='30'>30</option>
                    </select>
                </div>
                <input type="button" onClick={handlSubmit} value="Submit card"></input>
                {/* <input type="submit" value="Submit"></input> */}
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
