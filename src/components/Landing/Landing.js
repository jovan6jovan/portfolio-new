import React from "react";
import "./Landing.scss";
import programmer from "../../images/programmer-v2.svg";
import Button from "../Button/Button";

const Landing = () => (
  <main className="landing">
    <section className="landing__content">
      <h1 className="landing__title">
        <span className="landing__title--span">Front-End </span>Developer
      </h1>
      <p className="landing__text">
        Not that we aren’t huge fans of IKEA, of course. I do think this
        combination can work, but it needs to be used as an accent, rather than
        a main color. In this space from Femina, the blue and yellow combo is
        lively but not childish when used in a judicious way.
      </p>
      <Button
        path="/projects"
        classNames="btn btn--blue landing__btn"
        text="Explore my projects"
      />
    </section>
    <section className="landing__img">
      <img src={programmer} alt="Programmer illustration" />
    </section>
  </main>
);

export default Landing;
