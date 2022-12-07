import "./FanFav.css";


const FanFav = (props) => {

    
    return ( 
        <div className="card-background format-profile">
            <p> The fans fav:</p>
            <>picture</>
            <p>{props.fanFav.name}</p>
        </div>
    );
};

export default FanFav;