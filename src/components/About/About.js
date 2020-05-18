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
      <a href="../../resume/Jovan_Jovanovic_resume.pdf" className="btn btn--blue about__btn" download>
        Download resume
      </a>
    </div>
    <div className="about__second-section">
      <h4>Hi there!</h4>
      <p className="about__second-section__paragraph">
        My name is Jovan, I am 25 years old, and I live in Belgrade, the capital city of my beautiful country called Serbia. I enjoy building user interfaces.
        Most of my free time I spend experimenting with CSS, JavaScript, and my favorite library called React.
        Learning new skills is the thing I adore, and because of that, I love working hard in order to absorb all new pieces of information that I get from the learning.
        You can see my work on the Projects page, and also there you can see how I write the code.
        If some of my projects seem interesting to you, feel free to contact me directly via email, or you can use the contact form, which is located on the Contact page.
      </p>
      <h4>Looking forward to hearing from you!</h4>
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
