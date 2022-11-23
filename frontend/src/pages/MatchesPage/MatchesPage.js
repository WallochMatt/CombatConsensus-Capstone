import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const MatchesPage = (props) => {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
    const fetchMatches = async () => {
        try {
            let response = await axios.get("http://127.0.0.1:8000/matches/");
            setMatches(response.data)
        }
        catch(error){
            console.log(error.response.data);
        }
    };
    fetchMatches();
    }, [])
    

    return ( 
        <div className="container">
            <h1>Matches</h1>
            {matches &&
            matches.map((match, index) => (
                <p key={index}>
                    {match.bout_name}
                </p>
                
            ))}
        </div>
    );
}

export default MatchesPage;