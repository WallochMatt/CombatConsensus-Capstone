import axios from "axios";
import useAuth from "../../hooks/useAuth";
import React, { useState } from 'react';
import "./PostScore.css";

const PostScore = (props) => {

    const [user, token] = useAuth();

    const [redTotal, setRedTotal] = useState([0, 0, 0, 0, 0])
    const [blueTotal, setBlueTotal] = useState([0, 0, 0, 0, 0])


    function handlSubmit(event) {
        event.preventDefault();
        let red_fan_score = redTotal.reduce((accumulator, currentValue) => accumulator + currentValue);
        let blue_fan_score = blueTotal.reduce((accumulator, currentValue) => accumulator + currentValue);

        let userScores = {
            red_fan_score: red_fan_score,
            blue_fan_score: blue_fan_score,
            match_id: props.match.id,
        };
        if(red_fan_score + blue_fan_score > 16){
            console.log(userScores) //do the post
        }
        else{
            alert("You need to enter into all the fields")
        }
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
    };


    function handleRoundRed(index, value){
        let roundScores = redTotal // reduce the array to one num
        roundScores[index] = parseInt(value)
        setRedTotal(roundScores)
    }

    function handleRoundBlue(index, value){
        let roundScores = blueTotal // reduce the array to one num
        roundScores[index] = parseInt(value)
        setBlueTotal(roundScores)
    }


    function getRounds(){
        const rounds = [];
        for(let i = 0; i < props.match.number_of_rounds; i++){
            rounds.push(sendForm(i))
        };
        return rounds
    }


    function sendForm(i){
        return(
            <div key={i} className="between-rounds">
                <p>Round {i + 1}</p>
                <div>
                    <label htmlFor="fan_score_f1" style={{color: "red"}}>Red:</label>
                    <select name="fan_score_f1" id="fan_score_f1" onChange={(event) => handleRoundRed(i, event.target.value)} required>
                        <option value={0}>--</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="fan_score_f2" style={{color: "blue"}}>Blue:</label>
                    <select name="fan_score_f2" id="fan_score_f2" onChange={(event) => handleRoundBlue(i, event.target.value)} required>
                        <option value={0}>--</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                    </select>
                </div>
            </div>
        );
    };


//return of component
    return (
        <div>
            <div className="in-line">
                {getRounds()}
            </div>
            <div className="pad">
                <input className="button-color" type="button" onClick={handlSubmit} value="Submit card" style={{}}></input>
            </div>
        </div>
    )
};

export default PostScore;
