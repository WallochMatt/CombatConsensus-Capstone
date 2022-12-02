import { useEffect, useState } from "react";
import axios from "axios";


import FanFav from "../../components/FanFav/FanFav";
import OfcFav from "../../components/OfcFav/OfcFav"

const HomePage = (props) => {
        const [ofcFav, setOfcFav] = useState({});
        const [fanFav, setFanFav] = useState([]);

    useEffect(()  => {
        const fetchFighterTotals = async () => {
            try{
                let response = await axios.get("http://127.0.0.1:8000/matches/find-match-total/");

                
                    let jF = response.data.sort((a, b) => b.judge_total - a.judge_total)[0];    
                    setOfcFav(jF)


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
        <div className="container">
            <FanFav fanFav={fanFav}/>
            <OfcFav ofcFav={ofcFav}/>
        </div>
    );
};

export default HomePage;




// let data = response.data;
// var fF = data.sort((a, b) => b.fan_total - a.fan_total)[0];
// console.log("ff: ", fF)      
// setFanFav(fF)