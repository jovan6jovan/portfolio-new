import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaEnvelope,
  FaLaptopCode,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaGit,
} from "react-icons/fa";

import "./About.scss";
import Button from "../Button/Button";

const About = () => (
  <section className="about">
    <div className="about__first-section">
      <h2>Jovan Jovanovic</h2>
      <p>
        <FaMapMarkerAlt className="about__icon" style={{verticalAlign: "sub"}} /> Location: Belgrade, Serbia
      </p>
      <p>
        <FaEnvelope className="about__icon" style={{verticalAlign: "middle"}} /> jovan6jovanovic@gmail.com
      </p>
      <p>
        <FaLaptopCode className="about__icon" style={{verticalAlign: "text-bottom"}} /> Job: Front-End Developer
      </p>
      <a
        href="https://github.com/jovan6jovan"
        target="_blank"
        rel="noopener noreferrer"
        className="about__icon about__icon--larger"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/jovan6jovan"
        target="_blank"
        rel="noopener noreferrer"
        className="about__icon about__icon--larger"
      >
        <FaLinkedin />
      </a>
      <Button
        path="/"
        classNames="btn btn--blue about__btn"
        text="Download resume"
      />
    </div>
    <div className="about__second-section">
      <h4>Hi there!</h4>
      <p className="about__second-section__paragraph">
        My name is Jovan, I am 25 years old, and I live in Belgrade, the capital
        city of my beautiful country called Serbia. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Donec urna tellus, tristique ut efficitur
        nec, pretium vel tellus. Nam suscipit rutrum enim sit amet luctus. Duis
        sed augue turpis. Pellentesque dictum eget metus sed ultricies. Praesent
        pretium rutrum tincidunt. Donec condimentum nisl quam, id posuere leo
        scelerisque vitae. Phasellus rutrum risus id tortor vulputate, eu
        sollicitudin erat tempus. Sed euismod ac ipsum ut dignissim. Phasellus
        eu finibus ante, non aliquet tortor.
      </p>
    </div>
    <div className="about__skills">
      <h2 className="about__skills__heading">Skills</h2>
      <div className="about__skills__icons">
        <FaHtml5 className="about__icon about__icon--larger" />
        <FaCss3Alt className="about__icon about__icon--larger" />
        <FaJs className="about__icon about__icon--larger" />
        <FaSass className="about__icon about__icon--larger" />
        <FaReact className="about__icon about__icon--larger" />
        <FaGit className="about__icon about__icon--larger" />
      </div>
    </div>
  </section>
);

export default About;
