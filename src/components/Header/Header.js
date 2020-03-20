import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => (
    <header>
        <Link to="/" className="logo">Jovan Jovanovic</Link>
        <nav>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;