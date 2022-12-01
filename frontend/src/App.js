// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";

// Pages Imports
import UserPage from "./pages/UserPage/UserPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import EventsPage from "./pages/EventsPage/EventsPage";
import MatchesPage from "./pages/MatchesPage/MatchesPage";
import HomePage from "./pages/HomePage/HomePage";
import EventCardPage from "./pages/EventCardPage/EventCardPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { useState, useEffect } from "react";

function App() {

  const [events, setEvents] = useState([]);
  const [matches, setMatches] = useState([]);
  const [fighters, setFighters] = useState([]);

    useEffect(() => {
      const fetchEvents = async () => {
        try {
            let response = await axios.get("http://127.0.0.1:8000/events/");
            setEvents(response.data)
        }
        catch(error){
            console.log(error.response.data);
        }
      };
      fetchEvents();


      const fetchMatches = async () => {
        try {
            let response = await axios.get("http://127.0.0.1:8000/matches/");
            setMatches(response.data)
        }
        catch(error){
            console.log(error.response.data);
        }
      };
      fetchMatches();
  

      const fetchFighters = async () => {
        try{
            let  response = await axios.get('http://127.0.0.1:8000/fighters/');
            setFighters(response.data);
        }
        catch(error){
            console.log(error.response.data);
        }
      };
      fetchFighters();
    }, [])






  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route
          path="/"
          element={
            <PrivateRoute>
              <UserPage />
            </PrivateRoute>
          }
        /> */}
        <Route path="/" element={<HomePage fighters={fighters}/>}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/events" element={<EventsPage events={events} />} />
        <Route path="/matches" element={<MatchesPage matches={matches} />}/>
        <Route path="/user/:username" element={<UserPage />}/>
        <Route path="/event-card/:id/" element={<EventCardPage events={events} matches={matches} />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
