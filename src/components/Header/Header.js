import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => (
  <header>
    <Link to="/" className="logo">
      jovan6jovan
    </Link>
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <Link to="/about" className="nav__list-item-link">
            About
          </Link>
        </li>
        <li className="nav__list-item">
          <Link to="/projects" className="nav__list-item-link">
            Projects
          </Link>
        </li>
        <li className="nav__list-item">
          <Link to="/contact" className="nav__list-item-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;