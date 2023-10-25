import { useParams } from "react-router-dom";
import React, { useState, useEffect, Suspense } from 'react';
import axios from "axios";
import UserCards from "../../components/UserCards/UserCards";
import { Link } from "react-router-dom";
import "./MatchPage.css";
import PostScore from "../../components/PostScore/PostScore";

import MatchBox from "../../components/MatchBox/MatchBox";
import PostCondition from "../../components/PostCondition/PostCondition";


const MatchPage = (props) => {
    

    const {id} = useParams();
    
    const [scoreCards, setScoreCards] = useState([]);
    const [currentMatch, setCurrentMatch] = useState({});
    const [red, setRed] =useState({});
    const [blue, setBlue] = useState({});

    useEffect(() => {
        const fetchCurrentMatch = async () => {
            try{
                let response = await axios.get(`http://3.142.40.75:8000/matches/${id}/`);
                setCurrentMatch(response.data);
                setRed(response.data.red_corner);
                setBlue(response.data.blue_corner);
            }
            catch(error){
                console.log(error.response);
            }
        }
        fetchCurrentMatch();
        console.log(currentMatch)

        const fetchScoreCards = async () => {
            try {
                let response = await axios.get(`http://3.142.40.75:8000/user/${id}/findcards/`)
                setScoreCards(response.data);
            }
            catch (error) {
                console.log(error.response);
            }
        }
        fetchScoreCards();

    }, [props.matches]); //end of useEffect
    

    return (
        <div className="flex">
            <div  className="side red">
                <img id="corner-red" src={`${red.image_link}`} />
            </div>
        
            <div className="centerize" data-cy="match-mid">

                <div className="match-details">
                    <h2 >
                        <span style={{color: "red"}}>{red.name}</span> VS. <span style={{color: "blue"}}>{blue.name}</span>
                    </h2>
                    <p>{currentMatch.results}</p>
                </div>
                <hr className="line"></hr>

                <PostCondition currentMatch={currentMatch} scoreCards={scoreCards}/>
                
                <hr className="line"></hr>
                <div className="format-ecp" >
                    {scoreCards.map((card, index) => (
                        <div className="card-space"  key={index}>
                            <Link className="link-cover" to={`/user/${card.fan.username}`}>
                                {card.fan.username}'s Score Card
                                <UserCards card={card} />
                            </Link>
                        </div>
                    ))}
                </div>

            </div>

            <div className="side blue">
                <img id="corner-blue" src={`${blue.image_link}`} />
            </div>
        </div>
    );
}

export default MatchPage;