import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const onNavItemClick = (e) => {
    let current = document.getElementsByClassName("active-nav-item");
    current[0].className = current[0].className.replace(" active-nav-item", "");
    e.target.className += " active-nav-item";
  };

  return (
    <header>
      <Link to="/" className="logo">
        jovan6jovan
      </Link>
      <nav className="nav">
        <ul className="nav__list">
        <li className="nav__list__item">
            <Link to="/" className="nav__list__item__link active-nav-item" onClick={onNavItemClick}>
              Home
            </Link>
          </li>
          <li className="nav__list__item">
            <Link to="/about" className="nav__list__item__link" onClick={onNavItemClick}>
              About
            </Link>
          </li>
          <li className="nav__list__item">
            <Link to="/projects" className="nav__list__item__link" onClick={onNavItemClick}>
              Projects
            </Link>
          </li>
          <li className="nav__list__item">
            <Link to="/contact" className="nav__list__item__link" onClick={onNavItemClick}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
