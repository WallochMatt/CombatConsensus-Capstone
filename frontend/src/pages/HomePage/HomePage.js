import FanFav from "../../components/FanFav/FanFav";
import OfcFav from "../../components/OfcFav/OfcFav"

const HomePage = (props) => {
    

    return ( 
        <div className="container">
            <FanFav fighters={props.fighters}/>
            <OfcFav fighters={props.fighters}/>
        </div>
    );
};

export default HomePage;




// let data = response.data;
// var fF = data.sort((a, b) => b.fan_total - a.fan_total)[0];
// console.log("ff: ", fF)      
// setFanFav(fF)