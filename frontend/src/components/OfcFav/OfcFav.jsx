import "./OfcFav.css";


const OfcFav = (props) => {


    return ( 
        <div className="card-background format-profile">
            <p>The official fav:</p>
            <>picture</>
            <p>{props.ofcFav.name}</p>
        </div>
    );
};

export default OfcFav;