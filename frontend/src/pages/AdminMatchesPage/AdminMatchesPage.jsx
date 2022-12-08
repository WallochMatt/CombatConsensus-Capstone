import MatchesPut from '../../components/AdminMatchesComponents/MatchesPut/MatchesPut';
import MatchesPost from '../../components/AdminMatchesComponents/MatchesPost/MatchesPost';
import MatchesDelete from '../../components/AdminMatchesComponents/MatchesDelete/MatchesDelete';

const AdminMatchesPage = (props) => {


    return ( 
        <div className='pad-in'>
            <p className='dark'>POST</p>
            <MatchesPost />
            <hr className='line-spacer'></hr>
            <p className='dark'>PUT</p>
            <MatchesPut />
            <hr className='line-spacer'></hr>
            <div className="table-adjust">
                <h1 className='dark'>Matches</h1>
                <br/>
                <table>
                    <thead>
                        <tr>
                            <th className='dark'>ID</th>
                            <th className='dark'>Bout Name</th>
                            <th className='dark'>Event's ID</th>
                            <th className='dark'>Red Corner</th>
                            <th className='dark'>Blue Corner</th>
                            <th className='dark'>Judges Red Score</th>
                            <th className='dark'>Judges Blue Score</th>
                            <th className='dark'>Results</th>
                            <th className='dark'>Number of Rounds</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.matches.map((match, index) => (
                        <tr key={index}>
                            <td className='dark'>{match.id}</td>
                            <td className='dark'>{match.bout_name}</td>
                            <td className='dark'>{match.event_id}</td>
                            <td className='dark'>{match.red_corner_id}</td>
                            <td className='dark'>{match.blue_corner_id}</td>
                            <td className='dark'>{match.red_judge_avg}</td>
                            <td className='dark'>{match.blue_judge_avg}</td>
                            <td className='dark'>{match.results}</td>
                            <td className='dark'>{match.number_of_rounds}</td>
                            <td><MatchesDelete id={match.id}/></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

}

export default AdminMatchesPage;