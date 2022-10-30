import React from "react";
import "../../App.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div id="branding">
          <h1>
            <span className="highlight">Brothers </span> Web Design
          </h1>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink style={({isActive})=> ({color: isActive && "#a9508b"})} to="">Home</NavLink>
            </li>
            <li>
              <NavLink to="about" style={({isActive})=> ({color: isActive && "#a9508b"})}>About</NavLink>
            </li>
            <li>
              <NavLink to="services" style={({isActive})=> ({color: isActive && "#a9508b"})} >Services</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
