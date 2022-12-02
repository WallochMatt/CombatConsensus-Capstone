import { useEffect, useState } from "react";
import axios from "axios";


const OfcFav = (props) => {
    const [ofcFav, setOfcFav] = useState({});

    useEffect(()  => {
        const fetchFighterTotals = async () => {
            try{
                let response = await axios.get("http://127.0.0.1:8000/matches/find-ofc-total/");
                let jF = response.data.sort((a, b) => b.judge_total - a.judge_total)[0];    
                setOfcFav(jF)
            }
            catch(error){
                console.log(error)
            }
        }
        fetchFighterTotals();
    }, [])


    return ( 
        <div>
            <p>
                The official fav: {ofcFav.name}
            </p>
        </div>
    );
};

export default OfcFav;