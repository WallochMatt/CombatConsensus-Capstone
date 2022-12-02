import { useEffect, useState } from "react";
import axios from "axios";


const OfcFav = (props) => {


    return ( 
        <div>
            <p>
                The official fav: {props.ofcFav.name}
            </p>
        </div>
    );
};

export default OfcFav;