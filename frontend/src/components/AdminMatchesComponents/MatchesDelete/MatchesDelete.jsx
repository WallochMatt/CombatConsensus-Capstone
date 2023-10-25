import axios from "axios";
import useAuth from '../../../hooks/useAuth';


const MatchesDelete = (props) => {

    const [user, token] = useAuth();

    async function deleteMatch(){
        try{
            let response = await axios.delete(`http://3.142.40.75:8000/matches/${props.id}/admin/edit/`, {
                headers: {
                    Authorization: "Bearer " + token,
                }
            });
            if(response.status === 204){
                window.location.reload(false);
            }
        }
        catch(error){
            console.log(error)
        }
    };
    

    return (
        <button className="adm-ev-del" onClick={deleteMatch}>Delete</button>
    );
}

export default MatchesDelete;