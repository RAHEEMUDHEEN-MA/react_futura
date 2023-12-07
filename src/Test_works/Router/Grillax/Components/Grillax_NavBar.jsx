import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "../Styles/Grillax_NavBar.css";
import { Link, NavLink } from "react-router-dom";

function Grillax_NavBar() {
  return (
    <div>
      <div className="Navbar ">
        <div className="Container ">
          <div className="Navbrand">
            <img
              src="https://1g8d8d.n3cdn1.secureserver.net/wp-content/uploads/2023/11/Grillax_Logo-1-185x111.png"
              alt=""
            />
          </div>

          <div className="Nav">
          
          <NavLink to="/" className="links" >
              Home
            </NavLink>
            
          <NavLink to="/grillax" className="links">
              The Grillax
            </NavLink>
            
          <NavLink to="/process" className="links">
              our Process
            </NavLink>
            
          <NavLink to="/locations" className="links">
              Our Locations
            </NavLink>
            
          <NavLink to="/4" className="links">
              Career
            </NavLink>
            
          <NavLink to="/5" className="links">
              Contact Us
            </NavLink>
            
            <Button id="FranchiseBtn"> Franchise Enquiry</Button>
            
          </div>
        </div>  
      </div>
    </div>
  );
}

export default Grillax_NavBar;

