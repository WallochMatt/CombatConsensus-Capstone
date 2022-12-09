import "./FanFav.css";


const FanFav = (props) => {

    
    return ( 
        <div className="card-background format-profile">
            <p> The Fans' Favorite:</p>
            <img id="fanFavImg" src={`${props.fanFav.image}`} />
            <p>{props.fanFav.name}</p>
        </div>
    );
};

export default FanFav;