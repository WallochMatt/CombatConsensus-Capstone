import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import PostScore from "../../components/PostScore/PostScore";

const PostCondition = (props) => {
    const [user, token] = useAuth();

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
                            <p>Post your Score</p>
                            <PostScore match={props.currentMatch}/>
                        </div>
                    )
                }

                else if(user && user_entry.length > 0){
                    console.log("scroed already")
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