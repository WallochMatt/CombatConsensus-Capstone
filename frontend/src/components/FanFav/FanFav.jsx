import { useEffect, useState } from "react";
import axios from "axios";


const FanFav = (props) => {
    const [fanFav, setFanFav] = useState([]);

    useEffect(()  => {
        const fetchFighterTotals = async () => {
            try{
                let response = await axios.get("http://127.0.0.1:8000/matches/find-ofc-total/");
                let fF = response.data.sort((a, b) => b.fan_total - a.fan_total)[0];    
                setFanFav(fF)
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
                The fans fav: {fanFav.name}
            </p>
        </div>
    );
};

export default FanFav;