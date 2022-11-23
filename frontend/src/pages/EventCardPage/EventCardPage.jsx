import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";





const EventCardPage = (props) => {
    const {id} = useParams()

    const [eventCard, setEventCard] = useState({});

    useEffect(() => {
        const fetchEventCardData = async () => {
            try{
                let response = await axios.get(`http://127.0.0.1:8000/events/${id}/`);
                setEventCard(response.data)
            }
            catch(error){
                console.log(error.response.data);
            }
        };
        fetchEventCardData();
        }, []);
    
    return ( 
        <div>
            {/* {id} */}
            NAME OF EVENT IS: {eventCard.event_title} 
        </div>
    );
}

export default EventCardPage;