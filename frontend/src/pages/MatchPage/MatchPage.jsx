import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import UserCards from "../../components/UserCards/UserCards";
import { Link } from "react-router-dom";

const MatchPage = (props) => {
    let navigate = useNavigate();

    const {id} = useParams();
    
    const [scoreCards, setScoreCards] = useState([]);
    const [currentMatch, setCurrentMatch] = useState();

    useEffect(() => {
        const fetchScoreCards = async () => {
            try {
                let response = await axios.get(`http://127.0.0.1:8000/user/${id}/findcards/`)
                setScoreCards(response.data);
            }
            catch (error) {
                console.log(error.response);
            }
        }
        if(props.matches.length >= 1){
            let matchesForEvent = props.matches;
            matchesForEvent.filter(function(match){
                if(match.event === id){
                    return true;
                }
            })
        setCurrentMatch(props.matches[id - 1].bout_name);
        fetchScoreCards();
    };
    
    }, [props.matches]);

    console.log(props.matches)
    
    
    return (
<div className="flex">
            <div className="side red">
                <img id="" src="" />
            </div>
            
            <div className="centerize">

                <h2 className="true-center">
                    {currentMatch}
                </h2>

                <div className="format-ecp" >
                    {scoreCards.map((card, index) => (
                        <div  key={index}>
                            <p>
                                <Link to={`/user/${card.fan.username}`}>{card.fan.username}'s Score Card</Link>
                            </p>
                            <UserCards card={card} />
                        </div>
                    ))}
                </div>

            </div>

            <div className="side blue">
                <img id="" src="" />
            </div>
        </div>
    );
}

export default MatchPage;