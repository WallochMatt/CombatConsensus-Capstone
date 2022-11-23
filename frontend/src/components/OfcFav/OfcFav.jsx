import { useEffect, useState } from "react";
import axios from "axios";




const OfcFav = (props) => {
    
    
    const [ofcFav, setOfcFav] = useState({});

    useEffect(() => {
        const fetchOfcFav = async () => {
            try{
                let response = await axios.get("http://127.0.0.1:8000/fighters/ofcfav/");
                setOfcFav(response.data)
            }
            catch(error){
                console.log(error.response.data);
            }
        };
        fetchOfcFav();
        }, []);



    return ( 
        <div>
            <p>
                The official fav: {ofcFav.name}
            </p>
        </div>
    );
};

export default OfcFav;