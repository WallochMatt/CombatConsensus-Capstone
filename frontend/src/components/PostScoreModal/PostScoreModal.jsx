import axios from "axios";
import useAuth from "../../hooks/useAuth";
import React, { useState } from 'react';

// {!fan_id ? etc for the button that spawns the moodal? or on the modal itself maybe
const PostScoreModal = (props) => {

    const [user, token] = useAuth();

    const [fan_score_1, setFan_score_f1] = useState(27);
    const [fan_score_2, setFan_score_f2] = useState(27);

    const [total, setTotal] = useState([0, 0, 0, 0, 0])


    function handlSubmit(event) {
        event.preventDefault();
        let fan_score_1 = total.reduce((accumulator, currentValue) => accumulator + currentValue);

        let userScores = {
            fan_score_f1: fan_score_1,
            fan_score_f2: 28,//fan_score_2,
            match_id: props.match.id,
        };
        console.log(userScores)
        // postScore(userScores)
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


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    {/* for each round, instatiate these two fields, change the values to 7-10, setting the total to state */}


    function handleRound(index, value){
        let roundScores = total // reduce the array to one num
        roundScores[index] = parseInt(value)
        console.log("roundScores: ", roundScores)
        setTotal(roundScores)
        console.log(total)
    }






    function getRounds(){
        const rounds = [];
        for(let i = 0; i < props.match.number_of_rounds; i++){
            // console.log("propsmatchnumberofrounds" , props.match.number_of_rounds)
            rounds.push(sendForm(i))
        };
        return rounds
    }
    



    function sendForm(i){
        // console.log("i: ", i)

        return(
            <div>
                <p>Round {i + 1}</p>
                <div>
                    {/* put the fighter in the label */}
                    <label htmlFor="fan_score_f1">Sc 1: </label>
                    <select name="fan_score_f1" id="fan_score_f1" onChange={(event) => handleRound(i, event.target.value)}>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="fan_score_f2">Sc 2: </label>
                    <select name="fan_score_f2" id="fan_score_f2" onChange={(event) => setFan_score_f2(event.target.value)} value={fan_score_2}>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>
                        <option value='10'>10</option>
                    </select>
                </div>
                
            </div>
        );
    };



//return of component
    return (
        <div>
            <div>
                {getRounds()}
            </div>
            <div>

                <input type="button" onClick={handlSubmit} value="Submit card"></input>
            </div>
        </div>
    )
}

export default PostScoreModal;


// return (
//     <div>
//         <form>
//             {/* for each round, instatiate these two fields, change the values to 7-10, setting the total to state */}
//             {/*  */}
//             {}
//             <div>
//                 <label htmlFor="fan_score_f1">Sc 1: </label>
//                 <select name="fan_score_f1" id="fan_score_f1" onChange={(event) => setFan_score_f1(event.target.value)} value={fan_score_1}>
//                     <option value='27'>27</option>
//                     <option value='28'>28</option>
//                     <option value='29'>29</option>
//                     <option value='30'>30</option>
//                 </select>
//             </div>
//             <div>
//                 <label htmlFor="fan_score_f2">Sc 2: </label>
//                 <select name="fan_score_f2" id="fan_score_f2" onChange={(event) => setFan_score_f2(event.target.value)} value={fan_score_2}>
//                     <option value='27'>27</option>
//                     <option value='28'>28</option>
//                     <option value='29'>29</option>
//                     <option value='30'>30</option>
//                 </select>
//             </div>
//             <input type="button" onClick={handlSubmit} value="Submit card"></input>
//         </form>
//     </div>
// );
