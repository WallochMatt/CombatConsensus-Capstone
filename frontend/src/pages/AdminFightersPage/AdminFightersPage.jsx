import FighterPut from "../../components/AdminFighterComponents/FighterPut/FighterPut";
import FighterPost from "../../components/AdminFighterComponents/FighterPost/FighterPost";
import FighterDelete from "../../components/AdminFighterComponents/FighterDelete/FighterDelete";
import "./AdminFightersPage.css";

const AdminFightersPage = (prosp) => {
    
    return ( 
        <div className="pad-in">
            <p className='dark'>Post</p>
            <FighterPost />
            <hr className="line-spacer"></hr>
            <p className='dark'>Put</p>
            <FighterPut />
            <div className="table-adjust">
                <h1 className='dark'>Fighters</h1>
                <br/>
                <table style={{marginLeft: '20%'}}>
                    <thead>
                        <tr>
                            <th className='dark'>ID</th>
                            <th className='dark'>Name</th>
                            <></>
                        </tr>
                    </thead>
                    <tbody>
                        {prosp.fighters.map((fighter, index) => (
                            <tr key={index}>
                                <td className='dark'>{fighter.id}</td>
                                <td className='dark'>{fighter.name}</td>
                                <FighterDelete id={fighter.id}/>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminFightersPage;