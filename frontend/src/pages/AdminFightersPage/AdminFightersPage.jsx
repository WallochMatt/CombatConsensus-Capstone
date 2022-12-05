import FighterPut from "../../components/AdminFighterComponents/FighterPut/FighterPut";
import FighterPost from "../../components/AdminFighterComponents/FighterPost/FighterPost";
import FighterDelete from "../../components/AdminFighterComponents/FighterDelete/FighterDelete";

const AdminFightersPage = (prosp) => {
    
    return ( 
        <div>
            <p>Post fighters</p>
            <FighterPost />
            <p>Put fighter</p>
            <FighterPut />
            <div>
                <h1>Fighters(admins)</h1>
                <p>Id Name</p>
                {prosp.fighters.map((fighter, index) => (
                    <div key={index}>
                        <p>
                        {fighter.id} {fighter.name}
                        </p>
                        <FighterDelete id={fighter.id}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminFightersPage;