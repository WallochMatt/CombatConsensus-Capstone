import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  //HERE I could ternary(or if/else) the navbar to display diferrently for admins or base users. Returning the corresponding NavBar

  if(user && (user.is_staff)){
    return (
        <div style={{background: "var(--blue)"}} className="navBar">
          <ul>
            
            <li className="brand">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <b>Admin</b>
              </Link>
            </li>
    
            <li>
              <Link to="/admin/events/" style={{ textDecoration: "none", color: "white" }}>
                <b>Events</b>
              </Link>
            </li>
    
            <li>
              <Link to="/admin/matches/" style={{ textDecoration: "none", color: "white" }}>
                <b>Matches</b>
              </Link>
            </li>

            <li>
              <Link to="/admin/fighters/" style={{ textDecoration: "none", color: "white", marginRight: '2em' }}>
                <b>Fighters</b>
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
    }
    else{
      return (
        <div style={{background: "var(--red)"}} className="navBar">
          <ul>
            
            <li className="brand">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <b>CC</b>
              </Link>
            </li>
    
            <li style={{ postition: "fixed", left: "33.3%"}}>
              <Link to="/events" style={{ textDecoration: "none", color: "white" }}>
                <b>Events</b>
              </Link>
            </li>
    
            <li style={{ postition: "fixed", right: "33.3%"}}>
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





};

export default Navbar;
