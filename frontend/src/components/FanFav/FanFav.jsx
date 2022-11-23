import { useEffect, useState } from "react";
import axios from "axios";




const FanFav = (props) => {
    
    
    const [fanFav, setFanFav] = useState([]);

    useEffect(() => {
        const fetchFanFav = async () => {
            try{
                let response = await axios.get("http://127.0.0.1:8000/fighters/fanfav/");
                setFanFav(response.data)
                console.log(fanFav)
            }
            catch(error){
                console.log(error.response.data);
            }
        };
        fetchFanFav();
        }, []);



    return ( 
        <div>
            <p>
                The fans fav: {fanFav.name}
            </p>
        </div>
    );
};

export default FanFav;