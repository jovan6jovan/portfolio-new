import React from "react";
import { Link } from "react-router-dom";
import "./Landing.scss";
import programmer from "../../images/programmer.svg"

const Landing = () => (
  <main className="landing">
    <section className="landing__content">
      <h1 className="landing__title">Front-End Developer</h1>
      <p className="landing__text">
        Not that we aren’t huge fans of IKEA, of course. I do think this
        combination can work, but it needs to be used as an accent, rather than a
        main color. In this space from Femina, the blue and yellow combo is lively
        but not childish when used in a judicious way.
      </p>
      <Link to="/projects" className="btn btn--blue landing__btn">
        Explore my projects
      </Link>
    </section>
    <section className="landing__img">
      <img src={programmer} alt="Programmer illustration" />
    </section>
  </main>
);

export default Landing;