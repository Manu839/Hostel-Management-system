import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import navUserIcon from "../assets/nav_user_icon.svg";

const Navbar = () => {
  const location = useLocation();

  if (location.pathname === "/" || location.pathname === "/adminpage") {
    return null; // Hide Navbar for paths "/" and "/adminpage"
  }

  if (
    location.pathname === "/home" ||
    location.pathname === "/services" ||
    location.pathname === "/about"
  ) {
    return (
      <header className="nav-bar-container">
        <nav className="nav-bar">
          <Link className="logo" to="/home">
            <span style={{ color: "rgb(34, 101, 159)" }}>HOSTEL -</span>
            <span style={{ color: "rgb(34, 101, 155)" }}> HOUSE</span>
          </Link>
          <ul>
            <li>
              <Link to="/services">SERVICES</Link>
            </li>
          </ul>
          <img src={navUserIcon} alt="Account Icon" />
        </nav>
      </header>
    );
  }
};

export default Navbar;
