import React from "react";
import { NavLink } from "react-router-dom";
import TimeStamp from "./Timestamp";
import logo from "./images/biswajit-logo.svg";

function Header(){
    return(
            <nav className="head_sec">
                <div className="wrapper">
                <span className="logo_sec"><a href="#"><img src={logo} className="logo" alt="logo" /></a></span>
                <TimeStamp />
                <ul className="nav_sec">
                    <li><NavLink excat to="/">Home</NavLink></li>
                    <li><NavLink excat to="/about">About</NavLink></li>
                    <li><NavLink excat to="/education">Education</NavLink></li>
                    <li><NavLink excat to="/employer">Employer</NavLink></li>
                    <li><NavLink excat to="/contact">Contact Me</NavLink></li>
                </ul>
                </div>
            </nav>
    );
}

export default Header;