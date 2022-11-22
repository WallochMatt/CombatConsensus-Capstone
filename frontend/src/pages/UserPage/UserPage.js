import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const UserPage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [cards, setCards] = useState([]); //if needed, I can put this in app, that way I can props it in ans still use all cards for a FAn's page

  useEffect(() => {
    const fetchCards = async () => {
      try {
        let response = await axios.get(`http://127.0.0.1:8000/user/${user.id}/`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCards(response.data);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchCards();
  }, [token]);

  return (
    <div className="container">
      <h1>Welcome back, {user.username}!</h1>
      <ul>
        {cards &&
          cards.map((card) => (
            <li key={card.id}>
              My scores  {card.fan_score_f1} {card.fan_score_f2} {card.match.bout_name}
              <br/>
              The judges average {card.match.judge_avg_one} {card.match.judge_avg_two}
              <br/>
              Results= {card.match.results}
            </li>
          ))}
        </ul>
    </div>
  );
};

export default UserPage;


//   // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
//   // The "token" value is the JWT token that you will send in the header of any request requiring authentication
//   //TODO: Add an AddCars Page to add a car for a logged in user's garage
//   const [user, token] = useAuth();
//   const [cars, setCars] = useState([]);

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         });
//         setCars(response.data);
//       } catch (error) {
//         console.log(error.response.data);
//       }
//     };
//     fetchCars();
//   }, [token]);
//   return (
//     <div className="container">
//       <h1>USER Page for {user.username}!</h1>
//       {cars &&
//         cars.map((car) => (
//           <p key={car.id}>
//             {car.year} {car.model} {car.make}
//           </p>
//         ))}
//     </div>
//   );
// };
