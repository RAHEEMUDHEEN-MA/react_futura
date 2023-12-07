import React from "react";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "../Styles/NavBar_Mobilex.css";
import imagexlogo from "../logomobilex.png";
import { Link } from "react-router-dom";

const NavBar_Mobilex = () => {
  return (
    <div className="trasperantBg">
      <Navbar expand="lg" style={{ width: "100%", padding: "0" }}>
        <div className="NavContainer">
          <Navbar.Brand
            href="#home"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {" "}
            <img src={imagexlogo} alt="Logo" className="logoimg" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Nav className="me-autol navlingcontainer ">
            <NavLink to="/home" className=" custom-nav-link">
              Home
            </NavLink>
            <NavLink to="/features" className=" custom-nav-link">
              Features
            </NavLink>

            <NavLink to="/Compatibility" className=" custom-nav-link">
              Compatibility
            </NavLink>

            <NavLink to="/FAQs" className=" custom-nav-link">
              FAQs
            </NavLink>
            <NavLink to="/Data">Data Forecaster</NavLink>

            <NavLink to="/Shop">Shop</NavLink>
            <NavLink to="/About_us">About Us</NavLink>
          </Nav>
          <div className="NvbtnHolder">
            <Button id="lngBtn">English</Button>
            <Button id="StartBtn">Get Started</Button>
          </div>
        </div>

        {/* </Container> */}
      </Navbar>
    </div>
  );
};

export default NavBar_Mobilex;
