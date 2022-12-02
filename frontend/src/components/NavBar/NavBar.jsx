import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>Home</b>
          </Link>
        </li>

        <li>
          <Link to="/events" style={{ textDecoration: "none", color: "white" }}>
            <b>Events</b>
          </Link>
        </li>

        <li>
          <Link to="/matches" style={{ textDecoration: "none", color: "white" }}>
            <b>Matches</b>
          </Link>
        </li>
        
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>

      </ul>
    </div>
  );
};

export default Navbar;
