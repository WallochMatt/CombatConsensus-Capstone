import React from 'react';
import "./UserCards.css";


const UserCards = (props) => {
    return ( 
        <table>
        <thead>
          <tr className='shadow'>
              <th>Bout</th>
              <th>My Score</th>
          </tr>
        </thead>
        <tbody>
          <tr className='bottom-blurb'>
              <td>{props.card.match.bout_name}</td>
              <td><span style={{ color: "#A70E0E"}}>{props.card.red_fan_score}</span> - <span style={{ color: "#1B1EAB"}}>{props.card.blue_fan_score}</span></td>
          </tr>
        </tbody>
      </table>
    );
}

export default UserCards;