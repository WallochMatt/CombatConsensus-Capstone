import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import UserCards from "../../components/UserCards/UserCards";
import { Link } from "react-router-dom";
import "./MatchPage.css";

const MatchPage = (props) => {

    const {id} = useParams();
    
    const [scoreCards, setScoreCards] = useState([]);
    const [currentMatch, setCurrentMatch] = useState({});
    const [red, setRed] =useState({});
    const [blue, setBlue] = useState({});

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
        setCurrentMatch(props.matches[id - 1]);
        fetchScoreCards();
        };

        const fetchRed = async () => {
            try{
                let response = await axios.get(`http://127.0.0.1:8000/fighters/${currentMatch.red_corner_id}/`);
                setRed(response.data)
            }
            catch(error){
                console.log(error)
            }
        };

        fetchRed();
        const fetchBlue = async () => {
            try{
                let response = await axios.get(`http://127.0.0.1:8000/fighters/${currentMatch.blue_corner_id}/`);
                setBlue(response.data)
            }
            catch(error){
                console.log(error)
            }
        }

        fetchRed();
        fetchBlue();
    }, [props.matches, currentMatch]);
    
    return (
        <div className="flex">
            <div  className="side red">
                <img id="corner-red" src={`${red.image_link}`} />
            </div>
            
            <div className="centerize">
                <div className="match-details">
                    <h2 >
                        {currentMatch.bout_name}
                    </h2>
                    <p>{currentMatch.results}</p>
                </div>
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