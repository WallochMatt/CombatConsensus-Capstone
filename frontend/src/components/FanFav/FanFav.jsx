import { useEffect, useState } from "react";
import axios from "axios";


const FanFav = (props) => {

    

    return ( 
        <div>
            <p>
                The fans fav: {props.fanFav.name}
            </p>
        </div>
    );
};

export default FanFav;