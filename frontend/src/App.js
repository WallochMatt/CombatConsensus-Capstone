// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import UserPage from "./pages/UserPage/UserPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import EventsPage from "./pages/EventsPage/EventsPage";
import MatchesPage from "./pages/MatchesPage/MatchesPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <UserPage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/home" element={<HomePage />}/> */}
        <Route path="/events" element={<EventsPage />}/>
        <Route path="/matches" element={<MatchesPage />}/>
        <Route path="/user" element={<UserPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
