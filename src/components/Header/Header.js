import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        jovan6jovan
      </Link>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__list__item">
            <Link to="/about" className="nav__list__item__link">
              About
            </Link>
          </li>
          <li className="nav__list__item">
            <Link to="/projects" className="nav__list__item__link">
              Projects
            </Link>
          </li>
          <li className="nav__list__item">
            <Link to="/contact" className="nav__list__item__link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
