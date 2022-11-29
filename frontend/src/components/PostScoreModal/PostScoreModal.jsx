import axios from "axios";
import React, { useEffect } from "react";
import useCustomForm from "../../hooks/useCustomForm";
import useAuth from "../../hooks/useAuth";


// {!fan_id ? etc for the button that spawns the moodal? or on the modal itself maybe
const PostScoreModal = (props) => {

    const [user, token] = useAuth();

    let initialValues = { 
        //target.name : target.value
        fan_score_f1 : undefined,
        fan_score_f2 : undefined,
        match_id : props.match_id, //temp hard coded value
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
    




    return (
        <div>
            <form>
                <div>
                    <label>
                        Score 1
                        <input 
                            placeholder="Score for first fighter"
                            type="text"
                            name="fan_score_f1"
                            value={formData.fan_score_f1} 
                            onChange={handleInputChange}
                        />
                        <label>Score 2</label>
                        <input 
                            placeholder="Score for second fighter"
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
