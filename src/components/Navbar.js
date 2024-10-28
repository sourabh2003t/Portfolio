import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Totod.</h1>
      <ul>
        <li>
          <Link to="hero" smooth={true} duration={500} className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} className="nav-link">
            Projects
          </Link>
        </li>
        <li>
          <Link to="experience" smooth={true} duration={500} className="nav-link">
            Experience
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
