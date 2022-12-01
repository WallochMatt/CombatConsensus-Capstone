import React from "react";


const MatchesPage = (props) => {

    

    return ( 
        <div className="container">
            <h1>Matches</h1>
            {props.matches &&
            props.matches.map((match, index) => (
                <p key={index}>
                    {match.bout_name}
                </p>
                
            ))}
        </div>
    );
}

export default MatchesPage;