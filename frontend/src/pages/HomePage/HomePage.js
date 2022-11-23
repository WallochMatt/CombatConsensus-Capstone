import React from "react";

import FanFav from "../../components/FanFav/FanFav";
import OfcFav from "../../components/OfcFav/OfcFav"

const HomePage = (props) => {


    return ( 
        <div>
            <FanFav />
            <OfcFav />
        </div>
    );
};

export default HomePage;