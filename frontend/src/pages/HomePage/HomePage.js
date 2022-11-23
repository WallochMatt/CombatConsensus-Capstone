import React from "react";

import FanFav from "../../components/FanFav/FanFav";


const HomePage = (props) => {
    // const [fanFav, setFanFav] = useState([]);

    // useEffect(() => {
    //     const fetchFanFav = async () => {
    //         try{
    //             let response = await axios.get("http://127.0.0.1:8000/fighters/fanfav/");
    //             setFanFav(response.data)
    //             console.log(fanFav)
    //         }
    //         catch(error){
    //             console.log(error.response.data);
    //         }
    //     };
    //     fetchFanFav();
    //     }, []);



    return ( 
        <div>
            <FanFav />
        </div>
    );
};

export default HomePage;