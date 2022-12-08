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
            <div className="side">
                <img id="sugar" src="https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2021/12/13/1ad5303f-313f-4a49-b735-73fd88284ba6_7fb155ff.jpg" />
            </div>

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

            <div className="side">
                <img id="lioness" src="https://www.postwrestling.com/wp-content/uploads/2020/04/Amanda-Nunes.jpg" />
            </div>
        </div>
    );
}

export default MatchesPage;