import React from "react";
import "./MatchesPage.css"
import { useNavigate } from "react-router-dom";

const MatchesPage = (props) => {    
    let navigate = useNavigate();

    function sendEvent(match){
        navigate(`/event-card/${match.event_id}/`)
    }
// link matches to the event theyre from?
    return ( 
        <div className="flex matches-pics">
            <div className="side"></div>

            <div className="centerize">
                <h1 className="true-center">Matches</h1>
                
                <div className="format">
                    {props.matches &&
                    props.matches.map((match, index) => (
                        <div className="blurbs"  key={index}>
                            <button className="button" onClick={() => sendEvent(match)}>
                                <p>{match.bout_name}</p>
                            </button>
                        </div>
                    ))}
                </div>

            </div>

            <div className="side"></div>
        </div>
    );
}

export default MatchesPage;