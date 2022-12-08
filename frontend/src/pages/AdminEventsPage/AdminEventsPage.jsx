import EventDelete from '../../components/AdminEventComponents/EventDelete/EventDelete';
import EventPost from '../../components/AdminEventComponents/EventPost/EventPost';
import EventPut from '../../components/AdminEventComponents/EventPut/EventPut';
import "./AdminEventsPage.css";

const AdminEventsPage = (props) => {

//input provides argument for an id param during the call of a submitfunction, id is a parameter for the axios call

    return ( 
        <div className='pad-in'>
            <p className='dark'>POST</p>
            <EventPost />
            <hr className='line-spacer'></hr>
            <p className='dark'>PUT</p>
            <EventPut />
            <div className='table-adjust'>
                <h1 className='dark'>Events</h1>
                <br/>

                <table style={{marginLeft: '20%'}}>
                    <thead>
                        <tr>
                            <th className='dark'>Id</th>
                            <th className='dark'>Title</th>
                            <th className='dark'>Date</th>
                            <></>
                        </tr>
                    </thead>
                    <tbody>
                        {props.events.map((event, index) => (
                            <tr key={index}>
                                <td className='dark'>{event.id}</td>
                                <td className='dark'>{event.event_title}</td>
                                <td className='dark'>{event.date}</td>
                                <td style={{textAlign: "left"}}><EventDelete id={event.id}/></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default AdminEventsPage;