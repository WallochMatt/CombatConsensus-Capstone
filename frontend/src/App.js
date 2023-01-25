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
import AdminMatchesPage from "./pages/AdminMatchesPage/AdminMatchesPage";
import AdminFightersPage from "./pages/AdminFightersPage/AdminFightersPage";
import AdminEventsPage from "./pages/AdminEventsPage/AdminEventsPage";
import MatchPage from "./pages/MatchPage/MatchPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import AdminOnlyRoute from "./utils/AdminOnlyRoute";
import PrivateRoute from "./utils/PrivateRoute";
import { useState, useEffect } from "react";

function App() {

  const [events, setEvents] = useState([]);
  const [matches, setMatches] = useState([]);
  const [fighters, setFighters] = useState([]);

    useEffect(() => {
      async function fetchEvents(){
        try {
            let response = await axios.get("http://3.143.230.10:8000/events/");
            // let response = await axios.get("http://3.143.230.10:8000/events/");
            setEvents(response.data)
        }
        catch(error){
            console.log(error.response.data);
        }
      };
      fetchEvents();

      const fetchMatches = async () => {
        try {
            let response = await axios.get("http://3.143.230.10:8000/matches/");
            setMatches(response.data)
        }
        catch(error){
            console.log(error.response.data);
        }
      };
      fetchMatches();
  
      const fetchFighters = async () => {
        try{
            let  response = await axios.get('http://3.143.230.10:8000/fighters/');
            setFighters(response.data);
        }
        catch(error){
            console.log(error.response.data);
        }
      };
      fetchFighters();
    }, [])



  return (
    <div className="app-main-div"> 
      <Navbar />
      <Routes>

        <Route path="/admin/matches/" element={
          <AdminOnlyRoute>
            <AdminMatchesPage matches={matches} setMatches={setMatches}/>
          </AdminOnlyRoute>
        }/>

        <Route path="/admin/fighters/" element={
          <AdminOnlyRoute>
            <AdminFightersPage fighters={fighters} setFighters={setFighters}/>
          </AdminOnlyRoute>
        }/>

        <Route path="/admin/events/" element={
          <AdminOnlyRoute>
            <AdminEventsPage events={events} setEvents={setEvents}/>
          </AdminOnlyRoute>
        }/>

        <Route path="/" element={<HomePage fighters={fighters}/>}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/events" element={<EventsPage events={events} />} />
        <Route path="/matches" element={<MatchesPage matches={matches}/>}/>
        <Route path="/user/:username" element={<UserPage />}/>
        <Route path="/event-card/:id" element={<EventCardPage events={events} matches={matches} />}/>
        <Route path="/match/:id" element={<MatchPage matches={matches} fighters={fighters}/>}/>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
