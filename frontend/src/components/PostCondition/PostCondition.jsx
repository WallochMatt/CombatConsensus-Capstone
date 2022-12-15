import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import PostScore from "../../components/PostScore/PostScore";
import { useState } from "react";
import "./PostCondition.css"

const PostCondition = (props) => {
    const [user, token] = useAuth();




    const [modal, setModal] = useState(false)
    
    function spawnModal(){
        setModal(true)
    }



    function findCondition(){
        
            if(user){
                let user_entry = props.scoreCards.filter(function(el){
                    console.log(el);
                    if(el.fan.id === user.id){
                        console.log("Tally the filter")
                        return true
                    }});
                if(user && user_entry.length === 0){
                    return(
                        <div>
                            <Link to="#" className="post-call" onClick={spawnModal} style={{color: "#ffc386"}}>Click Here To Post Your Score!</Link>
                            {modal && <PostScore match={props.currentMatch} setModal={setModal}/>}
                        </div>
                    )
                }

                else if(user && user_entry.length > 0){
                    return(
                    <div>
                        <p className="post-title">Thank you for your score card, {user.username}!</p>
                    </div>
                    )
                }
            }

            else{
                return(
                    <p className="log-in-call">
                        <Link style={{color: "#ff7ff9"}} to="/login">Log in to score bouts!</Link>
                    </p>
                )
            }
        };
    


    return (
        <div>
            {findCondition()}
        </div>
    )
}

export default PostCondition;