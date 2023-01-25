import { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css";


import FanFav from "../../components/FanFav/FanFav";
import OfcFav from "../../components/OfcFav/OfcFav"

const HomePage = (props) => {
        const [ofcFav, setOfcFav] = useState({});
        const [fanFav, setFanFav] = useState([]);

    useEffect(()  => {
        const fetchFighterTotals = async () => {
            try{
                let response = await axios.get("http://3.143.230.10:8000/matches/find-match-total/");

                
                let jF = response.data.sort((a, b) => b.judge_total - a.judge_total)[0];    
                setOfcFav(jF)


                let fF = response.data.sort((a, b) => b.fan_total - a.fan_total)[0];    
                setFanFav(fF)
            }
            catch(error){
                console.log(error)
            }
        }
        console.log("fav ", ofcFav)
        fetchFighterTotals();
    }, [])

    return ( 
        <div className="flex">
            <div className="side red">
                <img id="john" src="https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg0OTE3NTcyMDAzNTcwODA4/1-1-jan-blachowicz-ufc-267.jpg" />
            </div>

            <div className="centerize" >
                <h2 className="title">Welcome to Combat Consensus</h2>
                <div className="together">
                    <FanFav fanFav={fanFav} fighters={props.fighters}/>
                    <OfcFav ofcFav={ofcFav} fighters={props.fighters}/>
                </div>
            </div>

            <div className="side blue">
                <img id="lioness" src="https://www.postwrestling.com/wp-content/uploads/2020/04/Amanda-Nunes.jpg" />
                {/* <img id="showtime" src="https://sporttechie-prod.s3.amazonaws.com/pettis-athletes-voice-main-image.png" /> */}
            </div>
        </div>
    );
};

export default HomePage;
