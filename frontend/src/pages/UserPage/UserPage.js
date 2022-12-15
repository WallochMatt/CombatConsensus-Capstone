import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./UserPage.css";
import UserCards from "../../components/UserCards/UserCards";


const UserPage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  // const [user, token] = useAuth();

  const {username} = useParams()
  const [cards, setCards] = useState([]); //if needed, I can put this in app, that way I can props it in ans still use all cards for a FAn's page

  const [accuracy, setAccuracy] = useState();
  
  useEffect(() => {
    const fetchCards = async () => {
      try {
        let response = await axios.get(`http://127.0.0.1:8000/user/${username}/`)
        setCards(response.data);
      }
      catch (error) {
        console.log(error.response);
      }
    };

    const fetchAccuracy = async () => {
        try {
          let response = await axios.get(`http://127.0.0.1:8000/user/${username}/accuracy/`)
          setAccuracy(response.data)
        }
        catch (error) {
          console.log(error.response);
        }
    }
    fetchCards();
    fetchAccuracy();
  }, []);


  return (
    <div className="flex">
      <div className="side red">
        <img id="weili" src="https://cdn.vox-cdn.com/thumbor/oLb01X0lJDBBrlSHfqirhA2CkOs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24197951/1441085929.jpg" />
      </div>

      <div className="centerize">

        
        <div className="top-row">
          <div className="my">
            <p style={{fontSize: '3.5em'}} data-cy="username">
              {username}
            </p>
          </div>
          <div className="accuracy">
            <p style={{fontSize: '2.2em'}}>{accuracy} </p>
            <p>Accuracy</p>
          </div>
        </div>
        <hr className="line"></hr>


        <div className="format">
          {cards &&
            cards.map((card, index) => (
              <div className="fit" key={index}>
                <UserCards card={card} />
              </div>
            ))}
        </div>

      </div>

      <div className="side blue">
        <img id="gaethje" src="https://s.yimg.com/os/creatr-uploaded-images/2021-11/e17af310-3d97-11ec-973b-e8502e4ddcfb" />
      </div>
    </div>
  );
};

export default UserPage;