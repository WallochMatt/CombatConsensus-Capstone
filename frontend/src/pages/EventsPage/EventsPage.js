import React from "react";
import "./EventsPage.css";
import { useNavigate } from "react-router-dom";

const EventsPage = (props) => {
    let navigate = useNavigate();

    function waitLink(event){
        navigate(`/event-card/${event.id}/`);
    }

    return ( 
        <div className="flex">
            <div className="side">
                <img id="masvidal" src="https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/fzq1iiyoxktijqzwe7g6/jorge-masvidal?fimg-ssr-default" />
            </div>

            <div className="centerize">
                <h1 className="true-center">EVENTS PAGE</h1>
                <div className="format">
                    {props.events &&
                    props.events.map((event, index) => (
                        <div className="blurbs" key={index}>
                            <button className="button" onClick={() => waitLink(event)} >
                                <p >
                                    {event.event_title}
                                </p>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="side">
                <img id="wonderboy" src="https://frontkick.online/wp-content/uploads/2020/12/Stephen-Wonderboy-Thompson-Frontkick.online.jpg" />
            </div>
        </div>
    );
};

export default EventsPage;