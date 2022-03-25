import { useState } from "react";
import "./Navbar.css";
import hamburger from "../../Assets/hamburger.svg";
import cross from "../../Assets/cross.svg";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [icon, setIcon] = useState(hamburger)

  const handleClick = () => {
    icon === hamburger ? setIcon(cross) : setIcon(hamburger);
    setShow(!show);
  }

  return (
    <div id="main-nav">
      <button id="hamburgerbtn" onClick={handleClick}>
        <img src={icon} alt="" />
      </button>
      {show && <MobileNavBar/>}
      <div id="navbar">
        <nav id="nav">
          <div id="logo">
            <h1>999 WRLD</h1>
          </div>
          <div id="navigation">
            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="#services">Service</a>
            <a href="#clients">Client</a>
            <a href="#works">Work</a>
            <a href="#blogs">Blog</a>
            <a href="#contacts">Contact Us</a>
          </div>
        </nav>
      </div>
    </div>
  );
};

const MobileNavBar = () => {
  return (
    <div id="mobile-navbar">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Service</a>
        </li>
        <li>
          <a href="#clients">Client</a>
        </li>
        <li>
          <a href="#works">Work</a>
        </li>
        <li>
          <a href="#blogs">Blog</a>
        </li>
        <li>
          <a href="#contacts">Contact Us</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
