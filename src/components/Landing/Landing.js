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
        Passionate about Front-End Development. Loves to build things. Interested in React, but opened to learn any other Front-End library/framework. Motivated to work in a team and also to learn every day throughout new challenges.
      </p>
      <Button
        path="/projects"
        classNames="btn btn--blue landing__btn"
        text="Explore projects"
      />
    </section>
    <section className="landing__img">
      <img src={programmer} alt="Programmer illustration" />
    </section>
  </main>
);

export default Landing;
