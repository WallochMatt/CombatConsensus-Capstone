import MatchesPut from '../../components/AdminMatchesComponents/MatchesPut/MatchesPut';
import MatchesPost from '../../components/AdminMatchesComponents/MatchesPost/MatchesPost';
import MatchesDelete from '../../components/AdminMatchesComponents/MatchesDelete/MatchesDelete';

const AdminMatchesPage = (props) => {


    return ( 
        <div>
            <p>POST</p>
            <MatchesPost />
            <p>PUT</p>
            <MatchesPut />
            <div className="container">
                <h1>Matches(admin)</h1>
                <p>Id boutname eventid redcornerid bluecornerid redjudgeavg bluejudgeavg results numofRounds</p>
                {props.matches.map((match, index) => (
                    <div key={index}>
                        <p>
                            {match.id} {match.bout_name} {match.event_id} {match.red_corner_id}
                            {match.blue_corner_id} {match.red_judge_avg} {match.blue_judge_avg}
                            {match.results} {match.number_of_rounds}
                        </p>
                        <MatchesDelete id={match.id}/>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default AdminMatchesPage;