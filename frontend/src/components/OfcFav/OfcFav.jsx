import { useEffect, useState } from "react";
import "./OfcFav.css";


const OfcFav = (props) => {

    return ( 
        <div className="card-background format-profile">
            <p>The official fav:</p>
            <img src={`${props.ofcFav.image}`} />
            <p>{props.ofcFav.name}</p>
        </div>
    );
};

export default OfcFav;